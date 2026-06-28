# Go-Live Checklist — Johal Vansh Jathere

This repository (`johalputt/johal`) is published with **GitHub Pages**, so it
is served at **`johalputt.github.io`** and the canonical custom domain is
**`jathere.johal.in`**. The `kuldevta.` and `devsthan.` subdomains
301-redirect to the canonical one.

---

## 1. Merge to `main`
Merge the open pull request into the `main` branch.

## 2. Turn on GitHub Pages
Repo → **Settings → Pages → Build and deployment**
- **Source: GitHub Actions** (matches the included `.github/workflows/deploy.yml`)
- The first deploy runs automatically on merge — watch it under the **Actions** tab.

> Prefer no workflow? Choose **Deploy from a branch → `main` / `root`** instead,
> and delete `.github/workflows/deploy.yml`. Either approach works.

## 3. Add the DNS records
At your DNS provider for `johal.in`, add three **CNAME** records:

| Type  | Host / Name | Value (Points to)      | TTL  |
|-------|-------------|------------------------|------|
| CNAME | `jathere`   | `johalputt.github.io.` | 3600 |
| CNAME | `kuldevta`  | `johalputt.github.io.` | 3600 |
| CNAME | `devsthan`  | `johalputt.github.io.` | 3600 |

- Enter only the label (`jathere`), not the full domain — the provider appends `.johal.in`.
- The `CNAME` file in this repo already pins the canonical domain to
  `jathere.johal.in`, so `kuldevta` and `devsthan` redirect there automatically.
- **Cloudflare users:** set each record to **DNS only (grey cloud)** until the
  TLS certificate is issued; SSL mode **Full**.

## 4. Set the custom domain in GitHub
Settings → Pages → **Custom domain** → enter `jathere.johal.in` → **Save**.
(It auto-fills from the `CNAME` file once Pages builds; just confirm it is there.)

## 5. Enforce HTTPS
Once GitHub finishes domain verification (minutes up to ~1 hour), tick
**Enforce HTTPS**. Re-enable the Cloudflare proxy afterward if you wish.

## 6. Verify

```bash
dig jathere.johal.in +short                              # -> johalputt.github.io + GitHub IPs
curl -sI https://kuldevta.johal.in | grep -i location    # -> 301 to jathere.johal.in
```

In a browser, confirm:
- `https://jathere.johal.in` loads the site
- `https://kuldevta.johal.in` and `https://devsthan.johal.in` redirect to it
- `https://jathere.johal.in/some-typo` shows the branded 404 page

## 7. Post-launch (optional, recommended)
- **Social previews:** test the URL in the
  [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and the
  [X Card Validator](https://cards-dev.twitter.com/validator).
- **Search:** add the site to
  [Google Search Console](https://search.google.com/search-console) and submit
  `https://jathere.johal.in/sitemap.xml`.
- **Gallery:** add photos to `/gallery/` and list them in
  `gallery-manifest.json` (or add a Google Places API key in `config.js` —
  see instructions inside that file).

---

## Common gotchas
- **No CNAME on the apex:** do not add a CNAME record for the root `johal.in` —
  these are subdomains only.
- **Certificate "not yet provisioned":** wait; it can take up to an hour after
  DNS resolves. Avoid toggling the custom domain repeatedly.
- **404 right after enabling:** DNS propagation — give it time, then hard-refresh.

---

## Updating the site later

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages rebuilds automatically within about a minute.
