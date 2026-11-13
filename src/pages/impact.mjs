import { communityEvents, districtEvents } from '../data.mjs';
import { btn, pageHero, sectionHead } from '../layout.mjs';

const rows = (list) =>
  list
    .map(
      (e, i) => `<article class="irow${i % 2 ? ' irow--flip' : ''}" id="${e.id}">
      <div class="irow__img" data-reveal="clip">${
        e.img ? `<img src="img/photos/${e.img}" alt="Slipstream at ${e.name}" loading="lazy">` : `<div class="ecard__blank" aria-hidden="true"><span>Photos coming soon</span></div>`
      }</div>
      <div class="irow__txt" data-reveal>
        <span class="irow__no">${String(i + 1).padStart(2, '0')}</span>
        <p class="tag">${e.tag}</p>
        <h3>${e.name}</h3>
        <p>${e.body}</p>
      </div>
    </article>`
    )
    .join('');

const body = `
${pageHero({
  sector: 'Impact',
  title: 'Impact',
  lead: 'We create momentum that extends beyond robotics into our local community.',
})}

<section class="sec">
  <div class="wrap narrow-wrap">
    <p class="lede" data-reveal>A slipstream only works if someone is close enough to use it. So we show up: at community events around Bothell, and at our own school and district, with a robot, a trifold and time to answer questions.</p>
    <nav class="pills" data-reveal aria-label="Sections on this page">
      <a href="#community">Community events</a><a href="#nsd">NSD events</a><a href="#scouting">Scouting app</a>
    </nav>
  </div>
</section>

<section class="sec sec--mist" id="community">
  <div class="wrap">
    ${sectionHead({ no: '01', label: 'Community events', title: 'Out in Bothell.' })}
    <div class="irows">${rows(communityEvents)}</div>
  </div>
</section>

<section class="sec" id="nsd">
  <div class="wrap">
    ${sectionHead({ no: '02', label: 'Northshore School District events', title: 'At home in Northshore.' })}
    <div class="irows">${rows(districtEvents)}</div>
  </div>
</section>

<section class="sec sec--mist" id="scouting">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '03', label: 'For other teams · In progress', title: 'A scouting app that watches the match for you.' })}
      <p class="lede" data-reveal>Because we participated in three off-season competitions, we started to understand how everything worked. One problem a few people on our team ran into was scouting.</p>
      <p data-reveal>Manual scouting is hard. It is difficult to track each robot, and if someone misses a match, they have already missed every detail needed to scout it.</p>
      <p data-reveal>That is why we are designing our own scouting app, where scouts can record the match or upload video of it, and the app then scouts it for them automatically. You can still scout even if you missed the match.</p>
    </div>
    <div class="plan" data-reveal>
      <p class="tag tag--teal">Prototype status</p>
      <p>Our current prototype was run on the 2026 Worlds finals match. Right now it is able to mostly track all robots’ movements on the field.</p>
      <h3>What is next</h3>
      <ol>
        <li>More sophisticated ways to not mix up robots.</li>
        <li>A way for scouts to add their own views and what they saw in the match.</li>
        <li>Make the computing possible at the competition, for teams without extra purchases.</li>
        <li>Works without Wi-Fi.</li>
      </ol>
      <div class="embed embed--video">
        <iframe src="https://drive.google.com/file/d/1pJYfwQGlBgUHWx_Qky2fMTNyTX1TJBpo/preview" title="Scouting app prototype tracking robots in a match" loading="lazy" allow="autoplay" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap center">
    <h2 class="shead__title" data-split>Want us at your event?</h2>
    <p class="lede narrow" data-reveal>We will bring a robot and the people who built it.</p>
    <div class="row" data-reveal>${btn('Contact us', 'contact.html')}</div>
  </div>
</section>
`;

export default {
  title: 'Impact',
  description:
    'Community and Northshore School District outreach by FRC Team 11727 Slipstream, plus the open scouting app we are building for other teams.',
  body,
};
