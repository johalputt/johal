/* ════════════════════════════════════════════════════════════════
   JOHAL VANSH JATHERE — SITE CONFIG
   ────────────────────────────────────────────────────────────────
   The gallery needs NO Google account and NO API key.

   It reads the  gallery/  folder of your GitHub repository directly
   (using GitHub's free public API). Whatever image or video you upload
   to that folder shows up on the website automatically.

   ► To add photos/videos:
       On GitHub, open the  gallery/  folder → "Add file" →
       "Upload files" → drag your images (.jpg .png .webp .gif) and/or
       videos (.mp4 .webm .mov) → "Commit changes". Done.

   ► The ONLY setting you must get right is GITHUB_REPO below:
       it must be  "<your-github-username>/<repo-name>".
════════════════════════════════════════════════════════════════ */
window.JATHERE_CONFIG = {

  // Which repository's gallery/ folder to read. Format: "owner/repo".
  GITHUB_REPO: "johalputt/johal",

  // Branch your site is published from (usually "main").
  GITHUB_BRANCH: "main",

  // Folder (inside the repo) that holds the gallery files.
  GALLERY_PATH: "gallery",

  // Public maps link (used by the "Get Directions" buttons — no key needed).
  MAPS_URL: "https://maps.app.goo.gl/gxBKvo2gXEL1zDjD7"
};
