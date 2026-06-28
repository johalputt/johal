# Sacred Gallery — drop your photos here

Place your shrine photos in **this `/gallery/` folder**, then list them in
[`../gallery-manifest.json`](../gallery-manifest.json).

## How to add a photo

1. Copy your image (e.g. `aarti.jpg`) into this folder.
2. Open `gallery-manifest.json` (one level up) and add an entry under `"images"`:

   ```json
   "images": [
     { "src": "gallery/aarti.jpg", "caption": "Evening Aarti at the Jathere" }
   ]
   ```

3. Save, then publish:

   ```bash
   git add .
   git commit -m "Add gallery photos"
   git push
   ```

GitHub Pages rebuilds automatically in about a minute and the photos
appear in the **Sacred Gallery** section, lazy-loaded with a lightbox.

## Adding videos

Under `"videos"` in the manifest, paste a YouTube link or ID:

```json
"videos": [
  { "youtube": "https://youtu.be/VIDEO_ID", "caption": "Annual Puja" }
]
```

## Automatic Google Maps photos (optional)

If you add a Google Places API key in [`../config.js`](../config.js),
photos uploaded to the shrine's Google Maps listing will appear here
automatically — no manual steps needed.

> Tip: keep each image under ~400 KB for the fastest mobile loading.
> A good size is 1600px on the longest edge.
