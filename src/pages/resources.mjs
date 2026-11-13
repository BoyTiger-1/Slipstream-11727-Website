import { links } from '../data.mjs';
import { ext, icon, pageHero, sectionHead } from '../layout.mjs';

const row = ([name, note, url, internal], i) => {
  const no = `<span class="rrow__no">${String(i + 1).padStart(2, '0')}</span>`;
  const txt = `<span class="rrow__txt"><b>${name}</b><small>${note}</small></span>`;
  if (!url) return `<li><span class="rrow is-soon">${no}${txt}<em>Coming soon</em></span></li>`;
  return `<li><a class="rrow" ${internal ? `href="${url}"` : ext(url)}>${no}${txt}${internal ? icon.arrow : icon.out}</a></li>`;
};

const docs = [
  ['Learnings: Bumpers', 'What we figured out building our first set', links.bumperLearnings],
  ['GitHub', 'Robot code and the scouting app', links.github],
  ['Technical binder', 'Design decisions, season by season', links.technicalBinder],
  ['One-pager', 'The team on a single sheet', links.onePager],
  ['Handbook', 'How the team runs, for students and parents', links.handbook],
  ['Sponsorship packet', 'Tiers, benefits and how to give', links.sponsorPacket],
];

const common = [
  ['Brand guidelines', 'Logo, colour, type and naming', 'brand.html', true],
  ['Student interest form', 'Tell us you want in', links.interestForm],
  ['Donate', 'Give Lively, through Washington FIRST Robotics', links.donate],
  ['Amazon wishlist', 'Send a tool or part directly', links.amazonWishlist],
  ['WCP wishlist', 'West Coast Products parts, with reasons', links.wcpWishlist],
  ['Instagram', '@nchs_frc_11727', links.instagram],
  ['YouTube', 'Match video and build clips', links.youtube],
  ['FIRST Robotics Competition', 'firstinspires.org', links.firstInspires],
];

const body = `
${pageHero({
  sector: 'Resources',
  title: 'Resources',
  lead: 'Shared acceleration of knowledge. What we learn, we publish.',
})}

<section class="sec">
  <div class="wrap rcols">
    <div>
      ${sectionHead({ no: '01', label: 'Documentation', title: 'What we have written down.' })}
      <ul class="rlist" data-reveal>${docs.map(row).join('')}</ul>
    </div>
    <div>
      ${sectionHead({ no: '02', label: 'Common links', title: 'The ones we use every week.' })}
      <ul class="rlist" data-reveal>${common.map(row).join('')}</ul>
    </div>
  </div>
</section>

<section class="band band--purple">
  <div class="band__checker" aria-hidden="true"></div>
  <div class="wrap">
    <p class="kicker kicker--light"><b>Why this page exists</b></p>
    <blockquote class="band__q" data-split>Just like slipstreaming reduces resistance, we help each other by sharing knowledge, ideas, and techniques to help everyone learn efficiently.</blockquote>
  </div>
</section>
`;

export default {
  title: 'Resources',
  description:
    'Documentation and common links from FRC Team 11727 Slipstream: brand guidelines, technical binder, handbook, GitHub and more.',
  body,
};
