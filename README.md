# rfinterior.design

Website for **Rodolfo Falcao Interior Design**. It's a fast, static site with no framework and no runtime dependencies.

## Commands

```bash
npm run dev     # build and preview at http://localhost:4321
npm run build   # render every page to dist/
```

Deploy the `dist/` folder to any static host, such as Netlify, Vercel, Cloudflare Pages or GitHub Pages. URLs match the current Squarespace site (`/portfolio/bow-east-london-apartment-interior-design/`, etc.), so existing links and search rankings carry over.

### GitHub Pages preview
`.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`. In the repo, go to **Settings → Pages** and set the source to **GitHub Actions**. The workflow sets `BASE_PATH` so links work under `/rfinterior.design/`.

## Structure

| Path | What it is |
| --- | --- |
| `src/content.mjs` | **All copy, images, services, projects and FAQs.** Most edits happen here. |
| `src/pages.mjs` | Page layouts (home, services, about, portfolio, project, FAQ, contact, privacy, 404) |
| `src/templates.mjs` | Shared `<head>`, header, footer, logo, image and button helpers, JSON-LD |
| `src/assets/css/main.css` | Design system: brand palette tokens, type scale, components, animation |
| `src/assets/js/main.js` | Header behaviour, mobile menu, scroll reveals, parallax, gallery lightbox, enquiry form |
| `src/build.mjs` | Renders pages, sitemap.xml and robots.txt into `dist/` |

### Adding a project
Add an entry to `projects` in `src/content.mjs` with a `slug`, text, `cover` and `gallery`. The portfolio grid, the project page, the sitemap and the next/previous links update automatically.

## Before going live

- **Booking link:** set `site.bookingUrl` to the Calendly link so every "Book intro call" button opens booking. It currently points to the enquiry form.
- **Form backend:** set `site.formEndpoint` (Formspree, Basin, Netlify Forms…). Until then, the form opens the visitor's email app with the enquiry pre-filled.
- **Images:** photos load from the existing Squarespace CDN, with responsive sizes. Download them to `src/assets/img/` and update the paths **before** cancelling Squarespace.
- **Fonts:** the brand typeface is Optima LT Std. Apple devices already have Optima. Other devices fall back to Marcellus and Jost (Google Fonts). If you hold a web licence for Optima, add `@font-face` rules for the `.woff2` files at the top of `main.css`.
- **Privacy policy:** updated to drop Squarespace-specific wording. Review it against your new hosting and analytics setup.

## Brand

Palette (from the identity files): `#FDF0D5` cream · `#E9EFDA` mist · `#D9DBBC` sage · `#D8BC84` gold · `#84714F` bronze · `#5D675B` moss · `#394032` olive · `#422D18` brown. 

How it's used (dark theme): the page background is deep olive `#394032`. Alternating sections and cards use a deeper green, `#2E3428`. The values band is a deepened moss, `#475046`. The call-to-action band is brown and the footer is near-black green, `#262B21`. Text is cream and accents are gold, and both pass WCAG AA on every background.
