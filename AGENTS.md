# AGENTS.md

## Commands

```bash
pnpm dev      # Start dev server (Vite)
pnpm build    # Production build to dist/
pnpm lint     # ESLint check
pnpm deploy   # Build + deploy to GitHub Pages
```

## Stack

- React 19 + Vite 6 + SWC (no Babel)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (not PostCSS)
- pnpm (required, see `packageManager` field)

## Path Alias

`@/*` maps to `./src/*` (configured in `jsconfig.json` and resolved by Vite bundler)

## Deployment

- `vite.config.js` sets `base: '/Portfolio-Marco/'` for GitHub Pages
- Static assets in `public/` must use absolute paths starting with `/`

## Structure

```
src/
  main.jsx        # App entrypoint
  App.jsx         # Root component (single-page layout)
  components/     # All UI components (no routing)
  hooks/          # Custom hooks (useScrollFade)
  css/            # Additional stylesheets
public/           # Static assets (images, CV PDF)
```

## Notes

- No tests configured
- No TypeScript (JSX only, types via `@types/react` for editor hints)
- ESLint ignores uppercase/underscore-prefixed unused vars
