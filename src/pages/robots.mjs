import { btn, pageHero, sectionHead } from '../layout.mjs';

const spec = (rows) =>
  `<dl class="spec" data-reveal>${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;

const body = `
${pageHero({
  sector: 'Our robots',
  crumbs: ['<a href="about.html">About</a>'],
  title: 'Our robots',
  lead: 'One finished, one on the bench, and a rookie-season robot that does not exist yet.',
})}

<section class="sec" id="on-season">
  <div class="wrap">
    ${sectionHead({ no: '01', label: 'On-season robots', title: 'Coming soon.' })}
    <div class="soon" data-reveal>
      <div class="soon__checker" aria-hidden="true"></div>
      <p><b>2027</b> Our first official season robot starts at kickoff in January. This is where it will live.</p>
    </div>
  </div>
</section>

<section class="sec sec--mist" id="venturi">
  <div class="wrap">
    ${sectionHead({ no: '02', label: '2026 off-season · Used at PNW Block Party', title: 'Venturi' })}
    <div class="split">
      <div>
        <p class="lede" data-reveal>Meet Venturi. We built this robot in three weeks, and it was the first robot we ever built.</p>
        ${spec([
          ['Base', 'Kitbot, modified'],
          ['Drivetrain', 'NEO 1.1 (replaced CIMs)'],
          ['Intake / launcher', 'NEO Vortex (replaced CIM)'],
          ['Added', 'Foldable, retractable net'],
          ['Build time', '3 weeks'],
        ])}
        <p data-reveal>Originally, this robot started off as an unmodified kitbot. From there, we made many improvements. We replaced all the drivetrain motors, which were CIM motors, with NEO 1.1s because they were affordable and more powerful. We also changed the intake and launcher motor from a CIM to a NEO Vortex to make it run much faster. Lastly, we added a foldable, retractable net on top so that no balls fall out when moving at high speeds.</p>
      </div>
      <div class="stack">
        <figure class="frame" data-reveal="clip"><img src="img/photos/venturi-2.jpg" alt="Venturi with red bumpers, lit up outdoors" loading="lazy"><figcaption>Venturi</figcaption></figure>
      </div>
    </div>

    <div class="fixes">
      <h3 class="subhead" data-reveal>What broke, and what we did about it</h3>
      <div class="fixes__grid">
        <article class="fix" data-reveal>
          <p class="tag tag--orange">Problem 01</p>
          <h4>Too much compression</h4>
          <p>There was too much compression on the balls from the hopper to the launcher.</p>
          <p class="fix__sol"><b>Fix</b> We sanded down all the metal plates that were causing the compression. The balls launched more easily.</p>
        </article>
        <article class="fix" data-reveal style="--d:.08s">
          <p class="tag tag--orange">Problem 02</p>
          <h4>The battery barely fit</h4>
          <p>The battery was hard to get into the robot at all.</p>
          <p class="fix__sol"><b>Fix</b> We turned one of the polycarbonate sheets into a flap to place the battery.</p>
        </article>
      </div>
    </div>

    <div class="gallery gallery--3" data-gallery>
      ${[
        ['venturi-1.jpg', 'Top-down view of Venturi showing wiring and hopper'],
        ['venturi-3.jpg', 'Venturi on grass with its net up'],
        ['bp-pit-2.jpg', 'Venturi being carried at PNW Block Party'],
      ]
        .map(
          ([f, alt], i) =>
            `<button type="button" class="gallery__item" data-reveal="clip" style="--d:${i * 0.05}s" data-full="img/photos/${f}"><img src="img/photos/${f}" alt="${alt}" loading="lazy"></button>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec" id="swervie">
  <div class="wrap">
    ${sectionHead({ no: '03', label: '2026 off-season · In progress', title: 'Swervie' })}
    <div class="split split--flip">
      <figure class="frame" data-reveal="clip"><img src="img/photos/swervie-2.jpg" alt="A square swerve drive chassis with four modules on the workshop floor" loading="lazy"><figcaption>Four modules, one frame</figcaption></figure>
      <div>
        <p class="lede" data-reveal>Our first swerve drivetrain.</p>
        <p data-reveal>So far, we have assembled the swerve modules, cut tubes, and gathered everything except the motors needed for swerve, including a Pigeon 2.0, CANivore and CANcoders.</p>
        <p data-reveal>Next, we will be ordering eight Kraken X60s while 3D modeling a bellypan in Onshape, so that we can continue assembling as soon as possible.</p>
        <ul class="checks" data-reveal>
          <li class="is-done">Swerve modules assembled</li>
          <li class="is-done">Frame tubes cut</li>
          <li class="is-done">Pigeon 2.0, CANivore, CANcoders</li>
          <li>8 × Kraken X60</li>
          <li>Bellypan (Onshape)</li>
        </ul>
        <div data-reveal>${btn('Help us buy the Krakens', 'sponsor-us.html', { kind: 'line' })}</div>
      </div>
    </div>
    <div class="gallery gallery--4" data-gallery>
      ${['swervie-1.jpg', 'swervie-3.jpg', 'swervie-4.jpg', 'swervie-5.jpg']
        .map(
          (f, i) =>
            `<button type="button" class="gallery__item" data-reveal="clip" style="--d:${i * 0.05}s" data-full="img/photos/${f}"><img src="img/photos/${f}" alt="Swervie chassis during assembly" loading="lazy"></button>`
        )
        .join('')}
    </div>
  </div>
</section>
`;

export default {
  title: 'Our robots',
  description: 'Venturi and Swervie: the robots built by FRC Team 11727 Slipstream in their first off-season.',
  body,
};
