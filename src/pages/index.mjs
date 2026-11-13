import { team, links, allSponsors, stemValues, teamValues, progress, communityEvents } from '../data.mjs';
import { btn, ext, icon, sectionHead, esc } from '../layout.mjs';

const marquee = (items, cls = '') => {
  const run = items.map((t) => `<span>${t}</span><i aria-hidden="true"></i>`).join('');
  return `<div class="marquee ${cls}" aria-hidden="true"><div class="marquee__run">${run}${run}</div></div>`;
};

const stats = [
  { n: 3, label: 'Off-season events', note: 'Bordie Through Time, Girls Gen and PNW Block Party', href: 'events.html' },
  { n: communityEvents.length + 4, label: 'Outreach events', note: 'In the community and across Northshore School District', href: 'impact.html' },
  team.students
    ? { n: team.students, label: 'Students', note: 'Across six subteams', href: 'team.html' }
    : { n: 3, label: 'Weeks to build robot one', note: 'Venturi, from kitbot to competition', href: 'robots.html#venturi' },
];

const valueRows = (list, offset = 0) =>
  list
    .map(
      (v, i) => `<li class="value${i === 0 && offset === 0 ? ' is-open' : ''}">
      <button type="button" aria-expanded="${i === 0 && offset === 0}">
        <span class="value__no">${String(i + 1).padStart(2, '0')}</span>
        <span class="value__title">${v.title}</span>
        <span class="value__x" aria-hidden="true"></span>
      </button>
      <div class="value__body"><p>${v.body}</p></div>
    </li>`
    )
    .join('');

const sponsorChip = (s) =>
  s.logo
    ? `<span class="logo-chip"><img src="img/sponsors/${s.logo}" alt="${esc(s.name)}" loading="lazy"></span>`
    : `<span class="logo-chip logo-chip--text">${esc(s.name)}</span>`;

const body = `
<section class="hero" data-hero>
  <canvas class="hero__flow" data-flow="light" data-interactive aria-hidden="true"></canvas>

  <p class="hero__meta kicker">
    <b>FRC ${team.number}</b><span>/</span>${team.school}<span>/</span>Bothell, WA<span class="hide-s">/</span><span class="hide-s plain">${team.coords}</span>
  </p>

  <h1 class="hero__title" aria-label="${team.tagline}">
    <span class="hl" data-shift="-1"><span class="hl__in">We move faster</span></span>
    <span class="hl" data-shift="1"><span class="hl__in">because we move</span></span>
    <span class="hl hl--block" data-shift="-1"><span class="hl__in">together<i>.</i></span></span>
  </h1>

  <div class="hero__foot">
    <div class="hero__copy">
      <p class="hero__lead">We are FRC Team ${team.number}, Slipstream. A rookie team founded in ${team.founded} at ${team.school}, learning from the drafts of those ahead of us so we can clear the path for whoever comes next.</p>
      <div class="hero__cta">
        ${btn('Join the team', 'join.html')}
        ${btn('Sponsor us', 'sponsor-us.html', { kind: 'line' })}
      </div>
    </div>
    <figure class="hero__photo">
      <div class="hero__photo-clip"><img src="img/photos/team-blockparty.jpg" width="1400" height="1050" alt="The Slipstream team with their robot Venturi on the field at PNW Block Party" fetchpriority="high"></div>
      <figcaption><b>PNW Block Party</b> Our first competition</figcaption>
    </figure>
  </div>

  <p class="hero__hint" aria-hidden="true"><i></i>Move your cursor. You’re the lead car.</p>
</section>

${marquee(['FRC Team 11727', 'Rookie season 2027', 'North Creek High School', 'Bothell, Washington', 'We move faster together', 'Est. 2026'], 'marquee--purple')}

<section class="who" id="who">
  <div class="who__bg" aria-hidden="true"><img src="img/photos/team-wide.jpg" alt="" loading="lazy" data-parallax="0.12"></div>
  <div class="wrap">
    ${sectionHead({ no: '01', label: 'Who we are', title: 'A rookie team in <em>someone else’s draft.</em> For now.' })}
    <p class="who__scrub" data-scrub>Our team brings the concept of slipstreams to life, proving that we move faster when we move together. With mentorship, teamwork, learning, and building, we create momentum that extends beyond robotics into our local community, empowering others in STEM to become inventors, engineers, and leaders.</p>
    <ul class="stats">
      ${stats
        .map(
          (s, i) => `<li class="stat" data-reveal style="--d:${i * 0.09}s">
        <a href="${s.href}">
          <span class="stat__n" data-count="${s.n}">${s.n}</span>
          <span class="stat__label">${s.label}</span>
          <span class="stat__note">${s.note}</span>
          <span class="stat__go">${icon.arrow}</span>
        </a>
      </li>`
        )
        .join('')}
    </ul>
    <div class="who__more" data-reveal>${btn('More about us', 'about.html', { kind: 'line' })}</div>
  </div>
</section>

<section class="vision">
  <div class="vision__checker" aria-hidden="true"></div>
  <div class="wrap vision__in">
    <p class="kicker kicker--light"><b>Our vision</b></p>
    <blockquote class="vision__q" data-split>Build a lasting foundation for engineering and leadership <em>from the ground up,</em> proving that a dedicated team can accelerate from a blank workshop to a competitive force.</blockquote>
  </div>
</section>

<section class="values" id="values">
  <div class="wrap">
    ${sectionHead({ no: '02', label: 'Core values', title: 'More than a physics concept.' })}
    <p class="values__lead" data-reveal>Slipstream is our way of thinking and working together as a team.</p>
    <div class="values__grid">
      <div class="values__col" data-reveal>
        <h3><span class="dot dot--teal"></span>STEM values</h3>
        <ul class="values__list" data-accordion>${valueRows(stemValues)}</ul>
      </div>
      <div class="values__col" data-reveal style="--d:.12s">
        <h3><span class="dot dot--orange"></span>Team values</h3>
        <ul class="values__list" data-accordion>${valueRows(teamValues, 1)}</ul>
      </div>
    </div>
  </div>
</section>

<section class="track" id="progress" data-track>
  <div class="track__pin">
    <div class="track__head wrap">
      ${sectionHead({ no: '03', label: 'Our progress', title: 'From blank workshop to the starting grid.', light: true })}
      <p class="track__hint">Scroll to drive ${icon.arrow}</p>
    </div>
    <div class="track__view">
      <ol class="track__rail" data-track-rail>
        <li class="track__line" aria-hidden="true"><i data-track-fill></i><img src="img/brand/s-orange.png" alt="" data-track-car></li>
        ${progress
          .map(
            (p, i) => `<li class="stop${p.flag ? ' stop--flag' : ''}">
          <span class="stop__node" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <p class="stop__when">${p.when}</p>
          <h3 class="stop__title">${p.title}</h3>
          ${p.img ? `<div class="stop__img"><img src="img/photos/${p.img}" alt="" loading="lazy"></div>` : `<div class="stop__img stop__img--flag" aria-hidden="true"></div>`}
          <p class="stop__body">${p.body}</p>
          ${p.href ? `<a class="tlink tlink--light" href="${p.href}">Read more ${icon.arrow}</a>` : ''}
        </li>`
          )
          .join('')}
      </ol>
    </div>
  </div>
</section>

<section class="outreach" id="outreach">
  <div class="wrap">
    ${sectionHead({ no: '04', label: 'Impact', title: 'Momentum that leaves the workshop.' })}
    <div class="outreach__grid">
      ${communityEvents
        .slice(0, 3)
        .map(
          (e, i) => `<a class="ecard" href="impact.html#${e.id}" data-reveal style="--d:${i * 0.08}s">
        <div class="ecard__img">${e.img ? `<img src="img/photos/${e.img}" alt="" loading="lazy">` : `<div class="ecard__blank" aria-hidden="true"></div>`}</div>
        <div class="ecard__txt">
          <p class="tag">${e.tag}</p>
          <h3>${e.name}</h3>
          <p>${e.body}</p>
          <span class="tlink">See the event ${icon.arrow}</span>
        </div>
      </a>`
        )
        .join('')}
    </div>
    <div class="outreach__more" data-reveal>${btn('All outreach', 'impact.html', { kind: 'line' })}</div>
  </div>
</section>

<section class="firstblock" id="first">
  <div class="wrap firstblock__in">
    <div class="firstblock__logo" data-reveal="clip"><img src="img/brand/first-logo.png" width="627" height="454" alt="FIRST logo" loading="lazy"></div>
    <div>
      ${sectionHead({ no: '05', label: 'What is FIRST', title: 'The sport <em>for the mind.</em>' })}
      <p class="lede" data-reveal><i>FIRST</i>® (For Inspiration and Recognition of Science and Technology) is a global nonprofit organization that inspires young people to become leaders and innovators through hands-on STEM programs. By combining the excitement of competitive robotics with engineering, programming, teamwork, and community outreach, <i>FIRST</i> empowers students to develop technical skills, creativity, confidence, and leadership while preparing them for future careers in science, technology, engineering, and mathematics.</p>
      <p data-reveal>Guided by the core values of Gracious Professionalism® and Coopertition®, <i>FIRST</i> fosters a culture of innovation, respect, and collaboration that extends far beyond the competition field.</p>
      <div data-reveal>${btn('How FRC works', 'first.html', { kind: 'line' })}</div>
    </div>
  </div>
</section>

<section class="doors" id="involved">
  <div class="wrap">
    ${sectionHead({ no: '06', label: 'Get in the draft', title: 'Pick your lane.' })}
  </div>
  <div class="doors__grid">
    ${[
      ['Students', 'Learn teamwork, design, CAD, machining, programming, business and more. No experience required.', 'Join us', 'join.html', 'shop-2.jpg'],
      ['Mentors', 'Help teach and inspire our students, whatever your background or experience.', 'Mentor with us', 'join.html#mentors', 'bp-pit-1.jpg'],
      ['Sponsors', 'Sponsoring a rookie team puts tools, parts and travel within reach of students who are ready to build.', 'Become a sponsor', 'sponsor-us.html', 'swervie-3.jpg'],
      ['Resources', 'Brand guidelines, documentation and the links we use every week, open to everyone.', 'Browse resources', 'resources.html', 'out-board.jpg'],
    ]
      .map(
        ([t, d, cta, href, img], i) => `<a class="door" href="${href}" data-reveal="clip" style="--d:${i * 0.07}s">
      <img src="img/photos/${img}" alt="" loading="lazy">
      <div class="door__txt">
        <span class="door__no">0${i + 1}</span>
        <h3>${t}</h3>
        <p>${d}</p>
        <span class="door__cta">${cta} ${icon.arrow}</span>
      </div>
    </a>`
      )
      .join('')}
  </div>
</section>

<section class="pitch" id="sponsor">
  <div class="pitch__img" aria-hidden="true"><img src="img/photos/shop-1.jpg" alt="" loading="lazy" data-parallax="0.1"></div>
  <div class="pitch__panel">
    <p class="kicker kicker--light"><b>07</b><span>/</span>Sponsor us</p>
    <h2 class="pitch__title" data-split>Become a sponsor today.</h2>
    <p data-reveal>We started this year with a blank workshop. Every motor, every sheet of polycarbonate and every entry fee since then has come from someone who decided a brand new team was worth backing.</p>
    <p data-reveal>Running a robotics team is expensive. Your sponsorship helps us build competitive robots, purchase tools and materials, and fund travel to competitions, so that cost is never the reason a student at North Creek misses out on engineering.</p>
    <div class="pitch__cta" data-reveal>
      ${btn('Sponsorship options', 'sponsor-us.html', { kind: 'light' })}
      ${btn('Donate', links.donate, { kind: 'ghost', external: true })}
      ${btn('Amazon wishlist', links.amazonWishlist, { kind: 'ghost', external: true })}
    </div>
  </div>
</section>

<section class="thanks">
  <div class="wrap">
    ${sectionHead({ no: '08', label: 'Thank you to our sponsors', title: 'The grid behind us.' })}
  </div>
  <div class="marquee marquee--logos" data-reveal>
    <div class="marquee__run">${allSponsors.map(sponsorChip).join('')}${allSponsors.map(sponsorChip).join('')}</div>
  </div>
  <div class="wrap thanks__more" data-reveal>${btn('All sponsors', 'sponsors.html', { kind: 'line' })}</div>
</section>

<section class="closer">
  <canvas class="closer__flow" data-flow="dark" aria-hidden="true"></canvas>
  <div class="closer__in">
    <img class="closer__logo" src="img/brand/logo-color-light-number.png" width="1200" height="752" alt="Slipstream 11727" loading="lazy" data-reveal>
    <p class="closer__line" data-split>We move faster because we move together.</p>
    <div class="closer__cta" data-reveal>
      ${btn('Join the team', 'join.html', { kind: 'light' })}
      <a class="tlink tlink--light" ${ext(links.instagram)}>Follow @nchs_frc_11727 ${icon.out}</a>
    </div>
  </div>
</section>
`;

export default {
  home: true,
  title: 'Home',
  description:
    'Slipstream is FRC Team 11727, a rookie FIRST Robotics Competition team founded in 2026 at North Creek High School in Bothell, Washington. We move faster because we move together.',
  body,
};
