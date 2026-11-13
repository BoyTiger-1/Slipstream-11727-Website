/* Slipstream 11727 — interactions. No dependencies. */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* intro plays once per browser session */
  if (root.classList.contains('intro')) {
    try { sessionStorage.setItem('ss-intro', '1'); } catch (e) {}
    setTimeout(() => root.classList.remove('intro'), 2400);
  }

  /* ── header, lap bar, menu ─────────────────────────────── */
  const header = $('[data-header]');
  let lastY = scrollY;
  function onScrollHeader() {
    const y = scrollY;
    header.classList.toggle('is-top', y < 40);
    if (!root.classList.contains('menu-open')) header.classList.toggle('is-hidden', y > lastY && y > 260);
    lastY = y;
    const max = document.documentElement.scrollHeight - innerHeight;
    root.style.setProperty('--lap', max > 0 ? (y / max).toFixed(4) : 0);
  }

  const burger = $('[data-burger]'), menu = $('[data-menu]');
  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', !open);
    if (open) header.classList.remove('is-hidden');
  }
  burger.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
  addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  matchMedia('(min-width: 1101px)').addEventListener('change', (e) => e.matches && setMenu(false));

  /* dropdowns: hover and focus are CSS; this keeps aria in sync and handles touch */
  $$('.nav__group').forEach((g) => {
    const link = $('.nav__link', g);
    const set = (v) => { g.classList.toggle('is-open', v); link.setAttribute('aria-expanded', v); };
    g.addEventListener('mouseenter', () => link.setAttribute('aria-expanded', true));
    g.addEventListener('mouseleave', () => set(false));
    link.addEventListener('touchend', (e) => { if (!g.classList.contains('is-open')) { e.preventDefault(); set(true); } });
    g.addEventListener('focusout', (e) => !g.contains(e.relatedTarget) && set(false));
  });

  /* ── split headings into words ─────────────────────────── */
  function split(el) {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(' '));
            const w = document.createElement('span'); w.className = 'w';
            const inner = document.createElement('span'); inner.className = 'w__in'; inner.style.setProperty('--i', i++);
            inner.textContent = part; w.appendChild(inner); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    el.setAttribute('aria-label', el.textContent.trim());
    walk(el);
  }
  if (!reduce) $$('[data-split]').forEach(split);

  /* ── reveal on scroll ──────────────────────────────────── */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }),
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  );
  $$('[data-reveal], [data-split]').forEach((el) => io.observe(el));

  /* ── counters ──────────────────────────────────────────── */
  const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.count;
    if (reduce) return;
    const dur = 900 + Math.min(900, to * 60), t0 = performance.now();
    (function tick(t) {
      const p = clamp((t - t0) / dur), eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach((el) => { if (!reduce) el.textContent = '0'; cio.observe(el); });

  /* ── accordion (core values) ───────────────────────────── */
  $$('[data-accordion]').forEach((list) => {
    const items = $$('.value', list);
    items.forEach((item) => $('button', item).addEventListener('click', () => {
      const open = !item.classList.contains('is-open');
      items.forEach((o) => { o.classList.remove('is-open'); $('button', o).setAttribute('aria-expanded', false); });
      if (open) { item.classList.add('is-open'); $('button', item).setAttribute('aria-expanded', true); }
    }));
  });

  /* ── scroll-linked pieces ──────────────────────────────── */
  const shifts = $$('[data-shift]');
  const hero = $('[data-hero]');
  const scrub = $('[data-scrub]');
  let scrubWords = [];
  if (scrub && !reduce) {
    scrub.innerHTML = scrub.textContent.trim().split(/\s+/).map((w) => `<span class="sw">${w}</span>`).join(' ');
    scrubWords = $$('.sw', scrub);
  }
  const parallax = $$('[data-parallax]');

  /* progress track: vertical scroll drives a horizontal rail */
  const track = $('[data-track]');
  let trackOn = false, trackDist = 0;
  const rail = track && $('[data-track-rail]', track);
  const stops = track ? $$('.stop', track) : [];
  function layoutTrack() {
    if (!track) return;
    const want = innerWidth > 900 && innerHeight > 620 && !reduce;
    track.classList.toggle('is-pinned', want);
    trackOn = want;
    if (!want) { track.style.height = ''; rail.style.transform = ''; return; }
    trackDist = Math.max(0, rail.scrollWidth - innerWidth);
    track.style.height = innerHeight + trackDist + 'px';
  }
  function driveTrack() {
    if (!track) return;
    let p;
    if (trackOn) {
      p = clamp(-track.getBoundingClientRect().top / (trackDist || 1));
      rail.style.transform = `translate3d(${-p * trackDist}px,0,0)`;
    } else {
      const view = rail.parentElement;
      p = clamp(view.scrollLeft / Math.max(1, rail.scrollWidth - view.clientWidth));
    }
    // the car runs the rail a little ahead of the viewport's left edge
    const carX = p * (rail.scrollWidth - innerWidth) + innerWidth * (0.12 + 0.76 * p);
    rail.style.setProperty('--p', clamp(carX / rail.scrollWidth).toFixed(4));
    stops.forEach((s) => s.classList.toggle('is-passed', s.offsetLeft + 28 <= carX));
  }
  if (track) rail.parentElement.addEventListener('scroll', driveTrack, { passive: true });

  let ticking = false;
  function frame() {
    ticking = false;
    onScrollHeader();
    const y = scrollY, vh = innerHeight;
    if (hero && !reduce && y < vh * 1.2) {
      shifts.forEach((el) => (el.style.transform = `translate3d(${(+el.dataset.shift * y * 0.22).toFixed(1)}px,0,0)`));
    }
    if (scrubWords.length) {
      const r = scrub.getBoundingClientRect();
      const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.32));
      const n = Math.round(p * scrubWords.length);
      scrubWords.forEach((w, i) => w.classList.toggle('is-lit', i < n));
    }
    if (!reduce) parallax.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const off = (r.top + r.height / 2 - vh / 2) * -(+img.dataset.parallax);
      img.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
    });
    driveTrack();
  }
  const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', () => { layoutTrack(); queue(); });
  addEventListener('load', () => { layoutTrack(); queue(); });
  layoutTrack(); frame();

  /* ── magnetic buttons ──────────────────────────────────── */
  if (matchMedia('(hover: hover)').matches && !reduce) {
    $$('[data-magnet]').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${((e.clientX - r.left) / r.width - 0.5) * 10}px, ${((e.clientY - r.top) / r.height - 0.5) * 8}px)`;
      });
      b.addEventListener('pointerleave', () => (b.style.transform = ''));
    });
  }

  /* ── gallery lightbox ──────────────────────────────────── */
  const items = $$('[data-gallery] [data-full]');
  if (items.length && 'showModal' in HTMLDialogElement.prototype) {
    const dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.innerHTML = '<button type="button" autofocus>Close ✕</button><img alt="">';
    document.body.appendChild(dlg);
    const img = $('img', dlg);
    let idx = 0;
    const show = (i) => {
      idx = (i + items.length) % items.length;
      const clone = img.cloneNode(); // restart the wipe animation
      clone.src = items[idx].dataset.full; clone.alt = $('img', items[idx]).alt;
      img.replaceWith(clone);
    };
    items.forEach((b, i) => b.addEventListener('click', () => { show(i); dlg.showModal(); }));
    dlg.addEventListener('click', (e) => { if (e.target.tagName !== 'IMG') dlg.close(); });
    dlg.addEventListener('keydown', (e) => {
      const cur = items.findIndex((b) => b.dataset.full === $('img', dlg).getAttribute('src'));
      if (e.key === 'ArrowRight') show(cur + 1);
      if (e.key === 'ArrowLeft') show(cur - 1);
    });
  }

  /* ── copy hex (brand page) ─────────────────────────────── */
  $$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); } catch (e) { return; }
    const em = $('em', b); em.textContent = 'Copied'; b.classList.add('is-copied');
    setTimeout(() => { em.textContent = 'Copy'; b.classList.remove('is-copied'); }, 1400);
  }));
})();
