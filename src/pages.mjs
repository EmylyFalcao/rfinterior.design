import { site, services, projects, values, about, faqs, images } from './content.mjs';
import { layout, esc, img, btn, textLink, eyebrow, bookCall, arrow, businessLd, breadcrumbLd } from './templates.mjs';

const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'];

/* ---------- Shared sections ---------- */

const ctaBand = ({ title = 'Let’s create a home with character.', text = 'Tell me about your space and how you want to live in it. Initial consultations are £250, in person or virtually.' } = {}) => `
<section class="cta-band" aria-labelledby="cta-title">
  <div class="container cta-band__inner">
    <div data-reveal>
      ${eyebrow('Begin your project', 'eyebrow--gold')}
      <h2 id="cta-title" class="display-2">${title}</h2>
    </div>
    <div class="cta-band__aside" data-reveal style="--d:120ms">
      <p>${text}</p>
      <div class="btn-row">${bookCall('gold')}${btn('Get in touch', '/contact/', 'ghost-light')}</div>
    </div>
  </div>
</section>`;

const pageIntro = ({ kicker, title, lead, id = 'page-title' }) => `
<header class="page-intro container">
  <div class="page-intro__grid">
    ${eyebrow(kicker)}
    <h1 id="${id}" class="display-1" data-hero-in>${title}</h1>
    ${lead ? `<p class="lead page-intro__lead" data-hero-in style="--d:150ms">${lead}</p>` : ''}
  </div>
</header>`;

const valuesSection = (heading = 'What guides every project') => `
<section class="values section" aria-labelledby="values-title">
  <div class="container">
    <div class="section-head" data-reveal>
      ${eyebrow('Approach')}
      <h2 id="values-title" class="display-3">${heading}</h2>
    </div>
    <ol class="values__list">
      ${values
        .map(
          (v, i) => `<li class="values__item" data-reveal style="--d:${i * 120}ms">
        <span class="values__num" aria-hidden="true">${roman[i]}</span>
        <h3 class="values__title">${v.title}</h3>
        <p>${v.text}</p>
      </li>`,
        )
        .join('')}
    </ol>
  </div>
</section>`;

const projectCard = (p, i, { sizes = '(min-width: 900px) 50vw, 100vw', headingLevel = 3 } = {}) => `
<article class="project-card project-card--${i % 4}" data-reveal>
  <a class="project-card__link" href="/portfolio/${p.slug}/">
    <div class="project-card__media img-zoom">${img(p.cover, { sizes })}</div>
    <div class="project-card__caption">
      <span class="project-card__index" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <div>
        <h${headingLevel} class="project-card__title">Project ${p.title}</h${headingLevel}>
        <p class="project-card__meta">${p.location} · ${p.property}</p>
      </div>
      <span class="project-card__arrow" aria-hidden="true">${arrow}</span>
    </div>
  </a>
</article>`;

/* ---------- Home ---------- */

export function home() {
  const content = `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__media" data-parallax="0.25">${img(images.hero, { eager: true, cls: 'hero__img' })}</div>
  <div class="hero__shade" aria-hidden="true"></div>
  <div class="container hero__content">
    <p class="eyebrow eyebrow--light hero__kicker" data-hero-in>London Interior Designer · Character-driven homes</p>
    <h1 id="hero-title" class="hero__title" data-hero-in style="--d:150ms">${site.tagline}</h1>
    <p class="hero__sub" data-hero-in style="--d:300ms">${site.subtext}</p>
    <div class="btn-row" data-hero-in style="--d:450ms">${bookCall('light')}${btn('View portfolio', '/portfolio/', 'ghost-light')}</div>
  </div>
  <a class="hero__scroll" href="#studio" aria-label="Scroll to introduction"><span aria-hidden="true">Scroll</span></a>
</section>

<section class="intro section" id="studio" aria-labelledby="intro-title">
  <div class="container intro__grid">
    <div class="intro__label" data-reveal>${eyebrow('The Studio')}</div>
    <div class="intro__text">
      <h2 id="intro-title" class="sr-only">About Rodolfo Falcao Interior Design</h2>
      <p class="statement" data-reveal>${site.bio}</p>
      <div class="intro__links" data-reveal style="--d:120ms">${textLink('About Rodolfo', '/about/')}${textLink('Our services', '/services/')}</div>
    </div>
    <figure class="intro__portrait" data-reveal style="--d:200ms">
      <div class="img-mask" data-parallax="-0.06">${img(images.portrait, { sizes: '(min-width: 900px) 28vw, 70vw' })}</div>
      <figcaption>Rodolfo Falcao, founder</figcaption>
    </figure>
  </div>
</section>

<section class="services-feature section section--alt" aria-labelledby="services-title">
  <div class="container">
    <div class="section-head section-head--split" data-reveal>
      <div>${eyebrow('Services')}<h2 id="services-title" class="display-3">Two ways to work together</h2></div>
      <p class="section-head__aside">From a complete redesign to a considered refresh, every service is shaped around how you really live.</p>
    </div>
    <div class="service-cards">
      ${services
        .map(
          (s, i) => `<article class="service-card" data-reveal style="--d:${i * 120}ms">
        <a class="service-card__media img-zoom" href="/services/#${s.id}" tabindex="-1" aria-hidden="true">${img(s.image, { sizes: '(min-width: 900px) 45vw, 100vw' })}</a>
        <div class="service-card__body">
          <span class="service-card__num" aria-hidden="true">${s.number}</span>
          <h3 class="service-card__title"><a href="/services/#${s.id}">${s.title}</a></h3>
          <p>${s.lead}</p>
          <ul class="tick-list">${s.includes.map((x) => `<li>${x.title}</li>`).join('')}</ul>
          ${textLink('Explore the service', `/services/#${s.id}`)}
        </div>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="work section" aria-labelledby="work-title">
  <div class="container">
    <div class="section-head section-head--split" data-reveal>
      <div>${eyebrow('Selected work')}<h2 id="work-title" class="display-3">Homes with a story to tell</h2></div>
      ${textLink('View full portfolio', '/portfolio/')}
    </div>
    <div class="project-grid project-grid--editorial">
      ${projects.map((p, i) => projectCard(p, i)).join('')}
    </div>
  </div>
</section>

${valuesSection()}

<section class="quote-band" aria-label="Design philosophy">
  <div class="quote-band__media" data-parallax="0.18">${img(projects[2].gallery[5], { sizes: '100vw' })}</div>
  <div class="quote-band__shade" aria-hidden="true"></div>
  <blockquote class="container quote-band__quote" data-reveal>
    <p>Understated elegance is possible at any budget. It comes from thoughtful choices, not big spending.</p>
    <footer>Rodolfo Falcao</footer>
  </blockquote>
</section>

${ctaBand()}`;

  return layout({
    path: '/',
    title: '',
    description: 'Rodolfo Falcao is a London interior designer creating thoughtful, character-driven homes, blending vintage, modern and timeless influences for real living. Book an intro call.',
    content,
    bodyClass: 'has-hero',
    ogImage: images.hero,
    preloadImage: images.hero,
    jsonLd: [businessLd(), { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url }],
  });
}

/* ---------- Services ---------- */

export function servicesPage() {
  const content = `
${pageIntro({ kicker: 'Services', title: 'Design that fits the way you live', lead: 'Whether you are renovating from the ground up or simply want a room to feel like yours again, there is a way to work together. Every project begins with a consultation, in person or virtually.' })}

<nav class="container service-index" aria-label="Services on this page" data-reveal>
  ${services.map((s) => `<a href="#${s.id}"><span>${s.number}</span>${s.title}${arrow}</a>`).join('')}
</nav>

${services
  .map(
    (s, si) => `
<section class="service section${si % 2 ? ' section--alt' : ''}" id="${s.id}" aria-labelledby="${s.id}-title">
  <div class="container service__grid">
    <div class="service__aside">
      <div class="service__sticky">
        <span class="service__num" aria-hidden="true">${s.number}</span>
        <h2 id="${s.id}-title" class="display-2">${s.title}</h2>
        <p class="lead">${s.lead}</p>
        <p>${s.body}</p>
        <div class="service__media img-mask" data-reveal>${img(s.image, { sizes: '(min-width: 900px) 40vw, 100vw' })}</div>
      </div>
    </div>
    <div class="service__main">
      <h3 class="eyebrow">What’s included</h3>
      <ul class="includes">
        ${s.includes.map((x, i) => `<li class="includes__item" data-reveal style="--d:${i * 80}ms"><h4>${x.title}</h4><p>${x.text}</p></li>`).join('')}
      </ul>
      <h3 class="eyebrow">The process</h3>
      <ol class="process">
        ${s.process
          .map(
            (st, i) => `<li class="process__step" data-reveal>
          <span class="process__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <div><h4>${st.title}${st.price ? ` <span class="price-tag">${st.price}</span>` : ''}</h4><p>${st.text}</p></div>
        </li>`,
          )
          .join('')}
      </ol>
      <div class="btn-row">${bookCall()}${btn('Get in touch', '/contact/', 'outline')}</div>
    </div>
  </div>
</section>`,
  )
  .join('')}

<section class="compare section" aria-labelledby="compare-title">
  <div class="container">
    <div class="section-head" data-reveal>${eyebrow('Which is right for me?')}<h2 id="compare-title" class="display-3">Not sure where to start?</h2></div>
    <div class="compare__grid">
      <div class="compare__col" data-reveal><h3>Choose Full Service if…</h3><ul class="tick-list"><li>You are renovating or redesigning several rooms</li><li>You want one point of contact for trades and deliveries</li><li>You would like everything sourced and installed for you</li></ul></div>
      <div class="compare__col" data-reveal style="--d:120ms"><h3>Choose Styling & Refresh if…</h3><ul class="tick-list"><li>A room needs a new direction, not a rebuild</li><li>You want to work with what you already own</li><li>You rent, or are working to a lighter budget</li></ul></div>
    </div>
    <p class="compare__more" data-reveal>Still deciding? ${textLink('Read the FAQ', '/faq/')}</p>
  </div>
</section>

${ctaBand()}`;

  return layout({
    path: '/services/',
    title: 'Interior Design Services in London',
    description: 'Full Service Interior Design and Styling & Refresh from London interior designer Rodolfo Falcao: concept and layout, sourcing, vintage and unique pieces, furniture and styling. Consultations from £250.',
    content,
    ogImage: images.sketch,
    jsonLd: [
      businessLd(),
      breadcrumbLd([['Home', '/'], ['Services', '/services/']]),
      ...services.map((s) => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: s.title,
        description: s.body,
        provider: { '@id': site.url + '/#business' },
        areaServed: 'London',
        offers: { '@type': 'Offer', name: s.process[0].title, price: '250', priceCurrency: 'GBP' },
      })),
    ],
  });
}

/* ---------- About ---------- */

export function aboutPage() {
  const content = `
<section class="about-hero container" aria-labelledby="page-title">
  <div class="about-hero__text">
    ${eyebrow('About')}
    <h1 id="page-title" class="display-1" data-hero-in>Rodolfo Falcao</h1>
    <p class="statement" data-hero-in style="--d:150ms">${site.bio}</p>
  </div>
  <figure class="about-hero__portrait img-mask" data-hero-in style="--d:300ms">${img(images.portrait, { eager: true, sizes: '(min-width: 900px) 40vw, 100vw' })}</figure>
</section>

<section class="story section" aria-labelledby="story-title">
  <div class="container story__grid">
    <div data-reveal>${eyebrow('The story')}<h2 id="story-title" class="display-3">A lifelong habit of making rooms better</h2></div>
    <div class="prose prose--dropcap" data-reveal style="--d:120ms">${about.story.map((p) => `<p>${p}</p>`).join('')}</div>
  </div>
</section>

<section class="aesthetic section section--alt" aria-labelledby="aesthetic-title">
  <div class="container aesthetic__grid">
    <div class="aesthetic__media img-mask" data-reveal>${img(projects[0].gallery[0], { sizes: '(min-width: 900px) 45vw, 100vw' })}</div>
    <div data-reveal style="--d:120ms">
      ${eyebrow('Aesthetic')}
      <h2 id="aesthetic-title" class="display-3">Eclectic, personal, quietly considered</h2>
      <p class="lead">${about.aesthetic}</p>
      <ul class="chips" aria-label="Influences">${about.influences.map((x) => `<li>${x}</li>`).join('')}</ul>
      <h3 class="eyebrow">Approach</h3>
      <p>${about.approach}</p>
    </div>
  </div>
</section>

${valuesSection('Three values, every project')}

<section class="credentials section" aria-labelledby="cred-title">
  <div class="container credentials__grid" data-reveal>
    <div>${eyebrow('Background')}<h2 id="cred-title" class="display-3">Education</h2></div>
    <ul class="credentials__list">${about.credentials.map((c) => `<li>${c}</li>`).join('')}</ul>
  </div>
</section>

${ctaBand({ title: 'Let’s talk about your home.' })}`;

  return layout({
    path: '/about/',
    title: 'About Rodolfo Falcao, London Interior Designer',
    description: 'Meet Rodolfo Falcao, a London interior designer creating thoughtful, character-driven homes that blend vintage, modern and timeless influences for real living.',
    content,
    ogImage: images.portrait,
    jsonLd: [
      businessLd(),
      breadcrumbLd([['Home', '/'], ['About', '/about/']]),
      { '@context': 'https://schema.org', '@type': 'Person', name: 'Rodolfo Falcao', jobTitle: 'Interior Designer', worksFor: { '@id': site.url + '/#business' }, alumniOf: 'Warwick Business School', sameAs: site.socials.map((s) => s.href) },
    ],
  });
}

/* ---------- Portfolio ---------- */

export function portfolioPage() {
  const content = `
${pageIntro({ kicker: 'Portfolio', title: 'Selected projects', lead: 'Homes across London and beyond, each shaped around the people who live in them, layering vintage finds, colour and texture with a sense of calm.' })}
<section class="section section--tight" aria-label="Projects">
  <div class="container project-grid project-grid--index">
    ${projects.map((p, i) => projectCard(p, i, { headingLevel: 2 })).join('')}
  </div>
</section>
${ctaBand()}`;

  return layout({
    path: '/portfolio/',
    title: 'Portfolio – Interior Design Projects in London',
    description: 'Interior design projects by Rodolfo Falcao: Bow, Limehouse Cut and Battersea in London, and a family home in Oxford. Character-driven homes blending vintage, modern and timeless influences.',
    content,
    ogImage: projects[0].cover,
    jsonLd: [breadcrumbLd([['Home', '/'], ['Portfolio', '/portfolio/']])],
  });
}

export function projectPage(p, i) {
  const next = projects[(i + 1) % projects.length];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const content = `
<section class="project-hero" aria-labelledby="page-title">
  <div class="project-hero__media" data-parallax="0.2">${img(p.cover, { eager: true, cls: 'hero__img' })}</div>
  <div class="hero__shade" aria-hidden="true"></div>
  <div class="container project-hero__content">
    <nav class="breadcrumb" aria-label="Breadcrumb" data-hero-in><ol><li><a href="/portfolio/">Portfolio</a></li><li aria-current="page">Project ${p.title}</li></ol></nav>
    <h1 id="page-title" class="hero__title" data-hero-in style="--d:150ms">${p.title}</h1>
    <p class="hero__sub" data-hero-in style="--d:300ms">${p.location} · ${p.property}</p>
  </div>
</section>

<section class="project-overview section" aria-labelledby="brief-title">
  <div class="container project-overview__grid">
    <div class="project-meta" data-reveal>
      <dl>
        <div><dt>Location</dt><dd>${p.location}</dd></div>
        <div><dt>Property</dt><dd>${p.property}</dd></div>
        <div><dt>Scope</dt><dd>${p.scope.join(', ')}</dd></div>
        ${p.credit ? `<div><dt>Photography</dt><dd>${p.credit}</dd></div>` : ''}
      </dl>
      <div class="palette" aria-label="Colour palette">
        <p class="eyebrow">Palette</p>
        <ul>${p.palette.map((c) => `<li><span class="palette__swatch" style="background:${c.hex}" aria-hidden="true"></span>${c.name}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="project-story">
      ${eyebrow('The brief')}
      <h2 id="brief-title" class="statement" data-reveal>${p.brief}</h2>
      ${p.quote ? `<blockquote class="pull-quote" data-reveal><p>“${p.quote}”</p></blockquote>` : ''}
      <div class="prose" data-reveal>${p.story.map((s) => `<p>${s}</p>`).join('')}</div>
    </div>
  </div>
</section>

<section class="gallery section section--tight" aria-label="Project ${esc(p.title)} gallery">
  <div class="container">
    <ul class="gallery__grid" data-gallery>
      ${p.gallery
        .map(
          (g, gi) => `<li class="gallery__item" data-reveal>
        <button type="button" class="gallery__btn img-zoom" data-lightbox="${gi}" aria-label="Enlarge image ${gi + 1} of ${p.gallery.length}: ${esc(g.alt)}">
          ${img(g, { sizes: '(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw', widths: [500, 750, 1000, 1500, 2500], attrs: `data-full="${esc(g.src + '?format=2500w')}"` })}
        </button>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

<nav class="project-pager" aria-label="More projects">
  <a class="project-pager__link project-pager__link--prev" href="/portfolio/${prev.slug}/">
    <span class="eyebrow">Previous project</span><span class="project-pager__title">${prev.title}</span>
  </a>
  <a class="project-pager__link project-pager__link--next" href="/portfolio/${next.slug}/">
    <div class="project-pager__bg" aria-hidden="true">${img({ ...next.cover, alt: '' }, { sizes: '50vw', widths: [750, 1000, 1500] })}</div>
    <span class="eyebrow">Next project</span><span class="project-pager__title">${next.title} ${arrow}</span>
  </a>
</nav>

<dialog class="lightbox" data-lightbox-dialog aria-label="Image viewer">
  <figure class="lightbox__figure"><img alt="" data-lightbox-img><figcaption data-lightbox-caption></figcaption></figure>
  <button type="button" class="lightbox__btn lightbox__close" data-lightbox-close aria-label="Close image viewer"><span aria-hidden="true">×</span></button>
  <button type="button" class="lightbox__btn lightbox__prev" data-lightbox-prev aria-label="Previous image">${arrow}</button>
  <button type="button" class="lightbox__btn lightbox__next" data-lightbox-next aria-label="Next image">${arrow}</button>
  <p class="lightbox__count" data-lightbox-count aria-live="polite"></p>
</dialog>

${ctaBand({ title: 'Imagine what we could do with your home.' })}`;

  return layout({
    path: `/portfolio/${p.slug}/`,
    title: p.seoTitle,
    description: `Project ${p.title}: ${p.excerpt} ${p.property} in ${p.location}, designed by London interior designer Rodolfo Falcao.`,
    content,
    bodyClass: 'has-hero',
    ogImage: p.cover,
    preloadImage: p.cover,
    jsonLd: [
      breadcrumbLd([['Home', '/'], ['Portfolio', '/portfolio/'], [`Project ${p.title}`, `/portfolio/${p.slug}/`]]),
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: `Project ${p.title}`,
        about: `${p.property}, ${p.location}`,
        description: p.brief,
        creator: { '@id': site.url + '/#business' },
        image: p.gallery.slice(0, 6).map((g) => g.src),
      },
    ],
  });
}

/* ---------- FAQ ---------- */

export function faqPage() {
  const content = `
${pageIntro({ kicker: 'FAQ', title: 'Questions, answered', lead: 'Everything you might want to know before we begin. If your question isn’t here, just ask.' })}
<section class="section section--tight" aria-label="Frequently asked questions">
  <div class="container faq">
    ${faqs
      .map(
        (f, i) => `<details class="faq__item" data-reveal${i === 0 ? ' open' : ''}>
      <summary><span class="faq__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><span class="faq__q">${f.q}</span><span class="faq__icon" aria-hidden="true"></span></summary>
      <div class="faq__a"><p>${f.a}</p></div>
    </details>`,
      )
      .join('')}
  </div>
</section>
${ctaBand({ title: 'Still have a question?', text: `Email <a href="mailto:${site.email}">${site.email}</a> or call ${site.phone}. I’m always happy to talk.` })}`;

  return layout({
    path: '/faq/',
    title: 'Interior Design FAQ',
    description: 'Answers to common questions about working with London interior designer Rodolfo Falcao: consultation fees, services, rentals, timelines, virtual consultations and sourcing.',
    content,
    jsonLd: [
      breadcrumbLd([['Home', '/'], ['FAQ', '/faq/']]),
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  });
}

/* ---------- Contact ---------- */

export function contactPage() {
  const content = `
<section class="contact section" aria-labelledby="page-title">
  <div class="container contact__grid">
    <div class="contact__info">
      ${eyebrow('Contact')}
      <h1 id="page-title" class="display-1" data-hero-in>Let’s start the conversation</h1>
      <p class="lead" data-hero-in style="--d:150ms">Share a few details about your project and I’ll be in touch. Initial consultations are £250, in person or virtually.</p>
      <dl class="contact__details" data-reveal style="--d:200ms">
        <div><dt>Email</dt><dd><a href="mailto:${site.email}">${site.email}</a></dd></div>
        <div><dt>Phone</dt><dd><a href="tel:${site.phoneHref}">${site.phone}</a></dd></div>
        <div><dt>WhatsApp</dt><dd><a href="${site.whatsapp}" rel="noopener">Message on WhatsApp</a></dd></div>
        <div><dt>Studio</dt><dd>${site.location}</dd></div>
        <div><dt>Follow</dt><dd class="contact__socials">${site.socials.map((s) => `<a href="${s.href}" rel="noopener">${s.label}</a>`).join('')}</dd></div>
      </dl>
      <figure class="contact__media img-mask" data-reveal>${img(images.chair, { sizes: '(min-width: 900px) 35vw, 100vw' })}</figure>
    </div>

    <div class="contact__form-wrap" id="enquiry">
      <form class="enquiry" data-enquiry data-endpoint="${esc(site.formEndpoint)}" data-email="${site.email}" novalidate aria-labelledby="enquiry-title">
        <h2 id="enquiry-title" class="display-3">Book an intro call</h2>
        <p class="enquiry__note">Fields marked <span aria-hidden="true">*</span><span class="sr-only">with an asterisk</span> are required.</p>
        <div class="field-row">
          <div class="field"><label for="f-name">Name <span aria-hidden="true">*</span></label><input id="f-name" name="name" autocomplete="name" required aria-describedby="f-name-err"><p class="field__error" id="f-name-err" hidden>Please enter your name.</p></div>
          <div class="field"><label for="f-email">Email <span aria-hidden="true">*</span></label><input id="f-email" name="email" type="email" autocomplete="email" required aria-describedby="f-email-err"><p class="field__error" id="f-email-err" hidden>Please enter a valid email address.</p></div>
        </div>
        <div class="field-row">
          <div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel"></div>
          <div class="field"><label for="f-area">Location of the project</label><input id="f-area" name="location" autocomplete="address-level2" placeholder="e.g. Hackney, London"></div>
        </div>
        <fieldset class="field field--choices">
          <legend>I’m interested in</legend>
          <div class="choices">
            ${[...services.map((s) => s.title), 'Not sure yet'].map((t, i) => `<label class="choice"><input type="radio" name="service" value="${esc(t)}"${i === 2 ? ' checked' : ''}><span>${t}</span></label>`).join('')}
          </div>
        </fieldset>
        <div class="field"><label for="f-msg">Tell me about your project <span aria-hidden="true">*</span></label><textarea id="f-msg" name="message" rows="5" required aria-describedby="f-msg-err"></textarea><p class="field__error" id="f-msg-err" hidden>Please add a short description of your project.</p></div>
        <label class="checkbox"><input type="checkbox" name="newsletter" value="yes"><span>Send me occasional updates and inspiration. Unsubscribe anytime.</span></label>
        <div class="enquiry__submit">
          <button class="btn btn--solid" type="submit"><span>Send enquiry</span>${arrow}</button>
          <p class="enquiry__privacy">See our <a href="/privacy-policy/">Privacy Policy</a> for how your information is handled.</p>
        </div>
        <p class="enquiry__status" role="status" aria-live="polite" data-status></p>
      </form>
    </div>
  </div>
</section>`;

  return layout({
    path: '/contact/',
    title: 'Contact & Book an Intro Call',
    description: `Contact London interior designer Rodolfo Falcao. Email ${site.email}, call ${site.phone}, or book an intro call to discuss your project.`,
    content,
    ogImage: images.chair,
    jsonLd: [businessLd(), breadcrumbLd([['Home', '/'], ['Contact', '/contact/']])],
  });
}

/* ---------- Privacy ---------- */

export function privacyPage() {
  const e = `<a href="mailto:${site.privacyEmail}">${site.privacyEmail}</a>`;
  const content = `
${pageIntro({ kicker: 'Legal', title: 'Privacy Policy', lead: 'How RF Interior Design Ltd collects, uses and protects your information.' })}
<section class="section section--tight">
  <div class="container prose prose--legal">
    <h2>Who we are</h2>
    <p>${site.legalName}, a London interior design practice, is the data controller for information collected through this website and our client work. We are registered with the Information Commissioner’s Office (ZC157944).</p>
    <h2>Information we collect and why</h2>
    <h3>Website visitors</h3>
    <p>Our hosting provider automatically collects technical data such as browser, device, network, IP address and pages viewed, to run and secure the site. Legal basis: legitimate interests.</p>
    <h3>Analytics and cookies</h3>
    <p>Necessary cookies keep the site working (legitimate interests). Analytics that track how visitors use the site are only used with your consent, as required under PECR.</p>
    <h3>Contact form</h3>
    <p>We collect your name, email and project details to respond to your enquiry (legitimate interests). If you opt in, your email is added to our mailing list for updates (consent).</p>
    <h3>Discovery call bookings</h3>
    <p>Booking details are processed by our scheduling provider and added to our calendar; calls take place on Google Meet. Legal basis: legitimate interests.</p>
    <h3>WhatsApp</h3>
    <p>Messages and contact details you send via WhatsApp are handled by WhatsApp (owned by Meta). Legal basis: legitimate interests.</p>
    <h3>Proposals and contracts</h3>
    <p>Details needed to agree and deliver a project, such as contact details, project address and brief. Legal basis: contract.</p>
    <h3>Google Fonts</h3>
    <p>When fonts load, Google may receive technical data including your IP address. Legal basis: legitimate interests.</p>
    <h2>Your rights</h2>
    <p>You can access, correct or erase your data, restrict or object to its processing, withdraw consent, and request a portable copy where processing is based on consent or contract. Email ${e} and we will respond within one month.</p>
    <h2>How long we keep information</h2>
    <ul><li>Enquiries that don’t become projects: 3 years from the enquiry date.</li><li>Client project records: 7 years after project completion.</li><li>Mailing list: until you unsubscribe or withdraw consent.</li></ul>
    <h2>Complaints</h2>
    <p>Please contact us first at ${e}; we will acknowledge complaints within 30 days. If you remain unsatisfied, you can contact the ICO at <a href="https://ico.org.uk" rel="noopener">ico.org.uk</a> or on 0303 123 1113.</p>
    <h2>Changes to this policy</h2>
    <p>Updates are posted on this page with a new date.</p>
    <p class="prose__date">Last updated: 28 May 2026</p>
  </div>
</section>`;
  return layout({
    path: '/privacy-policy/',
    title: 'Privacy Policy',
    description: 'Privacy policy for RF Interior Design Ltd: what information we collect, why, how long we keep it and your rights.',
    content,
  });
}

export function notFoundPage() {
  const content = `
${pageIntro({ kicker: 'Error 404', title: 'This room doesn’t exist', lead: 'The page you’re looking for may have moved. Let’s get you somewhere more comfortable.' })}
<div class="container btn-row section--tight">${btn('Back to home', '/', 'solid')}${btn('View portfolio', '/portfolio/', 'outline')}</div>`;
  return layout({ path: '/404/', title: 'Page not found', description: 'Page not found.', content });
}
