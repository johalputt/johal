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
| `config.js` | The **only** file to edit to enable Google Maps photos (API key + Place ID). |
| `gallery-manifest.json` | List your own photos & videos here. |
| `gallery/` | Drop image files here. |
| `manifest.json` + `icon.svg` | PWA / installable app metadata. |
| `CNAME` | Custom domain for GitHub Pages. |

---

## Deploying on GitHub Pages

1. Push this repository to GitHub.
2. Repo **Settings → Pages** → *Build and deployment* → **Source: Deploy
   from a branch** → choose `main` and `/ (root)`.
3. Wait ~1 minute. Your site is live.
4. The `CNAME` file points the site at `jathere.johal.in`. In your DNS,
   add a `CNAME` record for `jathere` (and `kuldevta`, `devsthan`)
   pointing to `<your-username>.github.io`.

---

## Updating the Sacred Gallery

The gallery has **three** sources and falls back gracefully:

### A. Add your own photos (no API key needed)
1. Put images in the `gallery/` folder (e.g. `gallery/aarti.jpg`).
2. List them in `gallery-manifest.json`:
   ```json
   "images": [
     { "src": "gallery/aarti.jpg", "caption": "Evening Aarti" }
   ]
   ```
3. Publish:
   ```bash
   git add .
   git commit -m "Update gallery"
   git push
   ```

### B. Add videos
```json
"videos": [
  { "youtube": "https://youtu.be/VIDEO_ID", "caption": "Annual Puja" }
]
```

### C. Auto-load from Google Maps (optional)
Add a free **Google Places API key** and the shrine's **Place ID** in
`config.js`. Photos uploaded to the Google Maps listing then appear
automatically. Full step-by-step instructions are inside `config.js`.

> If no key and no local photos are present, the gallery shows tasteful
> placeholder cards explaining how to add content.

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
