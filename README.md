# alvey-tools-marketing-site

Astro static site for `alveyautomation.com/tools` — the Alvey Tools sub-brand
marketing pages.

## Stack

- Astro 5 (static site generation, zero JS for landing pages)
- Tailwind CSS v4
- No backend, no JS framework

## Pages

- `/tools` — overview + grid of all products
- `/tools/<slug>` — per-product landing page (10 products)
- `/tools/privacy` — privacy policy
- `/tools/terms` — terms of service

## Local development

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:4321/tools`.

## Build

```bash
npm run build
```

Static output is written to `dist/`. Deploy that directory to Cloudflare Pages.

## Adding a product

1. Add an entry to `src/data/products.ts` (slug, name, category, etc.).
2. Create `src/pages/tools/<slug>.astro` using an existing product page as a
   template.
3. The product card on the index page picks up automatically.

## Contact

`brett@alveyautomation.com`
