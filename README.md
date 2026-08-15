# Pactum IO

Server-rendered website for [Pactum IO, LLC](https://pactum.io) — the software engineering consulting practice of Matthew Swezey.

## Stack

- React 19
- Vite
- React Router (framework mode, SSR)
- Chakra UI
- TypeScript
- Node 24 (see `.nvmrc`)

SSR is on by default so crawlers get full HTML, per-route meta tags, JSON-LD, `sitemap.xml`, and `robots.txt`.

## Local development

```bash
nvm use
npm install
npm run dev
```

The app is at [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite + React Router SSR dev server |
| `npm run build` | Production client/server bundles and `.amplify-hosting` |
| `npm start` | Serve the production Node build locally |
| `npm run typecheck` | Generate route types and run `tsc` |

## Amplify Hosting

SSR deploys through AWS Amplify. `npm run build` writes an Amplify compute bundle to `.amplify-hosting/` with a Node 24 runtime. `amplify.yml` points artifacts at that directory and uses Node 24.

Connect the GitHub repo in Amplify Hosting as an SSR app. Do not set the artifact directory to `build/client`.

## Practice areas

AI, blockchain/crypto, full stack, DevOps, platform, cloud architecture, and SaaS bootstrapping.
