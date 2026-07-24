# Cali-Cool Spray Foam — Website

A fast, SEO-optimized, fully static marketing website for **Cali-Cool Spray Foam**, a spray foam insulation contractor in San Diego, California. Built with plain HTML + CSS + a little vanilla JavaScript — no build step, no dependencies — so it hosts perfectly on **GitHub Pages** (or any static host).

---

## ⚡ Quick start (preview locally)

From this folder, run any static server. For example, with Python:

```bash
python -m http.server 8080
```

Then open <http://localhost:8080> in your browser.

---

## 🚀 Deploy to GitHub Pages

1. **Create a repository** on GitHub (e.g. `calicool-sprayfoam`).
2. **Push these files** to the `main` branch (all files should be at the repo root — `index.html` must be at the top level).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/ (root)`**, and click **Save**.
5. Wait ~1 minute. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

### Using a custom domain (recommended for SEO)

The site's SEO tags currently point to `https://www.calicoolsprayfoam.com`. To use your real domain:

1. Buy the domain and add a `CNAME` file to this folder containing just the domain, e.g.:
   ```
   www.calicoolsprayfoam.com
   ```
2. In **Settings → Pages → Custom domain**, enter your domain and enable **Enforce HTTPS**.
3. Add these DNS records at your registrar:
   - `CNAME` record: `www` → `<your-username>.github.io`
   - Four `A` records for the apex (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

> **Note:** `.nojekyll` is already included so GitHub Pages serves the files as-is.

---

## ✏️ Replace the placeholders (IMPORTANT)

The site uses realistic **placeholder** business info. Search-and-replace these across all `.html` files before going live:

| Placeholder | Appears as | Replace with |
|---|---|---|
| **Phone** | `(619) 555-0142` and `+16195550142` | Your real number (keep both formats — display and `tel:` link) |
| **Email** | `info@calicoolsprayfoam.com` | Your real email |
| **License #** | `1234567` (CSLB Lic. #) | Your real CSLB license number, or remove if not applicable |
| **Domain** | `www.calicoolsprayfoam.com` | Your real domain (in canonical, Open Graph, sitemap, robots, and JSON-LD tags) |
| **Address / ZIP** | `San Diego, CA 92101` | Your real service address or leave as a service-area (city-level) business |
| **Hours** | `Mon–Fri 7am–6pm · Sat 8am–2pm` | Your real hours |
| **Social links** | `facebook.com/…`, `instagram.com/…`, `yelp.com/…` | Your real profiles (or delete the links) |
| **Review count / rating** | `4.9`, `127` reviews, `1200+`, `15+` years | Your real numbers (in `index.html` JSON-LD + stat counters) |

> `555-0142` is intentionally a **fictional, reserved** phone number so nothing goes to a real person before you swap it in.

### Make the contact form actually send

Both forms (`index.html` and `contact.html`) currently point to a placeholder:

```html
<form ... action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Until you set a real endpoint, the form gracefully falls back to opening the visitor's email app** addressed to your email — so it works out of the box, just not automatically.

To collect submissions automatically (free tiers available):
1. Sign up at **[Formspree](https://formspree.io)** (or Getform, Basin, Web3Forms, etc.).
2. Create a form and copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Replace **both** occurrences of `https://formspree.io/f/YOUR_FORM_ID` with it.

A hidden honeypot field (`company_website`) is already included for basic spam protection.

---

## 📈 SEO checklist (already done for you)

- ✅ Unique `<title>` + meta description on every page, targeted to **San Diego / San Diego County**
- ✅ Canonical URLs, Open Graph + Twitter Card tags, custom social share image (`images/og-image.png`)
- ✅ **JSON-LD structured data**: `HVACBusiness` (LocalBusiness) with NAP, hours, geo, service area & ratings; `FAQPage`; `Service`; `BreadcrumbList`; `BlogPosting` on articles
- ✅ `sitemap.xml` and `robots.txt`
- ✅ Geo meta tags (region, placename, coordinates)
- ✅ Semantic HTML, descriptive headings, accessible labels, `alt`/`aria` on graphics
- ✅ Location-rich content: a dedicated **Service Areas** page covering neighborhoods and cities across the county
- ✅ Three keyword-focused **blog articles** for long-tail search traffic
- ✅ Mobile-first responsive design, fast load (no frameworks, system + Google fonts)
- ✅ Custom `404.html`

### After you deploy — do these

1. **Google Business Profile**: create/claim it — the single biggest local-SEO lever. Match your name, address, phone (NAP) exactly to the site.
2. **Google Search Console**: verify the domain and submit `sitemap.xml`.
3. **Bing Webmaster Tools**: same.
4. (Optional) Add **Google Analytics 4** — paste your `gtag.js` snippet before `</head>` on each page.
5. Update the sitemap `<lastmod>` dates when you make significant changes.

---

## 📁 File structure

```
.
├── index.html                                  Home
├── services.html                               Services (attic, walls, crawl space, commercial, etc.)
├── service-areas.html                          San Diego County service-area page (local SEO)
├── about.html                                  About / company story / credentials
├── resources.html                              Blog index
├── open-cell-vs-closed-cell-spray-foam.html    Article
├── is-spray-foam-insulation-worth-it-san-diego.html  Article
├── spray-foam-insulation-cost-san-diego.html   Article
├── contact.html                                Contact + estimate form
├── privacy.html                                Privacy policy (review with a professional)
├── 404.html                                    Custom not-found page
├── css/styles.css                              All styling
├── js/main.js                                  Nav, animations, FAQ, form handling
├── images/                                     Photos, illustrations & social image
│   ├── og-image.png                            Social share image (1200×630)
│   ├── work-attic-foam.jpg                     Homepage hero background (real photo)
│   ├── work-wall-crew.jpg                       "Why Cali-Cool" + gallery (real photo)
│   ├── work-wall-closeup.jpg                   Gallery photo
│   ├── work-spray-gun.jpg                      Gallery photo
│   ├── house-cutaway.svg                        How-it-works cutaway diagram (illustration)
│   ├── hero-scene.svg                          Unused illustrated hero (kept as a spare)
│   └── spray-foam-install.svg                  Unused foam illustration (kept as a spare)
├── favicon.svg                                 Site icon
├── site.webmanifest                            PWA manifest
├── sitemap.xml                                 Search-engine sitemap
├── robots.txt                                  Crawler directives
└── .nojekyll                                   Tells GitHub Pages to skip Jekyll
```

---

## 🎨 Customizing the look

- **Colors** live as CSS variables at the top of `css/styles.css` (`--teal-*`, `--sun-*`, `--ink-*`). Change them in one place to re-theme the whole site.
- **Fonts** are Poppins (headings) + Inter (body), loaded from Google Fonts.
- **Photos**: the homepage now uses **real spray-foam photos** — as the hero background (`work-attic-foam.jpg`), in the "Why Cali-Cool" section (`work-wall-crew.jpg`), and in the "Our Recent Work" gallery (all four `work-*.jpg`). To swap in your own, drop a `.jpg`/`.webp` into `images/` and point the existing `<img src="...">` at it, keeping the descriptive `alt` text (good for SEO). Recommended sizes: hero ~1600×900, gallery/section ~1200×900.
  - ⚠️ **Gallery captions are placeholders** — "Attic roofline foam · Clairemont", "New-build wall foam · Carlsbad", etc. Edit the `<figcaption>` text in `index.html` to match your actual jobs (or remove the neighborhoods).
- **Illustrations**: `house-cutaway.svg` (the "how it works" diagram) is a custom SVG. Two spare illustrations (`hero-scene.svg`, `spray-foam-install.svg`) are left in `images/` in case you want to revert the hero or "Why" section to graphics — they aren't referenced by any page. Colors live as CSS variables in `css/styles.css`.
- **Regenerate the OG image**: the source Python (Pillow) script that produced `images/og-image.png` can be re-run if you change branding.

---

*Built as a static site — no server, no database, no maintenance headaches.*
