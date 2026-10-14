// Static site generator: renders every page to /dist. Run with `npm run build`.
import { mkdir, writeFile, rm, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, projects } from './content.mjs';
import * as pages from './pages.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'dist');

const routes = [
  ['/', pages.home()],
  ['/services/', pages.servicesPage()],
  ['/about/', pages.aboutPage()],
  ['/portfolio/', pages.portfolioPage()],
  ...projects.map((p, i) => [`/portfolio/${p.slug}/`, pages.projectPage(p, i)]),
  ['/faq/', pages.faqPage()],
  ['/contact/', pages.contactPage()],
  ['/privacy-policy/', pages.privacyPage()],
];

await rm(out, { recursive: true, force: true });
await cp(join(root, 'src', 'assets'), join(out, 'assets'), { recursive: true });

for (const [path, html] of routes) {
  const file = join(out, path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
await writeFile(join(out, '404.html'), pages.notFoundPage());

const today = new Date().toISOString().slice(0, 10);
await writeFile(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([p]) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`,
);
await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${routes.length + 1} pages to dist/`);
