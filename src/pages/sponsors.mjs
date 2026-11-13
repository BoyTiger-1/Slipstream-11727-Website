import { tiers, links } from '../data.mjs';
import { btn, ext, esc, pageHero, sectionHead } from '../layout.mjs';

const card = (s) => {
  const inner = s.logo
    ? `<img src="img/sponsors/${s.logo}" alt="${esc(s.name)}" loading="lazy">`
    : `<span class="scard__name">${esc(s.name)}</span>`;
  return s.url
    ? `<a class="scard" ${ext(s.url)} aria-label="${esc(s.name)}">${inner}</a>`
    : `<span class="scard">${inner}</span>`;
};

const body = `
${pageHero({
  sector: 'Our sponsors',
  crumbs: ['<a href="sponsors.html">Sponsors</a>'],
  title: 'Thank you to our sponsors',
  lead: 'A rookie team is a bet. These are the people who made it.',
})}

<section class="sec">
  <div class="wrap narrow-wrap">
    <p class="lede" data-reveal>Running a successful robotics team is an expensive endeavor, but the impact it creates is worth the investment. Our team relies on the generosity of corporate sponsors whose support makes our work possible.</p>
    <p data-reveal>Sponsorship helps us build competitive robots, purchase tools and materials, and fund travel to competitions, providing hands-on STEM opportunities for students who are passionate about engineering, innovation, and teamwork.</p>
  </div>
</section>

<section class="grid-sec">
  <div class="wrap">
    ${sectionHead({ no: '01', label: 'The starting grid', title: 'Who is on the grid.' })}
    <ol class="tiers">
      ${tiers
        .map(
          (t, i) => `<li class="tier tier--${i}${t.sponsors.length ? '' : ' tier--open'}" data-reveal>
        <div class="tier__head">
          <span class="tier__pos">P${i + 1}</span>
          <h3>${t.name}</h3>
          <span class="tier__amt">${t.amount}</span>
        </div>
        <div class="tier__slots">
          ${
            t.sponsors.length
              ? t.sponsors.map(card).join('')
              : `<a class="scard scard--open" href="sponsor-us.html"><span>This grid slot is open</span><b>Take it →</b></a>`
          }
        </div>
      </li>`
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="band band--purple">
  <div class="band__checker" aria-hidden="true"></div>
  <div class="wrap center">
    <h2 class="band__q" data-split>Want your name on the grid?</h2>
    <p class="lede narrow" data-reveal>If you want your sponsorship to go to a specific budget, we would be happy to arrange that.</p>
    <div class="row" data-reveal>
      ${btn('Sponsor us', 'sponsor-us.html', { kind: 'light' })}
      ${btn('Donate', links.donate, { kind: 'ghost', external: true })}
    </div>
  </div>
</section>
`;

export default {
  title: 'Our sponsors',
  description:
    'The sponsors who back FRC Team 11727 Slipstream: Apple, Argosy Foundation, Boeing, Fluke, The Home Depot, Banner Bank, Triton Homes, Safeway and Fey & Grey Orthodontics.',
  body,
};
