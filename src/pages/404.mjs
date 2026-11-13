import { btn, pageHero } from '../layout.mjs';

const body = `
${pageHero({ sector: '404', title: 'Off the racing line', lead: 'That page is not on the track. Head back to the pits.' })}
<section class="sec"><div class="wrap center"><div class="row">${btn('Back to home', 'index.html')}${btn('Contact us', 'contact.html', { kind: 'line' })}</div></div></section>
`;

export default { title: 'Page not found', description: 'Page not found.', body };
