import { links, team, subteams } from '../data.mjs';
import { btn, icon, pageHero, sectionHead } from '../layout.mjs';

const body = `
${pageHero({
  sector: 'Join us',
  title: 'Join us',
  lead: 'New team. New season. Building from scratch. There is room in the draft.',
})}

<section class="sec" id="students">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '01', label: 'Students', title: 'No robotics experience required.' })}
      <p class="lede" data-reveal>If you go to ${team.school} and want to build something real, you are who we are looking for.</p>
      <p data-reveal>You will learn teamwork, design, CAD, machining, programming, business and more, from mentors and from each other. We recruit for six subteams:</p>
      <ul class="chips" data-reveal>${subteams.map((s) => `<li>${s.name}</li>`).join('')}</ul>
      <div class="row" data-reveal>
        ${btn('Fill in the interest form', links.interestForm, { external: true })}
        ${btn('What is FRC?', 'first.html#frc', { kind: 'line' })}
      </div>
    </div>
    <figure class="frame" data-reveal="clip">
      <img src="img/photos/out-jagcafe.jpg" alt="Slipstream students at a recruiting table with a team banner" loading="lazy">
      <figcaption>Find us at school events</figcaption>
    </figure>
  </div>
</section>

<section class="sec sec--mist" id="how">
  <div class="wrap">
    ${sectionHead({ no: '02', label: 'How joining works', title: 'Three steps to the grid.' })}
    <ol class="steps steps--3">
      <li data-reveal><span>01</span><h3>Interest form</h3><p>Tell us who you are and which subteams sound good. It takes a few minutes.</p></li>
      <li data-reveal style="--d:.07s"><span>02</span><h3>Tryouts</h3><p>A short tryout assignment so we can see how you think. It is about effort, not experience.</p></li>
      <li data-reveal style="--d:.14s"><span>03</span><h3>Start building</h3><p>Join a subteam, come to meetings and get your hands on a robot.</p></li>
    </ol>
  </div>
</section>

<section class="sec" id="meetings">
  <div class="wrap split split--flip">
    <figure class="frame" data-reveal="clip">
      <img src="img/photos/out-meeting.jpg" alt="A full room of students at a Slipstream meeting" loading="lazy">
      <figcaption>A full room at North Creek</figcaption>
    </figure>
    <div>
      ${sectionHead({ no: '03', label: 'Meeting times', title: 'When and where.' })}
      <dl class="spec" data-reveal>
        <div><dt>Where</dt><dd>${team.school}<br>${team.street}, ${team.city}</dd></div>
        <div><dt>When</dt><dd>The current schedule is shared with members. Email us and we will send it over.</dd></div>
      </dl>
      <div class="row" data-reveal>
        <a class="btn btn--line" href="mailto:${team.email}?subject=Slipstream%20meeting%20times" data-magnet><span>Ask for the schedule</span>${icon.mail}</a>
      </div>
    </div>
  </div>
</section>

<section class="band band--purple" id="mentors">
  <div class="band__checker" aria-hidden="true"></div>
  <div class="wrap split">
    <div>
      <p class="kicker kicker--light"><b>04</b><span>/</span>Mentors</p>
      <h2 class="band__q" data-split>Be the car in front.</h2>
      <p class="lede" data-reveal>Help teach and inspire our students, regardless of your background or experience.</p>
      <p data-reveal>Engineers, machinists, programmers, designers, accountants, marketers, parents. If you know how to do something and are willing to show a high schooler, a rookie team will put that to use straight away.</p>
      <div class="row" data-reveal>
        <a class="btn btn--light" href="mailto:${team.email}?subject=Mentoring%20Slipstream%2011727" data-magnet><span>Email us about mentoring</span>${icon.mail}</a>
      </div>
    </div>
    <figure class="frame frame--light" data-reveal="clip">
      <img src="img/photos/bp-pit-3.jpg" alt="A mentor and students checking over the robot in the pit" loading="lazy">
      <figcaption>Mentors in the pit at Block Party</figcaption>
    </figure>
  </div>
</section>
`;

export default {
  title: 'Join us',
  description:
    'Join FRC Team 11727 Slipstream at North Creek High School as a student or mentor. No robotics experience required.',
  body,
};
