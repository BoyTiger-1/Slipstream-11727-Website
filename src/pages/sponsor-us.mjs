import { tiers, links, team } from '../data.mjs';
import { btn, pageHero, sectionHead, icon } from '../layout.mjs';

const body = `
${pageHero({
  sector: 'Your sponsorship',
  crumbs: ['<a href="sponsors.html">Sponsors</a>'],
  title: 'Sponsor us',
  lead: 'Put a brand new team on the field, and your name on the robot.',
})}

<section class="sec" id="why">
  <div class="wrap split">
    <div>
      ${sectionHead({ no: '01', label: 'Why sponsor us', title: 'We started with a blank workshop.' })}
      <p class="lede" data-reveal>Running a successful robotics team is an expensive endeavor, but the impact it creates is worth the investment.</p>
      <p data-reveal>Your sponsorship will help us build competitive robots, purchase tools and materials, and fund travel to competitions, providing hands-on STEM opportunities for students who are passionate about engineering, innovation, and teamwork.</p>
      <ul class="costs" data-reveal>
        <li><b>Robots</b><span>Motors, swerve modules, electronics, raw stock</span></li>
        <li><b>Tools</b><span>The workshop we are still filling</span></li>
        <li><b>Travel</b><span>Registration and getting the team to events</span></li>
      </ul>
    </div>
    <figure class="frame" data-reveal="clip">
      <img src="img/photos/swervie-3.jpg" alt="The Swervie chassis waiting for motors" loading="lazy">
      <figcaption>Swervie is waiting on eight Kraken X60s</figcaption>
    </figure>
  </div>
</section>

<section class="sec sec--mist" id="tiers">
  <div class="wrap">
    ${sectionHead({ no: '02', label: 'Become a sponsor', title: 'Six places on the grid.' })}
    <ul class="ladder">
      ${tiers
        .map(
          (t, i) => `<li class="rung" data-reveal style="--d:${i * 0.05}s">
        <span class="rung__pos">P${i + 1}</span>
        <h3>${t.name}</h3>
        <span class="rung__amt">${t.amount}</span>
        <i class="rung__bar" style="--w:${100 - i * 14}%" aria-hidden="true"></i>
      </li>`
        )
        .join('')}
    </ul>
    <p class="note" data-reveal>Benefits for each tier are listed in the sponsorship packet below. If you want your sponsorship to go to a specific budget, we would be happy to arrange that.</p>
    <div class="row" data-reveal>
      <a class="btn btn--solid" href="mailto:${team.email}?subject=Sponsoring%20Slipstream%2011727" data-magnet><span>Email ${team.email}</span>${icon.mail}</a>
      ${btn('Open the sponsorship packet', links.sponsorPacket, { kind: 'line', external: true })}
    </div>
  </div>
</section>

<section class="sec" id="packet">
  <div class="wrap">
    ${sectionHead({ no: '03', label: 'Sponsorship packet', title: 'Everything in one PDF.' })}
    <div class="embed" data-reveal>
      <iframe src="${links.sponsorPacketEmbed}" title="Slipstream sponsorship packet" loading="lazy" allow="autoplay"></iframe>
    </div>
  </div>
</section>

<section class="sec sec--mist" id="other">
  <div class="wrap">
    ${sectionHead({ no: '04', label: 'Other ways to give', title: 'Not a company? Still counts.' })}
    <div class="ways">
      <article class="way" data-reveal>
        <p class="tag tag--orange">Individual</p>
        <h3>Donate money</h3>
        <p>Make an individual donation through Give Lively. It benefits us greatly, and it goes through Washington FIRST Robotics.</p>
        ${btn('Donate on Give Lively', links.donate, { external: true })}
      </article>
      <article class="way" data-reveal style="--d:.07s">
        <p class="tag tag--teal">In-kind</p>
        <h3>Amazon wishlist</h3>
        <p>Buy something off our list and it ships straight to the team. Tools, hardware and shop supplies.</p>
        ${btn('Open the wishlist', links.amazonWishlist, { kind: 'line', external: true })}
      </article>
      <article class="way" data-reveal style="--d:.14s">
        <p class="tag tag--teal">In-kind</p>
        <h3>WCP wishlist</h3>
        <p>Our wishlist for parts from West Coast Products, with every part and the reason we would like to have it.</p>
        ${btn('Open the WCP list', links.wcpWishlist, { kind: 'line', external: true })}
      </article>
      <article class="way" data-reveal style="--d:.21s">
        <p class="tag tag--teal">In-kind</p>
        <h3>REV wishlist</h3>
        <p>The REV Robotics parts we are hoping to add to the shop.</p>
        ${btn('Open the REV list', links.revWishlist, { kind: 'line', external: true })}
      </article>
    </div>

    <div class="policy" data-reveal>
      <h3>Our in-kind policy</h3>
      <p>In-kind donations are generally valued at the worth of the item or service provided. If an item is second-hand, we look at its used rate to find comparable options. For services, the tier is based on the discount given: a 100% discount counts the entire service price, while a 60% discount counts 60% of the service value toward our tier structure.</p>
    </div>
  </div>
</section>

<section class="sec" id="store">
  <div class="wrap">
    ${sectionHead({ no: '05', label: 'Team store', title: 'Merch is on the way.' })}
    <div class="soon" data-reveal>
      <div class="soon__checker" aria-hidden="true"></div>
      <p><b>Soon</b> Slipstream shirts and stickers. Follow our Instagram to hear when the store opens.</p>
    </div>
    <div class="row" data-reveal>${btn('Visit the store', links.store, { kind: 'line', external: true })}</div>
  </div>
</section>
`;

export default {
  title: 'Sponsor us',
  description:
    'Sponsor FRC Team 11727 Slipstream. Sponsorship tiers, the sponsorship packet, donations through Give Lively and in-kind wishlists.',
  body,
};
