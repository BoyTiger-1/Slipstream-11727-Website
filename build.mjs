// Zero-dependency static build for the Slipstream 11727 site.
//   node build.mjs            → writes ./dist
//   node build.mjs --serve    → builds, serves http://localhost:4321 and rebuilds on change
import { cp, mkdir, readdir, rm, writeFile, readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const dist = join(root, 'dist');

async function build() {
  const { page } = await import(pathToFileURL(join(root, 'src/layout.mjs')));
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await cp(join(root, 'public'), dist, { recursive: true });
  const files = (await readdir(join(root, 'src/pages'))).filter((f) => f.endsWith('.mjs'));
  for (const f of files) {
    const mod = await import(pathToFileURL(join(root, 'src/pages', f)));
    const slug = f.replace(/\.mjs$/, '');
    await writeFile(join(dist, `${slug}.html`), page({ slug, ...mod.default }));
  }
  await writeFile(join(dist, '.nojekyll'), '');
  console.log(`built ${files.length} pages → dist/`);
}

const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.json': 'application/json',
};

function serve(port = 4321) {
  createServer(async (req, res) => {
    let p = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (p.endsWith('/')) p += 'index.html';
    let file = join(dist, p);
    if (!file.startsWith(dist)) return res.writeHead(403).end();
    try {
      if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
      res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
      res.end(await readFile(file));
    } catch {
      res.writeHead(404, { 'content-type': types['.html'] });
      res.end(await readFile(join(dist, '404.html')).catch(() => 'Not found'));
    }
  }).listen(port, () => console.log(`http://localhost:${port}`));
}

if (process.argv.includes('--serve')) {
  await build();
  serve();
  let t;
  const rebuild = () => {
    clearTimeout(t);
    // Rebuild in a child process so edited modules are re-imported fresh.
    t = setTimeout(() => spawn(process.execPath, [fileURLToPath(import.meta.url)], { stdio: 'inherit' }), 120);
  };
  for (const dir of ['src', 'public']) watch(join(root, dir), { recursive: true }, rebuild);
} else {
  await build();
}
