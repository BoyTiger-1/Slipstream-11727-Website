import { links } from '../data.mjs';
import { btn, pageHero, sectionHead } from '../layout.mjs';

const swatch = (name, hex, cmyk, rgb, cls = '') =>
  `<li class="swatch ${cls}" style="--c:${hex}" data-reveal><button type="button" data-copy="${hex}" aria-label="Copy ${hex}"><span class="swatch__chip"></span><b>${name}</b><code>${hex}</code><small>${rgb}</small><small>${cmyk}</small><em>Copy</em></button></li>`;

const dl = (file, label, bg) =>
  `<a class="dl dl--${bg}" href="img/brand/${file}" download data-reveal="clip"><img src="img/brand/${file}" alt="${label}" loading="lazy"><span>${label}<small>PNG</small></span></a>`;

const body = `
${pageHero({
  sector: 'Brand guidelines',
  crumbs: ['<a href="resources.html">Resources</a>'],
  title: 'Brand guidelines',
  lead: 'How Slipstream looks, and how to keep it looking that way. Manual last updated 07/28/2026.',
})}

<section class="sec" id="logo">
  <div class="wrap">
    ${sectionHead({ no: '01', label: 'Logo', title: 'Every part means something.' })}
    <div class="split">
      <div class="logo-stage" data-reveal="clip"><img src="img/brand/logo-color-dark.png" alt="Slipstream primary logo" loading="lazy"></div>
      <dl class="rationale" data-reveal>
        <div><dt>Twin S</dt><dd>The double edge of robotics: mechanical engineering and software. One follows the other for uplift, which is the slipstream itself.</dd></div>
        <div><dt>Gears</dt><dd>The circular joints stand for gears, bearings and pivot points. Minimal, functional, efficient.</dd></div>
        <div><dt>Linkage</dt><dd>The connector is collective growth at a team, alliance and community level, and cooperation between teams.</dd></div>
        <div><dt>Speed tails</dt><dd>The aerodynamic effect that inspires the name. Moving forward, learning, growing together.</dd></div>
        <div><dt>Checkered finish</dt><dd>A goal-oriented mindset, whether the goal is a match, a design milestone or a breakthrough.</dd></div>
        <div><dt>Typography</dt><dd>A futuristic feel, with italics for momentum.</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="sec sec--mist" id="colour">
  <div class="wrap">
    ${sectionHead({ no: '02', label: 'Brand colours', title: 'Innovation meets engineering excellence.' })}
    <p class="lede narrow" data-reveal><b style="color:var(--orange-ink)">Orange</b> is energy, creativity, leadership. <b style="color:var(--teal-ink)">Teal</b> is technology, precision, intelligence. Click a swatch to copy its hex.</p>
    <h3 class="subhead" data-reveal>Primary</h3>
    <ul class="swatches">
      ${swatch('Orange', '#FF6600', 'C0 M60 Y100 K0', 'R255 G102 B0')}
      ${swatch('Teal', '#00C9DB', 'C71 M0 Y7 K12', 'R0 G201 B219')}
      ${swatch('Purple', '#240099', 'C90 M100 Y0 K0', 'R36 G0 B153')}
    </ul>
    <h3 class="subhead" data-reveal>Secondary</h3>
    <ul class="swatches">
      ${swatch('Black', '#000000', 'C0 M0 Y0 K100', 'R0 G0 B0')}
      ${swatch('White', '#FFFFFF', 'C0 M0 Y0 K0', 'R255 G255 B255', 'swatch--line')}
      ${swatch('Grey', '#E7E6E6', 'C2 M2 Y2 K10', 'R231 G230 B230')}
    </ul>
  </div>
</section>

<section class="sec" id="usage">
  <div class="wrap">
    ${sectionHead({ no: '03', label: 'Logo usage', title: 'Dos and don’ts.' })}
    <div class="rules">
      <article class="rule rule--do" data-reveal>
        <h3>Do</h3>
        <ul>
          <li>Use the full-colour logo on white or on brand purple.</li>
          <li>Use the one-colour white logo on purple or orange, and the black logo on orange.</li>
          <li>Keep the Slipstream icon together with the team name, always.</li>
          <li>Place the team name and number <b>under</b> the icon.</li>
          <li>Write the name as <b>Slipstream</b>. Only the first letter is capital.</li>
        </ul>
      </article>
      <article class="rule rule--dont" data-reveal style="--d:.08s">
        <h3>Don’t</h3>
        <ul>
          <li>Don’t use the icon on its own without the team name.</li>
          <li>Don’t place the name and number side-by-side with the icon.</li>
          <li>Don’t place the team name and number under the <i>FIRST</i> icon.</li>
          <li>Don’t write <s>SlipSTREAM</s>, <s>SlipStream</s> or <s>SLIPStream</s>.</li>
        </ul>
      </article>
    </div>

    <h3 class="subhead" data-reveal>Downloads</h3>
    <div class="dls">
      ${dl('logo-color-dark.png', 'Primary logo', 'white')}
      ${dl('logo-color-dark-number.png', 'Primary with team number', 'white')}
      ${dl('logo-color-light.png', 'Colour on purple', 'purple')}
      ${dl('logo-color-light-number.png', 'Colour on purple, with number', 'purple')}
      ${dl('logo-white.png', 'White on purple', 'purple')}
      ${dl('logo-white-number.png', 'White on orange, with number', 'orange')}
      ${dl('logo-black.png', 'Black on orange', 'orange')}
      ${dl('logo-black-number.png', 'Black, with number', 'white')}
    </div>
    <div class="row" data-reveal>${btn('Full brand manual (PDF)', links.brandManualPdf, { kind: 'line', external: true })}</div>
  </div>
</section>

<section class="sec sec--mist" id="type">
  <div class="wrap">
    ${sectionHead({ no: '04', label: 'Typography', title: 'Orbitron and Nunito.' })}
    <div class="types">
      <div class="type" data-reveal><small>Title · Orbitron</small><p class="type__orb">Slipstream</p></div>
      <div class="type" data-reveal style="--d:.06s"><small>Title bold · Orbitron Bold</small><p class="type__orb type__orb--b">Slipstream</p></div>
      <div class="type" data-reveal style="--d:.12s"><small>Text · Nunito Light</small><p class="type__nun">We are FRC team 11727, Slipstream, founded in 2026 at North Creek High School in Bothell, Washington.</p></div>
      <div class="type" data-reveal style="--d:.18s"><small>Text · Nunito Light Italic</small><p class="type__nun type__nun--i">We are FRC team 11727, Slipstream, founded in 2026 at North Creek High School in Bothell, Washington.</p></div>
    </div>
  </div>
</section>

<section class="sec" id="social">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '05', label: 'Social media', title: 'Avatar and team number.' })}
      <p class="lede" data-reveal>Use a logo <b>without the team number</b>, on a <b>purple background</b>, as the official avatar on every platform.</p>
      <p data-reveal>A number-free logo stays clean, scalable and readable at small sizes. Five-digit team numbers become illegible in circular or square avatars.</p>
      <ul class="checks" data-reveal>
        <li class="is-done"><b>Display name</b> FRC Slipstream - 11727</li>
        <li class="is-done"><b>Bio</b> Full team number within the first line</li>
        <li class="is-done"><b>Post graphics</b> Team number in a prominent, readable location</li>
      </ul>
    </div>
    <div class="avatar-stage" data-reveal="clip">
      <div class="avatar"><img src="img/brand/logo-color-light.png" alt="Slipstream social avatar" loading="lazy"></div>
      <p><b>FRC Slipstream - 11727</b><span>@nchs_frc_11727</span></p>
    </div>
  </div>
</section>

<section class="sec sec--mist" id="favicon">
  <div class="wrap split split--flip">
    <div class="fav-stage" data-reveal="clip">
      <img src="img/brand/favicon-512.png" alt="Slipstream favicon, a single orange S" loading="lazy">
      <div class="fav-tab"><img src="img/brand/favicon-48.png" alt=""><span>Slipstream</span><i>×</i></div>
    </div>
    <div>
      ${sectionHead({ no: '06', label: 'Favicon', title: 'One S, for small places.' })}
      <p class="lede" data-reveal>The favicon is the tiny icon that represents us on browser tabs, bookmarks and the match scoreboard.</p>
      <p data-reveal>It is the one place the single orange S stands alone.</p>
    </div>
  </div>
</section>
`;

export default {
  title: 'Brand guidelines',
  description:
    'Slipstream 11727 brand guidelines: logo rationale, colours, typography, logo dos and don’ts, social media rules and downloads.',
  body,
};
