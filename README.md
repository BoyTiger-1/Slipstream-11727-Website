# Slipstream 11727 website

Website for FRC Team 11727 Slipstream, North Creek High School, Bothell, WA.

Plain HTML, CSS and JavaScript. No framework and no npm dependencies; a small Node script stitches the pages together.

## Run it

```sh
npm run dev      # builds, serves http://localhost:4321, rebuilds when you save
npm run build    # writes the finished site to dist/
```

Needs Node 18 or newer.

## Where things live

| Path | What it is |
| --- | --- |
| `src/data.mjs` | **Start here.** Links, sponsors, tiers, values, timeline, events, student count. |
| `src/pages/*.mjs` | One file per page. The file name becomes the URL (`join.mjs` → `join.html`). |
| `src/layout.mjs` | Header, navigation, footer and shared pieces (buttons, page hero). |
| `public/css/site.css` | All styles. Brand colours and fonts are variables at the top. |
| `public/js/flow.js` | The wind-tunnel canvas (hero, page headers, closing section). |
| `public/js/site.js` | Scroll reveals, counters, timeline, menu, lightbox. |
| `public/img/` | `brand/` logos, `photos/`, `sponsors/` logos. |

## Common edits

- **Add a link that says "Coming soon"**: in `src/data.mjs`, replace the `null` next to `github`, `handbook`, `store`, etc. with the URL.
- **Add a sponsor**: add `{ name, url, logo }` to the right tier in `tiers`. Put the logo file in `public/img/sponsors/`. With `logo: null` the name is shown as text.
- **Show the student count on the home page**: set `team.students` to a number.
- **Add a timeline stop**: add an entry to `progress`, in the order things happened.
- **Add an outreach event**: add an entry to `communityEvents` or `districtEvents`, with a photo in `public/img/photos/`.
- **Add a page**: copy a file in `src/pages/`, then add it to `nav` in `src/layout.mjs`.

## Publish

`dist/` is a complete static site. Upload it to any static host. For GitHub Pages, publish the `dist` folder (a `.nojekyll` file is already included).

## Brand rules the site follows

From the brand manual (07/28/2026): Orbitron for titles and Nunito for text; the icon always appears with the team name underneath it; the name is written "Slipstream"; the favicon is the single orange S. The site's colours are sampled from the logo files (purple `#472F91`, orange `#F58220`, teal `#10ACCE`); the manual's print values are listed on the Brand guidelines page.
