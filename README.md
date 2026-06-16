# Iowa Sod and Irrigation — Website

A fully responsive, multi-page static website (HTML + CSS, with a little JavaScript
for the menu and form). It runs anywhere and hosts free on GitHub Pages.

> This is an **original** site with placeholder copy and color-block placeholder
> images. The layout and section flow are inspired by sodsmith.com, but no text,
> photos, logos, or branding were copied from it. Swap in your real photos, phone
> number, and email before publishing.

---

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `book.html` | Book / Get a Free Estimate (working demo form) |
| `sod-installation.html` | Service: Sod Installation |
| `irrigation.html` | Service: Irrigation |
| `maintenance.html` | Service: Maintenance |
| `establishment.html` | Service: Establishment Plan |
| `gallery.html` | Gallery (placeholder images) |
| `style.css` | Shared styles for every page |

Bee Lawns was intentionally left out as requested.
**Service areas:** Waterloo, Cedar Falls, Cedar Rapids, Iowa City, Waverly.

To preview, just open `index.html` in any browser. Resize the window to see the
mobile layout (hamburger menu, stacked sections).

---

## Customizing

Everything is plain text you can edit:

1. **Phone / email** — search all files for `(319) 555-0123` and
   `info@iowasodandirrigation.com` and replace with your real details.
2. **Copy** — edit the headings and paragraphs directly in each `.html` file.
3. **Colors** — change the variables at the top of `style.css` (`--green-700`,
   `--gold`, etc.). Every element pulls from them.
4. **Real photos** — the colored blocks use CSS classes like `fill-a`, `fill-b`,
   and `.thumb` / `.pic` / `.ph`. To use a real image, replace the class with an
   inline style, e.g.
   `<div class="pic" style="background:url('images/front-yard.jpg') center/cover"></div>`
   and put your photos in an `images/` folder.
5. **The form** on `book.html` is already wired to Formspree
   (`https://formspree.io/f/mnjyrovw`). The first submission triggers a one-time
   verification email from Formspree — click that link once to activate it.

---

## Files to upload to GitHub

Upload **all** of these to the repo (root level):

- `index.html`, `book.html`
- `sod-installation.html`, `irrigation.html`, `maintenance.html`, `establishment.html`
- `gallery.html`, `blog.html`, `blog-post.html`
- `style.css`
- `CNAME`  ← tells GitHub your custom domain is `iowasodandirrigation.com`

---

## Go-live checklist

1. **Upload files.** Repo → *Add file → Upload files* → drag everything above → Commit.
2. **Turn on Pages.** Settings → Pages → Source: *Deploy from a branch* →
   Branch `main`, folder `/ (root)` → Save. Confirm the temporary
   `yourname.github.io/...` URL loads.
3. **Custom domain.** Because the `CNAME` file is included, GitHub should pick up
   `iowasodandirrigation.com` automatically. If not, set it under Settings → Pages →
   Custom domain.
4. **DNS (already done in Squarespace):**
   - Four A records on `@` → 185.199.108.153 / .109.153 / .110.153 / .111.153
   - CNAME on `www` → `YOUR-USERNAME.github.io`
5. **Wait for the green check**, then tick **Enforce HTTPS**.
6. **Test live:** load both `iowasodandirrigation.com` and the `www` version,
   submit a test on the booking form, and check the mobile menu on a phone.
7. **Replace placeholders** before promoting the site: phone `(319) 555-0123`,
   email, address, and the marketing stats (600+ lawns / 4.9★).

---

## Good to know

GitHub Pages serves **static files only** — no server, no database. That's perfect
for this site. The booking form runs through Formspree (free tier), and DNS/HTTPS
for your domain are handled free by GitHub Pages.
