import { btn, pageHero, sectionHead } from '../layout.mjs';

const gallery = (imgs) =>
  `<div class="gallery" data-gallery>${imgs
    .map(
      ([f, alt], i) =>
        `<button type="button" class="gallery__item" data-reveal="clip" style="--d:${i * 0.05}s" data-full="img/photos/${f}"><img src="img/photos/${f}" alt="${alt}" loading="lazy"></button>`
    )
    .join('')}</div>`;

const body = `
${pageHero({
  sector: 'Off-season events',
  crumbs: ['<a href="about.html">About</a>'],
  title: 'Off-season events',
  lead: 'Three events in our first fall. One with our own robot, two in the draft of a team that let us in.',
})}

<section class="sec">
  <div class="wrap narrow-wrap">
    <p class="lede" data-reveal>As a proud rookie FRC team we are embarking on an exciting journey of innovation, teamwork, and engineering excellence. We gained hands-on experience in robotics design, programming, CAD, fabrication, business operations, and community outreach while building a culture of collaboration and continuous learning.</p>
    <p data-reveal>Although we are new to FRC, we are driven by a passion to create meaningful impact in our school and community while inspiring the next generation of STEM leaders.</p>
    <nav class="pills" data-reveal aria-label="Events on this page">
      <a href="#block-party">PNW Block Party</a><a href="#bordie">Bordie Through Time</a><a href="#girls-gen">Girls Gen</a>
    </nav>
  </div>
</section>

<section class="sec sec--mist event" id="block-party">
  <div class="wrap">
    ${sectionHead({ no: '01', label: 'Hosted by 2910 Jack in the Bot', title: 'PNW Block Party' })}
    <div class="split">
      <div>
        <p class="lede" data-reveal>Our first ever competition.</p>
        <p data-reveal>In this year’s off-season we participated in the PNW Block Party, hosted by 2910 Jack in the Bot. We went up against many competitive teams, including 2910, 9450 and 4089. We learned a lot of new things and came away understanding how competitions actually work.</p>
        <p data-reveal>We brought Venturi, the first robot we ever built.</p>
        <div data-reveal>${btn('Meet Venturi', 'robots.html#venturi', { kind: 'line' })}</div>
      </div>
      <figure class="frame" data-reveal="clip">
        <img src="img/photos/team-blockparty.jpg" alt="Slipstream team photo on the field carpet with Venturi" loading="lazy">
        <figcaption>Team photo after matches</figcaption>
      </figure>
    </div>
    ${gallery([
      ['bp-stands.jpg', 'Slipstream members in the stands holding a team banner'],
      ['bp-pit-1.jpg', 'Team members working on the robot in the pit'],
      ['bp-pit-2.jpg', 'Venturi being carried to the field'],
      ['bp-pit-3.jpg', 'Mentor and students checking the robot in the pit'],
      ['bp-stands-tall.jpg', 'View of the crowd from the stands'],
    ])}
  </div>
</section>

<section class="sec event" id="bordie">
  <div class="wrap">
    ${sectionHead({ no: '02', label: 'Hosted by Robototes', title: 'Bordie Through Time' })}
    <div class="split split--flip">
      <figure class="frame" data-reveal="clip">
        <img src="img/photos/bordie-gravi.jpg" alt="Robot 9988 Gravi-Tee-Rex on its cart" loading="lazy">
        <figcaption>9988 Gravi-Tee-Rex</figcaption>
      </figure>
      <div>
        <p class="lede" data-reveal>We want to extend our heartfelt gratitude to Team 9450 for welcoming us onto their team.</p>
        <p data-reveal>Competing with their second robot, 9988 Gravi-Tee-Rex, was an invaluable learning experience for our drive crew. With 9450’s mentorship, technical guidance, and unwavering support, we successfully advanced to the Playoffs as the 4th-seeded alliance.</p>
        <p data-reveal>Thank you, 9450, for exemplifying the spirit of collaboration.</p>
        <p class="note" data-reveal>Search for team <b>9988</b> on The Blue Alliance to see our matches.</p>
      </div>
    </div>
    ${gallery([
      ['bordie-gym.jpg', 'The competition gym packed with teams'],
      ['bordie-9988.jpg', 'Drive team carrying game pieces next to robot 9988'],
      ['bordie-field.jpg', 'The field and scoreboard seen from the queue'],
      ['bordie-stands.jpg', 'Team members seated in the stands'],
      ['bordie-crew.jpg', 'Slipstream members together in the bleachers'],
      ['bordie-pit.jpg', 'Pit area during the event'],
    ])}
  </div>
</section>

<section class="sec sec--mist event" id="girls-gen">
  <div class="wrap">
    ${sectionHead({ no: '03', label: 'Hosted by Bear Metal', title: 'Girls Gen' })}
    <div class="split">
      <div>
        <p class="lede" data-reveal>We had the fantastic opportunity to shadow and support Team 9450 during their competition.</p>
        <p data-reveal>Their crew generously integrated us into their match-day workflow, giving us hands-on experience servicing their primary robot in the pits and bringing us field-side during live matches.</p>
        <p data-reveal>We are deeply grateful to 9450 for their mentorship, teamwork, and inspiring example of Gracious Professionalism.</p>
        <p class="note" data-reveal>Search for team <b>9450</b> on The Blue Alliance to see the matches.</p>
      </div>
      <figure class="frame" data-reveal="clip">
        <img src="img/photos/gg-9450.jpg" alt="Team 9450's robot on its cart in the pits" loading="lazy">
        <figcaption>Team 9450’s robot in the pits</figcaption>
      </figure>
    </div>
    ${gallery([
      ['gg-queue.jpg', 'Teams lined up at the edge of the field'],
      ['gg-field.jpg', 'A match in progress seen from the stands'],
      ['gg-arena.jpg', 'The arena before matches'],
      ['gg-gym.jpg', 'Field and pits in the gym'],
      ['gg-score.jpg', 'The match scoreboard'],
      ['gg-duo.jpg', 'Two Slipstream members in event shirts'],
    ])}
  </div>
</section>

<section class="sec">
  <div class="wrap center">
    <h2 class="shead__title" data-split>Next stop: our rookie season.</h2>
    <p class="lede narrow" data-reveal>Kickoff is in January. Everything above was practice for it.</p>
    <div class="row" data-reveal>${btn('Our robots', 'robots.html')}${btn('Support the season', 'sponsor-us.html', { kind: 'line' })}</div>
  </div>
</section>
`;

export default {
  title: 'Off-season events',
  description:
    'Slipstream 11727 at PNW Block Party, Bordie Through Time and Girls Gen: our first off-season as a rookie FRC team.',
  body,
};
