import { team, links } from './data.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const icon = {
  arrow: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg>`,
  out: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg>`,
  caret: `<svg class="i i--caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,
  instagram: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></svg>`,
  youtube: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9v6l5-3z" fill="currentColor"/></svg>`,
  mail: `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
};

/** Link attributes for an external URL. */
export const ext = (url) => `href="${esc(url)}" target="_blank" rel="noopener"`;

/** A button-style link. Pass url=null to render a disabled "coming soon" chip. */
export function btn(label, url, { kind = 'solid', external = false, magnet = true } = {}) {
  if (!url) return `<span class="btn btn--${kind} is-soon" aria-disabled="true"><span>${esc(label)}</span><em>Coming soon</em></span>`;
  const attrs = external ? ext(url) : `href="${esc(url)}"`;
  return `<a class="btn btn--${kind}" ${attrs}${magnet ? ' data-magnet' : ''}><span>${esc(label)}</span>${external ? icon.out : icon.arrow}</a>`;
}

const nav = [
  {
    label: 'About',
    href: 'about.html',
    items: [
      ['Who we are', 'about.html', 'Intro, vision and values'],
      ['Off-season events', 'events.html', 'Bordie, Girls Gen, Block Party'],
      ['Our robots', 'robots.html', 'Venturi and Swervie'],
      ['Team structure', 'team.html', 'Six subteams, one draft'],
      ['What is FIRST', 'first.html', 'The sport for the mind'],
    ],
  },
  {
    label: 'Sponsors',
    href: 'sponsors.html',
    items: [
      ['Our sponsors', 'sponsors.html', 'The grid that backs us'],
      ['Sponsor us', 'sponsor-us.html', 'Why, how and the packet'],
      ['Donate', links.donate, 'Give Lively', true],
      ['Amazon wishlist', links.amazonWishlist, 'Send a part directly', true],
      ['Team store', 'sponsor-us.html#store', 'Coming soon'],
    ],
  },
  { label: 'Impact', href: 'impact.html' },
  {
    label: 'Resources',
    href: 'resources.html',
    items: [
      ['Documentation', 'resources.html', 'Binder, handbook, links'],
      ['Brand guidelines', 'brand.html', 'Logo, colour and type'],
    ],
  },
  { label: 'Join us', href: 'join.html' },
  { label: 'Contact', href: 'contact.html' },
];

function header(current) {
  const item = (n) => {
    const active = n.href === current || (n.items || []).some((i) => i[1] === current);
    if (!n.items)
      return `<li><a class="nav__link${active ? ' is-active' : ''}" href="${n.href}">${n.label}</a></li>`;
    return `<li class="nav__group">
      <a class="nav__link${active ? ' is-active' : ''}" href="${n.href}" aria-haspopup="true" aria-expanded="false">${n.label}${icon.caret}</a>
      <div class="nav__panel"><ul>
        ${n.items
          .map(
            ([label, href, note, external]) =>
              `<li><a ${external ? ext(href) : `href="${href}"`}><b>${label}${external ? icon.out : ''}</b><small>${note}</small></a></li>`
          )
          .join('')}
      </ul></div>
    </li>`;
  };
  const mobile = nav
    .map(
      (n, i) => `<li style="--i:${i}">
        <a class="menu__main" href="${n.href}"><span>0${i + 1}</span>${n.label}</a>
        ${
          n.items
            ? `<ul class="menu__sub">${n.items
                .map(([label, href, , external]) => `<li><a ${external ? ext(href) : `href="${href}"`}>${label}</a></li>`)
                .join('')}</ul>`
            : ''
        }
      </li>`
    )
    .join('');

  return `<a class="skip" href="#main">Skip to content</a>
<div class="lap" aria-hidden="true"><i></i></div>
<header class="header" data-header>
  <a class="brand" href="index.html" aria-label="Slipstream 11727 home">
    <img src="img/brand/logo-color-dark.png" width="1200" height="658" alt="Slipstream">
  </a>
  <nav class="nav" aria-label="Main"><ul>${nav.map(item).join('')}</ul></nav>
  <div class="header__end">
    <a class="btn btn--solid btn--sm" ${ext(links.donate)} data-magnet><span>Donate</span>${icon.out}</a>
    <button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu" data-burger><i></i><i></i></button>
  </div>
</header>
<div class="menu" id="menu" data-menu aria-hidden="true">
  <div class="menu__checker" aria-hidden="true"></div>
  <ul class="menu__list">${mobile}</ul>
  <div class="menu__foot">
    <a ${ext(links.donate)} class="btn btn--light"><span>Donate</span>${icon.out}</a>
    <a ${ext(links.instagram)} aria-label="Instagram">${icon.instagram}</a>
    <a ${ext(links.youtube)} aria-label="YouTube">${icon.youtube}</a>
    <a href="mailto:${team.email}" aria-label="Email">${icon.mail}</a>
  </div>
</div>`;
}

function footer() {
  return `<footer class="footer">
  <div class="footer__top">
    <div class="footer__brand">
      <img src="img/brand/logo-color-light-number.png" width="1200" height="752" alt="Slipstream 11727" loading="lazy">
      <p>FRC Team ${team.number}<br>${team.school}<br>${team.street}<br>${team.city}</p>
      <a class="footer__mail" href="mailto:${team.email}">${team.email}</a>
    </div>
    <div class="footer__cols">
      <div>
        <h3>Connect</h3>
        <ul>
          <li><a ${ext(links.instagram)}>Instagram</a></li>
          <li><a ${ext(links.youtube)}>YouTube</a></li>
          <li><a href="mailto:${team.email}">Email</a></li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li><a href="sponsor-us.html">Become a sponsor</a></li>
          <li><a href="sponsors.html">Our sponsors</a></li>
          <li><a ${ext(links.donate)}>Donate</a></li>
          <li><a ${ext(links.amazonWishlist)}>Amazon wishlist</a></li>
          <li><a href="sponsor-us.html#store">Store</a></li>
        </ul>
      </div>
      <div>
        <h3>Get involved</h3>
        <ul>
          <li><a href="contact.html">Contact us</a></li>
          <li><a href="join.html">Join the team</a></li>
          <li><a href="join.html#mentors">Mentor with us</a></li>
          <li><a href="impact.html">Impact</a></li>
        </ul>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="events.html">Off-season events</a></li>
          <li><a href="robots.html">Our robots</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="first.html">What is FIRST</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer__word" aria-hidden="true"><img src="img/brand/wordmark-white.png" width="1000" height="72" alt="" loading="lazy"></div>
  <div class="footer__base">
    <span>© ${new Date().getFullYear()} FRC Slipstream - ${team.number}</span>
    <span>${team.coords}</span>
    <span>Built by Slipstream students. <i>FIRST</i>® and FRC are trademarks of <i>FIRST</i>.</span>
  </div>
</footer>`;
}

/** Purple title band used at the top of every inner page. */
export function pageHero({ sector, title, lead, crumbs = [] }) {
  return `<section class="phero">
  <canvas class="phero__flow" data-flow="dark" aria-hidden="true"></canvas>
  <div class="phero__in">
    <p class="kicker kicker--light"><a href="index.html">Home</a>${crumbs.map((c) => `<span>/</span>${c}`).join('')}<span>/</span><b>${sector}</b></p>
    <h1 class="phero__title" data-split>${title}</h1>
    ${lead ? `<p class="phero__lead" data-reveal>${lead}</p>` : ''}
  </div>
  <div class="phero__checker" aria-hidden="true"></div>
</section>`;
}

export function sectionHead({ no, label, title, light = false }) {
  return `<header class="shead${light ? ' shead--light' : ''}">
  <p class="kicker${light ? ' kicker--light' : ''}"><b>${no}</b><span>/</span>${label}</p>
  <h2 class="shead__title" data-split>${title}</h2>
</header>`;
}

export function page({ slug, title, description, body, home = false }) {
  const full = home ? `Slipstream 11727 | FRC Team at North Creek High School` : `${title} | Slipstream 11727`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#472F91">
<meta property="og:title" content="${esc(full)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="img/photos/team-blockparty.jpg">
<meta property="og:type" content="website">
<link rel="icon" type="image/png" sizes="48x48" href="img/brand/favicon-48.png">
<link rel="apple-touch-icon" href="img/brand/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,800;1,300&family=Orbitron:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/site.css">
<script>document.documentElement.classList.add('js');try{if(!sessionStorage.getItem('ss-intro'))document.documentElement.classList.add('intro')}catch(e){}</script>
</head>
<body class="${home ? 'is-home' : 'is-inner'}" data-page="${slug}">
${home ? `<div class="intro-screen" aria-hidden="true"><div class="intro-screen__mark"><img src="img/brand/mark-color-light.png" width="900" height="430" alt=""><i></i><i></i><i></i></div></div>` : ''}
${header(slug + '.html')}
<main id="main">
${body}
</main>
${footer()}
<script src="js/flow.js" defer></script>
<script src="js/site.js" defer></script>
</body>
</html>
`;
}
