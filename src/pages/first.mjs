import { links } from '../data.mjs';
import { btn, pageHero, sectionHead } from '../layout.mjs';

const body = `
${pageHero({
  sector: 'What is FIRST',
  crumbs: ['<a href="about.html">About</a>'],
  title: 'What is <i>FIRST</i>®',
  lead: 'For Inspiration and Recognition of Science and Technology.',
})}

<section class="sec">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '01', label: 'The organization', title: 'More than robots.' })}
      <p class="lede" data-reveal><i>FIRST</i>® is a global nonprofit organization that inspires young people to become leaders and innovators through hands-on STEM programs.</p>
      <p data-reveal>By combining the excitement of competitive robotics with engineering, programming, teamwork, and community outreach, <i>FIRST</i> empowers students to develop technical skills, creativity, confidence, and leadership while preparing them for future careers in science, technology, engineering, and mathematics.</p>
      <p data-reveal>Guided by the core values of Gracious Professionalism® and Coopertition®, <i>FIRST</i> fosters a culture of innovation, respect, and collaboration that extends far beyond the competition field.</p>
    </div>
    <div class="firstblock__logo" data-reveal="clip"><img src="img/brand/first-logo.png" width="627" height="454" alt="FIRST logo" loading="lazy"></div>
  </div>
</section>

<section class="sec sec--mist" id="frc">
  <div class="wrap">
    ${sectionHead({ no: '02', label: 'FIRST Robotics Competition', title: 'The ultimate sport for the mind.' })}
    <p class="lede narrow" data-reveal>Far more than just a robot-building contest, the <i>FIRST</i> Robotics Competition challenges teams to operate like real-world tech start-ups under tight deadlines and limited resources.</p>
    <ol class="steps">
      <li data-reveal><span>01</span><h3>Kickoff</h3><p>Every January, a brand-new game challenge is revealed, kicking off an intense season.</p></li>
      <li data-reveal style="--d:.07s"><span>02</span><h3>Build</h3><p>Students work alongside professional mentors to design, CAD, and build a robot from scratch.</p></li>
      <li data-reveal style="--d:.14s"><span>03</span><h3>Compete</h3><p>Teams fiercely compete on the field, in alliances that change from match to match.</p></li>
      <li data-reveal style="--d:.21s"><span>04</span><h3>Share</h3><p>In the pits, teams openly share tools, parts, and advice, ensuring that everyone learns, grows, and succeeds together.</p></li>
    </ol>
  </div>
</section>

<section class="sec">
  <div class="wrap duo">
    <article class="duo__card" data-reveal>
      <p class="tag tag--teal">Core value</p>
      <h3>Gracious Professionalism®</h3>
      <p>Compete hard, and treat everyone with respect while you do it. It is why Team 9450 handed a rookie drive crew the controls of their second robot.</p>
    </article>
    <article class="duo__card" data-reveal style="--d:.1s">
      <p class="tag tag--orange">Core value</p>
      <h3>Coopertition®</h3>
      <p>Cooperate with the teams you are competing against. It is the closest thing <i>FIRST</i> has to a slipstream, and it is where our name fits in.</p>
    </article>
  </div>
  <div class="wrap center" data-reveal>
    <div class="row">${btn('Join Slipstream', 'join.html')}${btn('firstinspires.org', links.firstInspires, { kind: 'line', external: true })}</div>
  </div>
</section>
`;

export default {
  title: 'What is FIRST',
  description:
    'FIRST is a global nonprofit that inspires young people through hands-on STEM programs. Learn how the FIRST Robotics Competition works.',
  body,
};
