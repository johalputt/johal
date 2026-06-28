/* ════════════════════════════════════════════════════════════════
   JOHAL VANSH JATHERE — SITE CONFIG
   ────────────────────────────────────────────────────────────────
   This is the ONLY file the site owner needs to edit to switch on
   automatic Google Maps photos. Save it and push to GitHub — done.

   STEP 1 · Get a free Google Places API key
     • Visit https://console.cloud.google.com/  →  create a project.
     • "APIs & Services" → "Enable APIs and Services" → enable
       "Places API".
     • "Credentials" → "Create credentials" → "API key".
     • (Recommended) Restrict the key:
         - Application restriction: HTTP referrers → add
           https://jathere.johal.in/*  and  https://*.johal.in/*
         - API restriction: limit to "Places API".

   STEP 2 · Paste the key and the Place ID below.

   STEP 3 · Find the Place ID for the shrine
     • Easiest: https://developers.google.com/maps/documentation/places/web-service/place-id
       Search "Bhojpur Ranbir Singh Pura" / the shrine name, copy the ID.
     • A Place ID looks like:  ChIJ.................

   NOTE · The browser-side Places "Place Details" call needs a
   billing-enabled key. If you prefer NOT to use an API key, simply
   add photos to the /gallery/ folder and list them in
   gallery-manifest.json — the gallery works perfectly without any key.
════════════════════════════════════════════════════════════════ */
window.JATHERE_CONFIG = {
  // Paste your key between the quotes (leave as-is to disable Maps photos):
  GOOGLE_API_KEY: "YOUR_GOOGLE_PLACES_API_KEY",

  // Paste the Google Maps Place ID for the shrine here:
  PLACE_ID: "YOUR_PLACE_ID",

  // Public maps link (already set — no change needed):
  MAPS_URL: "https://maps.app.goo.gl/gxBKvo2gXEL1zDjD7"
};
