# February Mastermind Landing Page

One-page landing site for:

- **FEBRUARY MASTERMIND**
- **State of the Art AI Agent Workflows**
- Tue Feb 24, 19:00 @ Vila Galé (Lisbon)

## Stack

- Vite + React
- Tailwind CSS (via `@tailwindcss/vite`)
- Minimal custom CSS for gradients/noise/shine/reveal animations
- Static `.ics` calendar download

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173`.

## Production build

```bash
pnpm build
pnpm preview
```

## Deploy (GitHub Pages)

This repo includes `.github/workflows/deploy-pages.yml`.

1. Push to `main`
2. In repo settings, set **Pages source** to **GitHub Actions**
3. Workflow will publish `dist/`

## Live URL

- https://norbertdragan.github.io/february-mastermind/

## Placeholders to update before promoting

- RSVP URL: `https://forms.gle/TODO-February-Mastermind`
- Venue address line: `TODO: exact street address line for Vila Galé.`
- Speaker links: `x.com/TODO`, `instagram.com/TODO`, `github.com/TODO`
- WhatsApp/Telegram links: `chat.whatsapp.com/TODO`, `t.me/TODO`
- Contact email: `hello@TODO.com`
- Canonical and OG URLs in `index.html`

## Files of interest

- `src/App.jsx` — full page content/sections/components
- `src/index.css` — Tailwind import + custom visual styles
- `public/february-mastermind.ics` — Add-to-calendar file
- `index.html` — SEO, social tags, Event schema
