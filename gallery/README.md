# Sacred Gallery — just upload your files here

Whatever you put in **this `gallery/` folder shows up on the website
automatically** — no Google account, no API key, nothing to configure.
The site reads this folder directly from GitHub.

## Add photos or videos (easiest — in your browser)

1. On GitHub, open this `gallery/` folder.
2. Click **Add file → Upload files**.
3. Drag in your files:
   - **Images:** `.jpg` `.jpeg` `.png` `.webp` `.gif` `.avif`
   - **Videos:** `.mp4` `.webm` `.mov` `.m4v` `.ogv`
4. Click **Commit changes**.

Within about a minute they appear in the **Sacred Gallery**, lazy-loaded,
with a click-to-open lightbox. Local videos play right inside the page.

## Ordering & captions

- Files are shown sorted by name. To control the order, prefix names with
  numbers: `01-aarti.jpg`, `02-shrine.jpg`, `03-gathering.jpg` …
  (the number is hidden in the caption).
- Captions are auto-made from the file name (`01-evening-aarti.jpg` →
  **"Evening Aarti"**). For a custom caption, add it to
  [`../gallery-manifest.json`](../gallery-manifest.json) under `"captions"`.

## YouTube videos

Add YouTube links in `../gallery-manifest.json` under `"videos"`:

```json
"videos": [
  { "youtube": "https://youtu.be/VIDEO_ID", "caption": "Annual Puja" }
]
```

## Adding files from your computer (instead of the website)

```bash
# copy your images/videos into this gallery/ folder, then:
git add .
git commit -m "Add gallery photos"
git push
```

> Tips: keep photos under ~400 KB (≈1600px on the long edge) and videos
> short/compressed for fast mobile loading. Social-share images live in
> `../assets/`, not here, so they never appear in the gallery.
