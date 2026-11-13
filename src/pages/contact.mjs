import { links, team } from '../data.mjs';
import { ext, icon, pageHero, sectionHead } from '../layout.mjs';

const body = `
${pageHero({
  sector: 'Contact',
  title: 'Contact us',
  lead: 'Sponsorships, mentoring, event invites or just a question about the robot.',
})}

<section class="sec">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '01', label: 'Reach the team', title: 'One inbox, real students.' })}
      <ul class="contacts" data-reveal>
        <li><a href="mailto:${team.email}">${icon.mail}<span><b>Email</b>${team.email}</span>${icon.arrow}</a></li>
        <li><a ${ext(links.instagram)}>${icon.instagram}<span><b>Instagram</b>@nchs_frc_11727</span>${icon.out}</a></li>
        <li><a ${ext(links.youtube)}>${icon.youtube}<span><b>YouTube</b>Slipstream 11727</span>${icon.out}</a></li>
      </ul>
      <address class="addr" data-reveal>
        <b>FRC Team ${team.number}</b><br>
        ${team.school}<br>
        ${team.street}<br>
        ${team.city}<br>
        <a class="tlink" ${ext(links.map)}>Open in Maps ${icon.out}</a>
      </address>
    </div>
    <div class="embed embed--map" data-reveal="clip">
      <iframe src="${links.mapEmbed}" title="Map showing North Creek High School" loading="lazy"></iframe>
    </div>
  </div>
</section>
`;

export default {
  title: 'Contact',
  description: 'Contact FRC Team 11727 Slipstream at North Creek High School, 3613 191st Place SE, Bothell, WA 98012.',
  body,
};
