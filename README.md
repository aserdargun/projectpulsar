# Project PULSAR

A bilingual, independent R&D initiative for secure, sustainable and locally
operated open-weight language models.

Project PULSAR publishes a vendor-neutral runtime vision, open reference
architecture, governed Unsloth LoRA/QLoRA research path, evaluation discipline
and dated planning estimates for local AI infrastructure. It does not claim
that the envisioned platform is already deployed.

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

The repository contains only rewritten, public-facing content. Public reference
architectures and dated planning estimates are allowed when their assumptions,
sources and uncertainty are visible. Source planning notes, internal diagrams,
named internal systems, confidential specifications, actual supplier quotes and
unverified delivery claims must never be copied into this repository.
`npm run test:privacy` checks the source and generated output for known
restricted references.

## Deployment

Pushes to `main` run the quality and Azure deployment workflows. The deployment
token is stored only as a GitHub Actions repository secret.

See [docs/AZURE_DEPLOYMENT.md](docs/AZURE_DEPLOYMENT.md) for the production
Azure Static Web Apps Free and IHS domain runbook.

## License

Code is available under the [MIT License](LICENSE). Website prose, the Project
PULSAR name and visual identity are governed by [NOTICE](NOTICE).
