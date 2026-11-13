import { subteams } from '../data.mjs';
import { btn, pageHero, sectionHead } from '../layout.mjs';

const body = `
${pageHero({
  sector: 'Team structure',
  crumbs: ['<a href="about.html">About</a>'],
  title: 'Team structure',
  lead: 'Six subteams that draft off each other. Nobody builds a robot alone.',
})}

<section class="sec">
  <div class="wrap">
    ${sectionHead({ no: '01', label: 'Subteams', title: 'Six lanes, one direction.' })}
    <p class="lede narrow" data-reveal>Every voice matters in design, strategy, and decision-making. Students pick a home subteam and are encouraged to learn from the others.</p>
    <ul class="lanes">
      ${subteams
        .map(
          (s, i) => `<li class="lane" data-reveal style="--d:${i * 0.06}s">
        <span class="lane__no">${String(i + 1).padStart(2, '0')}</span>
        <h3>${s.name}</h3>
        <p>${s.body}</p>
        <i class="lane__bar" aria-hidden="true"></i>
      </li>`
        )
        .join('')}
    </ul>
  </div>
</section>

<section class="sec sec--mist">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '02', label: 'How we work', title: 'Lift as climbing.' })}
      <p class="lede" data-reveal>True growth happens together, with collaborating and learning from each other.</p>
      <p data-reveal>We build mentorship, active coaching, accountability, and support to accelerate as a team. Mentors guide; students do the work, make the calls and own the results.</p>
      <p data-reveal>We celebrate results together, but we also value the mistakes that taught us how to improve and iterate.</p>
      <div class="row" data-reveal>${btn('Join as a student', 'join.html')}${btn('Join as a mentor', 'join.html#mentors', { kind: 'line' })}</div>
    </div>
    <figure class="frame" data-reveal="clip">
      <img src="img/photos/shop-1.jpg" alt="Students testing a mechanism on a workshop bench" loading="lazy">
      <figcaption>In the workshop</figcaption>
    </figure>
  </div>
</section>
`;

export default {
  title: 'Team structure',
  description: 'How FRC Team 11727 Slipstream is organised: hardware, design, programming, business, media and outreach.',
  body,
};
