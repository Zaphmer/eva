# Happy Birthday, Eva 🎂

A cute, playful, interactive birthday website. React + TypeScript + Vite + Framer Motion.
No backend, no database — just a static site you can host anywhere (built for GitHub Pages).

## What's in here

- **Intro** — night sky, drifting clouds, a "definitely not a surprise" button
- **Playground** — clickable stars, poppable balloons, an envelope, a gift box, catchable hearts, blooming flowers
- **Cake** — blow out the candles, confetti, auto-scrolls into the finale
- **Gallery** — scrapbook-style polaroids with a click-to-enlarge lightbox and rotating captions
- **Finale** — night sky, a moon with hidden faces, a secret constellation, a cat in the bushes, optional music
- **Ending** — your closing lines
- A duck 🦆 that wanders across the screen sometimes, and a small achievement-toast system

## 1. Install

You'll need [Node.js](https://nodejs.org) 18+ installed. Then, in this folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

This prints a `localhost` URL — open it in your browser. The page hot-reloads as you edit files.

## 3. Customize it

Almost everything you'd want to change lives in **`src/config.ts`**:

- `site` — the recipient's name, intro text, button label, closing lines
- `loadingJokes` / `tooltipJokes` — the little one-liners sprinkled around
- `achievements` — the toast text for each unlockable
- `galleryNotes` — the short captions that appear under photos
- `galleryPhotos` — **your actual photos.** See below.
- `playlist` — background music for the finale. See below.

### Adding your own photos

1. Drop your image files into `public/photos/` (e.g. `us-at-the-beach.jpg`).
2. In `src/config.ts`, add them to the `galleryPhotos` array:

```ts
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/photos/us-at-the-beach.jpg", caption: "We definitely weren't lost." },
  { src: "/photos/coffee-shop.jpg" }, // caption is optional — a random note is used instead
  // ...as many as you want, 20-40 works great
];
```

Delete the `placeholder-*.svg` entries once you've added real photos.

### Adding music

1. Drop an mp3 into `public/music/` (e.g. `our-song.mp3`).
2. In `src/config.ts`:

```ts
export const playlist = [
  { title: "Our Song", src: "/music/our-song.mp3" },
];
```

Music only plays on the Finale section, fades in gently, and includes a mute button.
If the browser blocks autoplay, a "tap for music" button appears instead — that's expected
browser behavior, not a bug.

## 4. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the final static site. `npm run preview` lets you check
the production build locally before deploying.

## 5. Deploy to GitHub Pages

This project is pre-configured for a repo named `birthday-card`, deployed at
`https://<your-username>.github.io/birthday-card/`.

1. Push this project to a GitHub repo named `birthday-card` (or update `base` in
   `vite.config.ts` to match whatever your repo is actually called — it needs to be
   `/your-repo-name/`).
2. Build it: `npm run build`
3. Deploy the `dist/` folder to the `gh-pages` branch. The easiest way is the
   [`gh-pages` package](https://www.npmjs.com/package/gh-pages):

   ```bash
   npm install --save-dev gh-pages
   ```

   Then add this to `package.json` under `"scripts"`:

   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

   Then run:

   ```bash
   npm run deploy
   ```

4. In your GitHub repo settings → Pages, set the source to the `gh-pages` branch.

Your site will be live at `https://<your-username>.github.io/birthday-card/` within a
couple of minutes.

### Deploying somewhere else instead

If you'd rather use Vercel, Netlify, or a custom domain, set `base: "/"` in
`vite.config.ts` and drag-and-drop (or connect the repo to) your host of choice —
the `dist/` folder is a fully static site that works anywhere.

## Project structure

```
src/
  config.ts              ← edit this for names, jokes, photos, music
  App.tsx                ← wires all the sections together
  index.css              ← design tokens (colors, fonts) live here
  hooks/
    useAchievements.tsx   ← the toast/achievement system
  components/
    ParticleField.tsx     ← ambient stars/sparkles/petals background
    DuckCompanion.tsx     ← the wandering duck
    playground/           ← stars, balloons, envelope, gift, hearts, flowers
    gallery/               ← polaroid card + lightbox
    finale/                ← moon, constellation, cat, music player
  sections/
    Intro.tsx, Playground.tsx, Cake.tsx, Gallery.tsx, Finale.tsx, Ending.tsx
```

Have fun, and happy birthday to Eva. 🎈
