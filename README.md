# Adrian Nare — Personal Site

A terminal-themed personal site built with **Next.js (App Router) + React + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm run start    # run the production build
```

## Deploy

Deploys to **Vercel** with zero config (it's a Next.js app). For Netlify, use the Next.js
runtime / `@netlify/plugin-nextjs`.

## Structure

```
app/
  layout.jsx           root layout, fonts + metadata
  page.jsx             page composition
  globals.css          Tailwind + fonts + keyframes
components/
  Nav.jsx              sticky terminal nav
  Hero.jsx             $ whoami hero
  Now.jsx              current focus
  Work.jsx             projects (from data.js)
  Stack.jsx            tech stack
  About.jsx            bio + portrait
  Contact.jsx          copy-email + socials  ("use client")
  AccentPicker.jsx     accent-colour switcher ("use client", persists to localStorage)
data.js                projects / now / stack content (edit your content here)
```

## Notes

- **Portrait:** `About.jsx` currently hot-links the photo from the old Netlify site so it runs
  out of the box. Add your own image to `public/` (e.g. `public/portrait.jpg`) and set the `src`
  to `/portrait.jpg`. (Swap the `<img>` for `next/image` if you want Next's optimisation —
  `next.config.mjs` already whitelists the old domain.)
- **Accent colour:** the swatch picker (bottom-right) sets a `--accent` CSS variable used across
  the site. Change the default in `app/globals.css` (`:root { --accent: ... }`).
- **Fonts:** JetBrains Mono, Space Grotesk, Hanken Grotesk — loaded via Google Fonts in
  `app/layout.jsx`.
- The `Contact` and `AccentPicker` components are client components (they use React hooks);
  everything else renders on the server.
