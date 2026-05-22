# Muhammad Mahad Portfolio (Vite + React)

This repository contains the source code for the portfolio hosted at:

- https://muhammadmahad0002.github.io/

## Local development

### 1) Install dependencies

```bash
npm install
```

### 2) Start the development server

```bash
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

The production files are generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

Deployment is handled by the workflow in:

- `.github/workflows/deploy.yml`

How deployment works:

1. Push to `main`
2. GitHub Actions installs dependencies and runs `npm run build`
3. The workflow publishes `dist/` to GitHub Pages
4. `dist/index.html` is copied to `dist/404.html` to support SPA fallback behavior

## Scripts

- `npm run dev` – run local dev server
- `npm run build` – build for production
- `npm run preview` – preview production build
- `npm run lint` – run ESLint
