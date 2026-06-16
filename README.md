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
5. **The form** on `book.html` is a demo (shows a success message, sends nothing).
   To collect real submissions, sign up at https://formspree.io and set the form's
   `action` to your Formspree URL — see comments in that file.

---

## Publish free with GitHub Pages

1. Create a free account at https://github.com
2. **New repository** → name it e.g. `iowa-sod` → set **Public** → Create.
3. **Add file → Upload files** → drag in *all* the files (`index.html`,
   `book.html`, the four service pages, `gallery.html`, `style.css`) → **Commit**.
4. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` →
   Folder: `/ (root)` → **Save**.
5. Wait ~1 minute. Your site is live at
   `https://YOUR-USERNAME.github.io/iowa-sod/`

Re-upload any changed file to update the live site.

### Custom domain (optional)

In **Settings → Pages → Custom domain**, enter a domain you own and add the DNS
records GitHub shows you at your registrar. GitHub Pages serves it free with HTTPS.

---

## Good to know

GitHub Pages serves **static files only** — no server, no database. That's perfect
for this site. The only piece that needs a third-party service is the contact form
(use Formspree's free tier, linked above).
