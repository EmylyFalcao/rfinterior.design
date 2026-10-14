import { site, nav } from './content.mjs';

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// The RF monogram, taken from the brand identity artwork (Rodolfo Falcao Identity-01.svg).
export const monogram = (cls = '') => `<svg class="${cls}" viewBox="850 331 211 210" aria-hidden="true" focusable="false"><path fill="currentColor" d="M1004.06,465.11c-.34-.44-.51-1.03-.33-1.56.24-.75.97-1.13,1.73-1.28,4.63-.9,10.29-2.82,15.32-5.11,0,0,36.59-12.18,37.14-52.73.51-37.73-21.94-55.75-39.39-64.04-9.24-4.39-19.35-6.6-29.58-6.6h-11.55s-25.09,0-25.09,0h-99.49v196.81c-.09.74-.1,1.43,0,2.04v2.07h41.91l-7.49-9.53-22.48.23v-179.69h115.28c20.07,0,39.01,9.94,49.87,26.82,5.32,8.27,8.99,18.52,8.4,30.84-1.88,39.43-48.2,55.13-48.2,55.13,3.92,11.42,27.28,23.41,10.4,33.91l-26.67-30.43c-1.1-1.26-1.72-2.87-1.75-4.54v-.4c27.5-10.74,30.74-42.97,11.22-63.24l-8.01,7.95c13.81,15.18,10.42,38.93-8.75,47.48-3.27,1.46-11.96,1.61-11.93,5.83l35.3,41.96-40.67,41.73c3.24-.16,6.44-1.04,9.49-2.07,15.03-5.06,23.37-15.01,34.16-25.76,2.93-2.91,5.81-9.67,10.19-10.34,2.2-.33,23.97,30.9,28.58,34.09h26.57l-54.17-69.6Z"/><path fill="currentColor" d="M946.3,458.29l-13.09-17.57,22.71-26.46c-2.83-2.8-28.73,26.06-32.08,28.61l13.08,15.17c-7.09,8.53-30.06,27.55-38.8,35.88l-3.5,3.37,2.64,3.07c4.44,4.85,25.17,37.2,49.12,38.42l-38.04-42.01,37.95-38.48Z"/><path fill="currentColor" d="M972.86,399.22l7.44-7.47c-11.72-8.5-24.41-10.38-38.67-8.33-15.65,2.26-32.43,15.74-40.55,28.87l7.49,7.49c15.77-20.25,39.04-37.74,64.29-20.57Z"/></svg>`;

export const brandLockup = (tag = 'span') => `<${tag} class="brand-lockup">${monogram('brand-mark')}<span class="brand-text"><span class="brand-name">Rodolfo Falcao</span><span class="brand-sub">Interior Design</span></span></${tag}>`;

const WIDTHS = [500, 750, 1000, 1500, 2500];
const sized = (src, w) => `${src}${src.includes('?') ? '&' : '?'}format=${w}w`;

/** Responsive Squarespace-CDN image. */
export function img(image, { sizes = '100vw', eager = false, cls = '', widths = WIDTHS, attrs = '' } = {}) {
  const srcset = widths.map((w) => `${sized(image.src, w)} ${w}w`).join(', ');
  const fallback = sized(image.src, widths.includes(1500) ? 1500 : widths[widths.length - 1]);
  return `<img src="${esc(fallback)}" srcset="${esc(srcset)}" sizes="${sizes}" alt="${esc(image.alt)}"${cls ? ` class="${cls}"` : ''} ${eager ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"'} decoding="async"${attrs ? ' ' + attrs : ''}>`;
}

export const imgUrl = (image, w = 1500) => sized(image.src, w);

export const arrow = `<svg class="icon-arrow" viewBox="0 0 24 12" aria-hidden="true" focusable="false"><path d="M0 6h22M17 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`;

export const btn = (label, href, variant = 'solid', extra = '') =>
  `<a class="btn btn--${variant}" href="${esc(href)}"${extra}><span>${label}</span>${arrow}</a>`;

export const textLink = (label, href) => `<a class="text-link" href="${esc(href)}"><span>${label}</span>${arrow}</a>`;

export const eyebrow = (text, cls = '') => `<p class="eyebrow ${cls}">${text}</p>`;

export const bookCall = (variant = 'solid') => btn('Book intro call', site.bookingUrl, variant);

function header(path) {
  const links = nav
    .map((l) => `<li><a href="${l.href}"${path.startsWith(l.href) ? ' aria-current="page"' : ''}>${l.label}</a></li>`)
    .join('');
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="brand" href="/" aria-label="${esc(site.name)}, home">${brandLockup()}</a>
    <nav class="primary-nav" aria-label="Primary"><ul>${links}</ul></nav>
    <a class="btn btn--outline btn--small site-header__cta" href="${esc(site.bookingUrl)}">Book intro call</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
      <span class="sr-only">Menu</span><span class="menu-toggle__bars" aria-hidden="true"></span>
    </button>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
  <nav aria-label="Mobile">
    <ol class="mobile-menu__list">${nav
      .map((l, i) => `<li style="--i:${i}"><a href="${l.href}"${path.startsWith(l.href) ? ' aria-current="page"' : ''}><span class="mobile-menu__num">0${i + 1}</span>${l.label}</a></li>`)
      .join('')}</ol>
  </nav>
  <div class="mobile-menu__footer">
    ${bookCall('gold')}
    <p><a href="mailto:${site.email}">${site.email}</a><br><a href="tel:${site.phoneHref}">${site.phone}</a></p>
  </div>
</div>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__top">
      <a class="brand brand--footer" href="/" aria-label="${esc(site.name)}, home">${brandLockup()}</a>
      <p class="site-footer__bio">${esc(site.bio)}</p>
    </div>
    <div class="site-footer__grid">
      <nav aria-label="Footer">
        <h2 class="footer-heading">Explore</h2>
        <ul>${nav.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
      </nav>
      <div>
        <h2 class="footer-heading">Contact</h2>
        <ul>
          <li><a href="mailto:${site.email}">${site.email}</a></li>
          <li><a href="tel:${site.phoneHref}">${site.phone}</a></li>
          <li><a href="${site.whatsapp}" rel="noopener">WhatsApp</a></li>
          <li>${site.location}</li>
        </ul>
      </div>
      <div>
        <h2 class="footer-heading">Follow</h2>
        <ul>${site.socials.map((s) => `<li><a href="${s.href}" rel="noopener">${s.label}</a></li>`).join('')}</ul>
      </div>
      <div class="site-footer__cta">
        <h2 class="footer-heading">Start a project</h2>
        <p>Consultations from £250, in person or virtually.</p>
        ${bookCall('gold')}
      </div>
    </div>
    <div class="site-footer__legal">
      <p>© ${year} ${site.legalName}. ${site.registered}. Company No. ${site.companyNo}.</p>
      <p><a href="/privacy-policy/">Privacy Policy</a></p>
    </div>
  </div>
</footer>`;
}

const FONTS = 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Marcellus&display=swap';

export function layout({ path, title, description, content, bodyClass = '', jsonLd = [], ogImage, preloadImage }) {
  const canonical = site.url + path;
  const fullTitle = title ? `${title} | ${site.name}` : `London Interior Designer | ${site.name}`;
  const og = ogImage ? imgUrl(ogImage, 1500) : null;
  const preload = preloadImage
    ? `<link rel="preload" as="image" imagesrcset="${esc([750, 1000, 1500, 2500].map((w) => `${sized(preloadImage.src, w)} ${w}w`).join(', '))}" imagesizes="100vw" fetchpriority="high">`
    : '';
  const ld = jsonLd.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#394032">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="en_GB">
${og ? `<meta property="og:image" content="${esc(og)}">\n<meta name="twitter:card" content="summary_large_image">` : '<meta name="twitter:card" content="summary">'}
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://images.squarespace-cdn.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${preload}
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="/assets/css/main.css">
<script>document.documentElement.classList.add('js')</script>
<script src="/assets/js/main.js" defer></script>
${ld}
</head>
<body class="${bodyClass}">
${header(path)}
<main id="main" tabindex="-1">
${content}
</main>
${footer()}
</body>
</html>
`;
}

export const businessLd = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': site.url + '/#business',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phoneHref,
  description: site.bio,
  founder: { '@type': 'Person', name: 'Rodolfo Falcao', jobTitle: 'Interior Designer' },
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  areaServed: 'London',
  priceRange: '££',
  sameAs: site.socials.map((s) => s.href),
});

export const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: site.url + path })),
});
