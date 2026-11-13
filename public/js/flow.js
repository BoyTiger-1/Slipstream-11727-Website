/* Wind tunnel.
   Streamlines flow across the canvas and bend around two "cars": a teal lead
   ring and an orange ring drafting behind it, joined by the linkage from the
   Slipstream logo. On the home hero the lead car follows the cursor.

   The bend is the real thing: lines are level sets of the stream function for
   potential flow around a cylinder, psi = y * (1 - R^2 / r^2).              */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PURPLE = '71,47,145', ORANGE = '245,130,32', TEAL = '16,172,206', INK = '22,12,56';

  function lift(dx, y0, R) {
    // Height of the streamline that sits at y0 far upstream, at horizontal offset dx.
    const s = y0 < 0 ? -1 : 1, a = Math.abs(y0), R2 = R * R;
    let y = (a + Math.sqrt(a * a + 4 * R2)) / 2; // exact at dx = 0
    y = a + (y - a) * (R2 / (R2 + dx * dx * 0.6));
    for (let k = 0; k < 3; k++) y = 0.5 * y + 0.5 * (a + (R2 * y) / (dx * dx + y * y));
    return s * (y - a);
  }

  function Flow(canvas) {
    const ctx = canvas.getContext('2d');
    const dark = canvas.dataset.flow === 'dark';
    const interactive = canvas.hasAttribute('data-interactive') && matchMedia('(hover: hover)').matches;
    const host = canvas.parentElement;
    let w = 0, h = 0, dpr = 1, rows = [], running = false, raf = 0, t0 = 0, speed = 1, boost = 0;
    const lead = { x: 0, y: 0, tx: 0, ty: 0, R: 0 };
    const chase = { x: 0, y: 0, vx: 0, vy: 0, R: 0 };
    let pointer = null, lastScroll = scrollY;

    function resize() {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      const gap = w < 700 ? 20 : 26;
      rows = [];
      for (let y = gap / 2, i = 0; y < h; y += gap, i++) {
        rows.push({ y, phase: (i * 137.5) % 400, tone: i % 9 === 4 ? 'o' : i % 9 === 7 ? 't' : 'p', len: 50 + ((i * 53) % 70) });
      }
      lead.R = Math.max(38, Math.min(w, h) * (dark ? 0.085 : 0.075));
      chase.R = lead.R * 0.82;
      if (!lead.x) { lead.x = lead.tx = w * 0.72; lead.y = lead.ty = h * 0.42; chase.x = lead.x - lead.R * 3; chase.y = lead.y; }
      if (!running) draw(performance.now());
    }

    function auto(t) {
      // Lazy figure-eight on the right side of the canvas.
      const cx = w * (dark ? 0.8 : 0.74), cy = h * (dark ? 0.6 : 0.4);
      lead.tx = cx + Math.cos(t * 0.00031) * w * 0.12;
      lead.ty = cy + Math.sin(t * 0.00062) * h * (dark ? 0.14 : 0.16);
    }

    function draw(t) {
      const dt = Math.min(50, t - (t0 || t)); t0 = t;
      if (pointer) { lead.tx = pointer.x; lead.ty = pointer.y; } else auto(t);
      lead.x += (lead.tx - lead.x) * 0.12; lead.y += (lead.ty - lead.y) * 0.12;
      // The chaser springs toward the pocket of still air behind the leader.
      const gx = lead.x - lead.R * 2.9, gy = lead.y + lead.R * 0.16;
      chase.vx = (chase.vx + (gx - chase.x) * 0.018) * 0.86; chase.vy = (chase.vy + (gy - chase.y) * 0.018) * 0.86;
      chase.x += chase.vx; chase.y += chase.vy;

      const ds = scrollY - lastScroll; lastScroll = scrollY;
      boost += (Math.min(6, Math.abs(ds) * 0.25) - boost) * 0.1;
      speed = 1 + boost;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.lineJoin = 'round'; ctx.lineCap = 'butt';

      const base = dark ? '255,255,255' : PURPLE;
      const step = w < 700 ? 18 : 14;
      const travel = t * 0.16;
      for (const row of rows) {
        const dyL = row.y - lead.y, dyC = row.y - chase.y;
        const near = Math.abs(dyL) < lead.R * 3 || Math.abs(dyC) < chase.R * 3;
        ctx.beginPath();
        if (!near) { ctx.moveTo(-10, row.y); ctx.lineTo(w + 10, row.y); }
        else {
          for (let x = -10; x <= w + step; x += step) {
            const y = row.y + lift(x - lead.x, dyL, lead.R) + lift(x - chase.x, dyC, chase.R);
            x === -10 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
        }
        // faint continuous smoke line
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(${base},${dark ? 0.1 : 0.09})`;
        ctx.stroke();
        // pulses travelling downstream (right to left: the cars are driving right)
        const tone = row.tone === 'o' ? ORANGE : row.tone === 't' ? TEAL : base;
        const strong = row.tone !== 'p';
        ctx.setLineDash([row.len, 330 - row.len]);
        ctx.lineDashOffset = travel * (strong ? 1.5 : 1) * (1 + boost * 0.4) + row.phase + boost * 20;
        ctx.lineWidth = strong ? 2 : 1.4;
        ctx.strokeStyle = `rgba(${tone},${strong ? 0.85 : dark ? 0.42 : 0.4})`;
        ctx.stroke();
      }
      ctx.setLineDash([]);
      cars();
      if (running) raf = requestAnimationFrame(draw);
    }

    function ring(x, y, R, color, fill) {
      ctx.beginPath(); ctx.arc(x, y, R, 0, 6.2832); ctx.fillStyle = fill; ctx.fill();
      ctx.lineWidth = R * 0.2; ctx.strokeStyle = color; ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, R * 0.62, 0, 6.2832); ctx.lineWidth = R * 0.07; ctx.stroke();
    }

    function cars() {
      const bg = dark ? `rgb(${PURPLE})` : '#fff';
      const link = dark ? '#fff' : `rgb(${INK})`;
      const rl = lead.R * 0.6, rc = chase.R * 0.6;
      // joint sits above the midpoint, like the logo
      const jx = (lead.x + chase.x) / 2, jy = (lead.y + chase.y) / 2 - lead.R * 0.42;
      ctx.lineCap = 'butt'; ctx.strokeStyle = link; ctx.lineWidth = lead.R * 0.2;
      ctx.beginPath(); ctx.moveTo(chase.x, chase.y); ctx.lineTo(jx, jy); ctx.lineTo(lead.x, lead.y); ctx.stroke();
      ring(chase.x, chase.y, rc, `rgb(${ORANGE})`, bg);
      ring(lead.x, lead.y, rl, `rgb(${TEAL})`, bg);
      ctx.beginPath(); ctx.arc(jx, jy, lead.R * 0.2, 0, 6.2832); ctx.fillStyle = bg; ctx.fill();
      ctx.lineWidth = lead.R * 0.1; ctx.strokeStyle = link; ctx.stroke();
    }

    function start() { if (running || reduce) return; running = true; t0 = 0; raf = requestAnimationFrame(draw); }
    function stop() { running = false; cancelAnimationFrame(raf); }

    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { rootMargin: '80px' }).observe(canvas);
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : canvas.getBoundingClientRect().bottom > 0 && start()));

    if (interactive) {
      host.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;
        const r = canvas.getBoundingClientRect();
        pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      });
      host.addEventListener('pointerleave', () => (pointer = null));
    }
    resize();
  }

  document.querySelectorAll('canvas[data-flow]').forEach((c) => new Flow(c));
})();
