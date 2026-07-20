# Project PULSAR

A bilingual public vision for a sovereign, trusted and adaptive AI runtime.

Project PULSAR describes a durable layer between applications and a changing
ecosystem of models, knowledge sources and tools. The site is intentionally
vendor-neutral and does not claim that the envisioned platform is already
deployed.

## Local development

Requirements:

- Node.js 22.12 or newer in the Node 22 release line
- npm 10 or newer

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run check
npm test
npx playwright install chromium
npm run test:e2e
```

## Content structure

English and Turkish pages live under `src/pages/en` and `src/pages/tr`.
Each Markdown page must provide:

- `lang`
- `translationKey`
- `slug`
- `title`
- `description`
- `navLabel`
- `order`
- `draft`

`npm run test:content` requires each `translationKey` to exist in both
languages with the same slug and order.

## Public-content boundary

The repository contains only rewritten, public-facing content. Source planning
notes, internal diagrams, named internal systems, infrastructure quantities,
procurement details and unverified delivery claims must never be copied into
this repository. `npm run test:privacy` checks the source and generated output
for known restricted references.

## Deployment

Pushes to `main` run the quality workflow. The Azure deployment workflow
becomes active when the repository secret
`AZURE_STATIC_WEB_APPS_API_TOKEN` is configured.

See [docs/AZURE_DEPLOYMENT.md](docs/AZURE_DEPLOYMENT.md) for the production
resource, Front Door and DNS runbook.

## License

Code is available under the [MIT License](LICENSE). Website prose, the Project
PULSAR name and visual identity are governed by [NOTICE](NOTICE).
