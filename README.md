# जोहल वंश जठेरे · Johal Vansh Jathere

The official website for the **Johal Vansh Jathere** — the ancestral
**Kul Devta** shrine of the Johal clan at **Bhojpur, Ranbir Singh Pura,
Jammu & Kashmir, India**.

A single-file, dependency-free site (no frameworks, no build step) crafted
for sacred gravitas and blazing mobile performance. Deployable to GitHub
Pages exactly as-is.

🔗 **Live:** https://jathere.johal.in
&nbsp;·&nbsp; also at `kuldevta.johal.in` · `devsthan.johal.in`

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire website — all HTML, CSS and JS inline. |
| `config.js` | One small file: which GitHub repo/branch the gallery reads. |
| `gallery/` | **Upload your photos & videos here** — they appear automatically. |
| `gallery-manifest.json` | *Optional* — nicer captions + YouTube links. |
| `assets/` | Social-share images (`og-cover.jpg`, `og-square.jpg`). |
| `manifest.json` + `icon.svg` + `icons/` | PWA / installable app metadata. |
| `CNAME` | Custom domain for GitHub Pages. |

---

## Deploying on GitHub Pages

> 📋 For the full step-by-step go-live checklist (DNS records for all three
> subdomains, HTTPS, and verification), see **[DEPLOY.md](DEPLOY.md)**.


1. Push this repository to GitHub.
2. Repo **Settings → Pages** → *Build and deployment* → **Source: Deploy
   from a branch** → choose `main` and `/ (root)`.
3. Wait ~1 minute. Your site is live.
4. The `CNAME` file points the site at `jathere.johal.in`. In your DNS,
   add a `CNAME` record for `jathere` (and `kuldevta`, `devsthan`)
   pointing to `<your-username>.github.io`.

---

## Updating the Sacred Gallery

**No Google account or API key is needed.** The gallery reads the
`gallery/` folder of this repository directly from GitHub — whatever you
upload there appears on the site automatically.

### A. Add photos & videos (easiest — in the browser)
1. On GitHub, open the **`gallery/`** folder → **Add file → Upload files**.
2. Drag in images (`.jpg` `.png` `.webp` `.gif`) and/or videos
   (`.mp4` `.webm` `.mov`), then **Commit changes**.
3. They appear within ~1 minute, sorted by file name. Prefix names to
   order them (`01-aarti.jpg`, `02-shrine.jpg` …).

Captions are auto-generated from the file name. Local videos play inline
in the lightbox.

### B. Nicer captions / YouTube videos (optional)
Edit `gallery-manifest.json`:
```json
{
  "captions": { "01-aarti.jpg": "Evening Aarti at the Jathere" },
  "videos":   [ { "youtube": "https://youtu.be/VIDEO_ID", "caption": "Annual Puja" } ]
}
```

### C. Point the gallery at your repo
In `config.js`, set `GITHUB_REPO` to `"owner/repo"` (e.g.
`"johalputt/johal"`). That's the only required setting.

> If the folder is empty, the gallery shows tasteful placeholder cards
> explaining how to add content. Photo loads are cached for 15 minutes
> per visitor to stay well within GitHub's free public rate limit.

---

## Design notes

- **Palette (only four):** charcoal `#07080f`, saffron `#FF6B00`,
  gold `#D4A017`, cream `#F5F0E8`.
- **Type:** Tiro Devanagari Hindi (sacred script), Inter (UI/body),
  JetBrains Mono (data accents).
- **Performance:** zero render-blocking CSS/JS frameworks, lazy-loaded
  images via `IntersectionObserver`, CSS-only hero shimmer & particles,
  fonts preconnected/preloaded. Dark mode only.
- **Accessibility:** honours `prefers-reduced-motion`, semantic landmarks,
  keyboard-navigable lightbox (Esc / ← / →).

---

## Contact

**Sh. Subash Chander** — Caretaker
📞 +91 88032 33656 · 💬 [WhatsApp](https://wa.me/918803233656)

---

© 2025 Johal Vansh · All Rights Reserved
