# Codams Web Deployment Guide

This document explains how to run the site locally and how deployments to GitHub Pages (and `codams.in`) work.

---

## 1. Local development

From the repo root (`codams-org.github.io`):

```bash
npm install       # first time only
npm run dev
```

Then open:

- `http://localhost:8080`

Vite uses `index.html` at the root as its template and loads the React app from:

```html
<script type="module" src="/src/main.tsx"></script>
```

---

## 2. Environment variables

Environment-dependent values (contact info, WhatsApp, address, etc.) are defined in `src/config.js` via Vite env variables:

```js
export const CONFIG = {
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "info@codams.in",
  CONTACT_PHONE_PRIMARY: import.meta.env.VITE_CONTACT_PHONE_PRIMARY || "+91-9013207895",
  WHATSAPP_PHONE: import.meta.env.VITE_WHATSAPP_PHONE || "919013207895",
  WHATSAPP_DEFAULT_MESSAGE:
    import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE ||
    "Hi, I'd like to know more about Codams.",
  COMPANY_ADDRESS:
    import.meta.env.VITE_COMPANY_ADDRESS || "Gurugram, Haryana, 122001",
  COMPANY_COUNTRY:
    import.meta.env.VITE_COMPANY_COUNTRY || "India",
};
```

### 2.1 Local env vars

Create a `.env` or `.env.local` file in the project root, for example:

```env
VITE_CONTACT_EMAIL="you@codams.in"
VITE_CONTACT_PHONE_PRIMARY="+91-9013207895"
VITE_WHATSAPP_PHONE="919013207895"
VITE_WHATSAPP_DEFAULT_MESSAGE="Hi, I'd like to know more about Codams."
VITE_COMPANY_ADDRESS="Gurugram, Haryana, 122001"
VITE_COMPANY_COUNTRY="India"
```

Restart `npm run dev` after changing env vars.

> Note: Only variables prefixed with `VITE_` are exposed to the client in Vite.

### 2.2 GitHub environment variables

In CI, env values come from a GitHub **environment** called `codams-web-env` (see workflow below). The following **Variables** must be set in that environment:

- `VITE_CONTACT_PHONE_PRIMARY`
- `VITE_CONTACT_EMAIL`
- `VITE_WHATSAPP_PHONE`
- `VITE_WHATSAPP_DEFAULT_MESSAGE`
- `VITE_COMPANY_ADDRESS`
- `VITE_COMPANY_COUNTRY`

These are injected into the build via the GitHub Actions workflow and end up in `import.meta.env` during `npm run build`.

---

## 3. Build

To create a production build locally:

```bash
npm run build
```

This produces an optimized site in `dist/` with:

- `dist/index.html` referencing built assets under `/assets/...`.
- Static assets (images, favicon, `og-image.svg`, etc.).

To preview the production build locally:

```bash
npm run preview
```

---

## 4. GitHub Actions deployment

Deployment is automated via `.github/workflows/deploy.yml`.

### 4.1 Trigger

The workflow runs on:

- Pushes to `main`.
- Manual trigger from the Actions tab (`workflow_dispatch`).

### 4.2 Build job

Key steps (simplified):

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    environment: codams-web-env
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - uses: actions/configure-pages@v4
      - run: npm ci
      - name: Load environment variables from environment
        # Reads vars.VITE_* and writes them to $GITHUB_ENV so Vite sees them
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
```

The "Load environment variables" step takes the `VITE_*` values from the `codams-web-env` environment and appends them to `$GITHUB_ENV`, making them available to `npm run build` as `import.meta.env.VITE_*`.

### 4.3 Deploy job

After the `build` job, the `deploy` job runs:

```yaml
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

      - name: Configure custom domain
        uses: actions/configure-pages@v4
        with:
          domain: codams.in
```

This publishes the built artifact to GitHub Pages and configures the custom domain `codams.in`.

---

## 5. GitHub Pages configuration

In the GitHub repo:

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.

The `deploy-pages` action then controls deployments.

---

## 6. Typical workflow for changes

1. Make code or content changes locally.
2. Optionally test locally:

   ```bash
   npm run dev
   # or
   npm run build && npm run preview
   ```

3. Commit and push to `main`:

   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

4. GitHub Actions will:

   - Install dependencies.
   - Load env vars from `codams-web-env`.
   - Run `npm run build`.
   - Deploy to GitHub Pages and `codams.in`.

You can monitor deployment in the **Actions** tab under the workflow named:

> `Deploy to GitHub Pages (with Secrets)`
