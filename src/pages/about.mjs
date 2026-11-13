import { team, stemValues, teamValues } from '../data.mjs';
import { btn, pageHero, sectionHead, icon } from '../layout.mjs';

const vals = (list, tone) =>
  list
    .map(
      (v, i) => `<li class="vcard vcard--${tone}" data-reveal style="--d:${i * 0.07}s">
      <span class="vcard__no">${String(i + 1).padStart(2, '0')}</span>
      <h3>${v.title}</h3>
      <p>${v.body}</p>
    </li>`
    )
    .join('');

const body = `
${pageHero({
  sector: 'About us',
  title: 'Who we are',
  lead: `FRC Team ${team.number}, Slipstream. Founded in ${team.founded} at ${team.school} in Bothell, Washington.`,
})}

<section class="sec">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '01', label: 'Slipstream intro', title: 'We move faster <em>together.</em>' })}
      <p class="lede" data-reveal>Our team brings the concept of slipstreams to life, proving that we move faster when we move together. Inspired by a physics principle, our FRC philosophy centers on collaboration with others.</p>
      <p data-reveal>With mentorship, teamwork, learning, and building, we create momentum that extends beyond robotics into our local community, empowering others in STEM to become inventors, engineers, and leaders.</p>
      <p data-reveal>By constantly improving ourselves and our peers, we are turning setbacks into speed. Though we are currently rookies learning from the drafts of those before us, our goal is to become the leaders who clear the path ahead and help others around us.</p>
    </div>
    <figure class="frame" data-reveal="clip">
      <img src="img/photos/team-blockparty.jpg" alt="The Slipstream team gathered around their robot at PNW Block Party" loading="lazy">
      <figcaption>The team with Venturi at PNW Block Party</figcaption>
    </figure>
  </div>
</section>

<section class="band band--purple" id="mission">
  <div class="band__checker" aria-hidden="true"></div>
  <div class="wrap">
    <p class="kicker kicker--light"><b>02</b><span>/</span>Our mission</p>
    <blockquote class="band__q" data-split>Build a lasting foundation for engineering and leadership <em>from the ground up,</em> proving that a dedicated team can accelerate from a blank workshop to a competitive force through collaboration and hard work.</blockquote>
  </div>
</section>

<section class="sec">
  <div class="wrap split split--flip">
    <figure class="frame" data-reveal="clip">
      <img src="img/photos/shop-2.jpg" alt="Students working on electronics and laptops around a workshop table" loading="lazy">
      <figcaption>Build night in the workshop</figcaption>
    </figure>
    <div>
      ${sectionHead({ no: '03', label: 'What a slipstream is', title: 'The physics we named ourselves after.' })}
      <p class="lede" data-reveal>When one car follows closely behind another, the lead car pushes the air aside and the car behind meets less resistance. Both go faster than either would alone.</p>
      <p data-reveal>That is how we think about a rookie year. Veteran teams have already cut through the air in front of us, and they have been generous about letting us tuck in behind them. Slipstream is positioned not just as speed or a race, but as collective acceleration.</p>
      <ul class="keys" data-reveal>
        <li><span class="dot dot--orange"></span><b>Orange</b> Energy, creativity, leadership</li>
        <li><span class="dot dot--teal"></span><b>Teal</b> Technology, precision, intelligence</li>
        <li><span class="dot dot--purple"></span><b>Together</b> Innovation meets engineering excellence</li>
      </ul>
    </div>
  </div>
</section>

<section class="sec sec--mist" id="values">
  <div class="wrap">
    ${sectionHead({ no: '04', label: 'Core values', title: 'More than a physics concept.' })}
    <p class="lede narrow" data-reveal>Slipstream is our way of thinking and working together as a team.</p>
    <h3 class="subhead" data-reveal><span class="dot dot--teal"></span>STEM values</h3>
    <ul class="vgrid vgrid--4">${vals(stemValues, 'teal')}</ul>
    <h3 class="subhead" data-reveal><span class="dot dot--orange"></span>Team values</h3>
    <ul class="vgrid vgrid--3">${vals(teamValues, 'orange')}</ul>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${sectionHead({ no: '05', label: 'Keep going', title: 'See the rest of the lap.' })}
    <div class="jump">
      ${[
        ['Off-season events', 'Three events in our first fall.', 'events.html'],
        ['Our robots', 'Venturi and Swervie.', 'robots.html'],
        ['Team structure', 'Six subteams, one draft.', 'team.html'],
        ['What is FIRST', 'The program behind it all.', 'first.html'],
      ]
        .map(
          ([t, d, h], i) => `<a class="jump__item" href="${h}" data-reveal style="--d:${i * 0.06}s"><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p>${icon.arrow}</a>`
        )
        .join('')}
    </div>
    <div class="center" data-reveal>${btn('Join the team', 'join.html')}</div>
  </div>
</section>
`;

export default {
  title: 'About us',
  description:
    'Meet Slipstream, FRC Team 11727 from North Creek High School. Our story, our mission and the values that drive a rookie robotics team.',
  body,
};
