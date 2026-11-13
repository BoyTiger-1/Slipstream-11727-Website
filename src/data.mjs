// ─────────────────────────────────────────────────────────────
//  Slipstream 11727 — site content
//  Edit this file to update links, sponsors, events and stats.
//  Anything set to null renders as "Coming soon" on the site.
// ─────────────────────────────────────────────────────────────

export const team = {
  name: 'Slipstream',
  number: '11727',
  school: 'North Creek High School',
  street: '3613 191st Place SE',
  city: 'Bothell, WA 98012',
  email: 'slipstreamfrc@gmail.com',
  founded: 2026,
  coords: '47.8244° N  122.1828° W',
  tagline: 'We move faster because we move together.',
  students: null, // ← set to a number (e.g. 32) to show a student count on the home page
};

export const links = {
  instagram: 'https://www.instagram.com/nchs_frc_11727/',
  youtube: 'https://www.youtube.com/channel/UCx779q-XjReOPcBhw8OPBbQ',
  donate: 'https://secure.givelively.org/donate/washington-first-robotics/slipstream-nchs',
  amazonWishlist:
    'https://www.amazon.com/registries/gl/guest-view/2JHRWUBNXL3PI?language=en-US&ref_=cm_sw_r_apin_ggr-subnav-share_3WM6TNH3FX72DABKHMAW',
  wcpWishlist: 'https://docs.google.com/document/d/1uf_QlSd47jZM4Pwl9WvalwsUa-TgdaSoHjdC9Yn4Mqo/edit?tab=t.0',
  sponsorPacket: 'https://drive.google.com/file/d/13o-xQXF21oH17XPGinWAuE5w_L2Dgu02/view',
  sponsorPacketEmbed: 'https://drive.google.com/file/d/13o-xQXF21oH17XPGinWAuE5w_L2Dgu02/preview',
  interestForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSfpvO0bJdvFs4PXpzPSsvHEHm8G5hB0BDRWJk6okAG4ckK6og/viewform',
  map: 'https://www.google.com/maps/search/?api=1&query=North+Creek+High+School+Bothell+WA',
  mapEmbed:
    'https://maps-api-ssl.google.com/maps?hl=en-US&ll=47.824257,-122.182776&output=embed&q=47.824395,-122.182788&z=16',
  firstInspires: 'https://www.firstinspires.org/robotics/frc',
  // Not published yet — fill these in and the "Coming soon" tags disappear.
  store: null,
  github: null,
  technicalBinder: null,
  onePager: null,
  handbook: null,
  bumperLearnings: null,
  brandManualPdf: null,
  revWishlist: null,
  mentorForm: null,
  newsletter: null,
};

// Sponsor tiers, top of the grid first. `logo` is a file in public/img/sponsors/.
export const tiers = [
  { name: 'Grand Slam', amount: '$10,000+', sponsors: [] },
  {
    name: 'Pole',
    amount: '$5,000+',
    sponsors: [
      { name: 'Apple', url: 'https://apple.com', logo: 'apple.png' },
      { name: 'Argosy Foundation', url: 'https://www.argosyfnd.org/partner-stories/first', logo: 'argosy.png' },
    ],
  },
  {
    name: 'Podium',
    amount: '$2,500+',
    sponsors: [
      { name: 'Fluke', url: 'https://fluke.com', logo: null },
      { name: 'Boeing', url: 'https://boeing.com', logo: 'boeing.png' },
    ],
  },
  { name: 'Pitwall', amount: '$1,000+', sponsors: [] },
  {
    name: 'Pitlane',
    amount: '$500+',
    sponsors: [
      { name: 'The Home Depot', url: 'https://www.homedepot.com/', logo: 'home-depot.png' },
      { name: 'Banner Bank', url: 'https://www.bannerbank.com/', logo: 'banner-bank.png' },
      { name: 'Triton Homes', url: null, logo: null },
    ],
  },
  {
    name: 'Paddock',
    amount: '$100+',
    sponsors: [
      { name: 'Safeway', url: 'https://safeway.com', logo: null },
      { name: 'Fey & Grey Orthodontics', url: 'https://www.feyandgrey.com/', logo: 'fey-grey.png' },
    ],
  },
];

export const allSponsors = tiers.flatMap((t) => t.sponsors.map((s) => ({ ...s, tier: t.name })));

export const stemValues = [
  {
    title: 'Build from iteration',
    body: 'Real engineering happens through trial and error. We quickly design, test, fail, and improve, where each prototype is a step forward in understanding concepts.',
  },
  {
    title: 'Data-driven decisions',
    body: 'We rely on evidence, testing, and metrics over assumptions to guide our team’s design, strategy, and performance.',
  },
  {
    title: 'Shared acceleration of knowledge',
    body: 'Just like slipstreaming reduces resistance, we help each other by sharing knowledge, ideas, and techniques to help everyone learn efficiently.',
  },
  {
    title: 'Creative engineering with purpose',
    body: 'Innovation isn’t just about building something new but building something that works better, smarter, and more reliably under constraints. We make sure new ideas meet these purposes.',
  },
];

export const teamValues = [
  {
    title: 'Lift as climbing',
    body: 'True growth happens together, with collaborating and learning from each other. We build mentorship, active coaching, accountability, and support to accelerate as a team.',
  },
  {
    title: 'Inclusive momentum',
    body: 'Every voice matters in design, strategy, and decision-making. We know a stronger Slipstream comes from more people working together.',
  },
  {
    title: 'Shared wins, shared learning',
    body: 'We celebrate results together, but we also value the mistakes that taught us how to improve and iterate.',
  },
];

// Home page "Our progress" track. Keep them in the order they happened.
export const progress = [
  {
    when: '2026',
    title: 'Green flag',
    body: 'Slipstream is founded at North Creek High School. New team, new season, building from scratch.',
    img: 'out-meeting.jpg',
  },
  {
    when: 'Sept 2026',
    title: 'Tryouts',
    body: 'Hardware, design, programming, business, media and outreach. No robotics experience required.',
    img: 'out-jagcafe.jpg',
  },
  {
    when: 'Fall 2026',
    title: 'Venturi',
    body: 'Our first robot ever, built in three weeks from a kitbot and then re-motored, re-geared and netted.',
    img: 'venturi-2.jpg',
    href: 'robots.html#venturi',
  },
  {
    when: 'Off-season',
    title: 'PNW Block Party',
    body: 'Our first competition, hosted by 2910 Jack in the Bot. We learned how a real event runs.',
    img: 'team-blockparty.jpg',
    href: 'events.html#block-party',
  },
  {
    when: 'Off-season',
    title: 'Bordie Through Time',
    body: 'Our drive crew ran 9988 Gravi-Tee-Rex with Team 9450 and reached playoffs on the 4th-seeded alliance.',
    img: 'bordie-gravi.jpg',
    href: 'events.html#bordie',
  },
  {
    when: 'Off-season',
    title: 'Girls Gen',
    body: 'Shadowing Team 9450 in the pits and field-side, hosted by Bear Metal.',
    img: 'gg-queue.jpg',
    href: 'events.html#girls-gen',
  },
  {
    when: 'In progress',
    title: 'Swervie',
    body: 'Swerve modules assembled, tubes cut, electronics in hand. Krakens and a bellypan are next.',
    img: 'swervie-2.jpg',
    href: 'robots.html#swervie',
  },
  {
    when: 'Jan 2027',
    title: 'Kickoff',
    body: 'Our rookie season starts the moment the new game is revealed.',
    img: null,
    flag: true,
  },
];

export const subteams = [
  {
    name: 'Hardware',
    body: 'Fabrication, assembly and wiring. If it gets cut, drilled, bolted or crimped, it goes through hardware.',
  },
  {
    name: 'Design',
    body: 'CAD and prototyping. Design turns strategy into parts that can actually be made in our shop.',
  },
  {
    name: 'Programming',
    body: 'Robot code, controls and autonomous, plus side projects like our match-scouting app.',
  },
  {
    name: 'Business',
    body: 'Sponsorships, budget and the paperwork that keeps a team funded and registered.',
  },
  {
    name: 'Media',
    body: 'Brand, photo, video and this website. Media makes sure the work gets seen.',
  },
  {
    name: 'Outreach',
    body: 'Community and school events that put robots in front of people who have never driven one.',
  },
];

export const communityEvents = [
  {
    id: 'sustainamania',
    name: 'Bothell Sustainamania',
    tag: 'Community',
    body: 'We set up a booth with our banner and robot and spent the day talking STEM with Bothell families.',
    img: 'out-banner.jpg',
  },
  {
    id: 'rotary',
    name: 'Rotary event',
    tag: 'Community',
    body: 'Introducing Slipstream to local Rotary members and the people who make community projects happen.',
    img: 'out-barrels.jpg',
  },
  {
    id: 'dandiya',
    name: 'Dandiya event',
    tag: 'Community',
    body: 'Meeting families at a local Dandiya night and sharing what a rookie FRC team is building.',
    img: null,
  },
  {
    id: 'beer-b-que',
    name: 'Beer-B-que',
    tag: 'Community',
    body: 'Robot demos and conversations with neighbors and local businesses.',
    img: 'out-bbq.jpg',
  },
];

export const districtEvents = [
  {
    id: 'first-day',
    name: 'NCHS first day back',
    tag: 'Northshore SD',
    body: 'Welcoming students back to campus and introducing North Creek to its first FRC team.',
    img: 'out-trifold.jpg',
  },
  {
    id: 'club-fair',
    name: 'Club Fair',
    tag: 'Northshore SD',
    body: 'A trifold, a table and a lot of questions. This is where many of our members first found us.',
    img: 'out-table.jpg',
  },
  {
    id: 'jag-day',
    name: 'Jag Day / Jumpstart',
    tag: 'Northshore SD',
    body: 'Meeting incoming Jaguars outside the Jaguar Café and showing them what FRC looks like.',
    img: 'out-jagcafe.jpg',
  },
  {
    id: 'northshore',
    name: 'Northshore event',
    tag: 'Northshore SD',
    body: 'Sharing the floor with other Northshore robotics teams and their robots.',
    img: 'out-3574.jpg',
  },
];
