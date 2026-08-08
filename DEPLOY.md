# Deploying Johal Vansh Jathere

**This repository is no longer published by GitHub Pages.**
`jathere.johal.in` is served from a VayuPress install as an uploaded custom
website. `.github/workflows/deploy.yml` and `CNAME` have been removed, and Pages
is turned off in the repository settings.

Removing the workflow is the part that matters. It carried `enablement: true`,
which turns Pages **back on by itself** the first time it runs — so leaving the
file in place would have re-enabled Pages on the next push to `main`, whatever
the settings said.

This repository stays as the source and the history of the site.

---

## Publishing a change

1. Edit the files here and commit.
2. Build or assemble the bundle you want to serve.
3. VayuOS → `jathere.johal.in` → **Website** → upload the zip.
4. Hard-refresh the browser afterwards; the old bundle is cached.

A commit alone changes nothing that visitors see. There is no longer any
pipeline watching this branch.

## What an install will not run

A VayuPress hosted domain serves every response under a strict
Content-Security-Policy. Relative to GitHub Pages, that removes four things this
site was originally written to use, so a straight copy of this tree does not
work unchanged:

- **The Google Fonts stylesheet and every face behind it.** `font-src 'self'`
  refuses both; the faces have to be served from the bundle itself.
- **The one inline `<style>` block.** `style-src 'self'` refuses it; it has to
  become a file, linked at the same position so the cascade is unchanged.
- **The inline `<script>` that drives the whole page.** `script-src 'self'`
  refuses it; same treatment, linked in place so execution order holds.
- **The YouTube and Google Maps `<iframe>`s.** The policy sets no `frame-src`,
  so `default-src 'self'` refuses them outright, and there is no per-domain
  opt-in for frames. A link that opens the thing beats an empty box.

The gallery is a fifth. `config.js` points it at the GitHub contents API, and
`connect-src 'self'` refuses that call — the gallery would simply render empty,
with nothing on screen to say why.

None of this is a defect in the install. It is the same policy that makes an
uploaded site unable to exfiltrate anything, and it applies to a zip upload
exactly as it applies to anything else.

## The subdomains

`kuldevta.johal.in` and `devsthan.johal.in` 301-redirect to the canonical
`jathere.johal.in`. `robots.txt` and the `<link rel="canonical">` in
`index.html` both reinforce that, so there is no duplicate content to crawl.
Those redirects are configured on the server, not here.
