# Zero-cost Azure deployment runbook

This runbook publishes the static `dist` output with the Azure Static Web Apps
Free plan. It deliberately avoids Azure Front Door, Azure DNS and other
metered Azure resources.

## Architecture

| Component | Service |
| --- | --- |
| Source and CI/CD | GitHub Actions |
| Hosting | Azure Static Web Apps Free |
| TLS | Free Azure-managed certificate |
| Primary DNS | Registrar DNS or a free DNS provider |
| Alias-domain redirects | IHS URL forwarding |

The Free plan supports two custom domains per app and has no SLA. This project
uses those slots for `projectpulsar.org` and `www.projectpulsar.org`. The
`.org.tr` and `.com.tr` domains must use registrar-level permanent URL
forwarding to the canonical `.org` address.

## 1. Static Web App

The provisioned app is:

- resource group: `rg-projectpulsar-prod`
- resource: `swa-projectpulsar-prod`
- plan: Free
- generated hostname: `green-grass-08ada9c03.7.azurestaticapps.net`
- source: `aserdargun/projectpulsar`, branch `main`
- app location: `/`
- API location: empty
- output location: `dist`

GitHub Actions stores the Azure deployment token as a repository secret. Never
commit the token or Azure credentials.

## 2. Primary domain

Add `projectpulsar.org` and `www.projectpulsar.org` under the Static Web App's
**Custom domains** page and use Azure-managed certificates.

For `www`, create this record in the authoritative DNS service:

| Type | Name | Target | TTL |
| --- | --- | --- | --- |
| CNAME | `www` | `green-grass-08ada9c03.7.azurestaticapps.net` | 300 |

An apex domain cannot use a conventional CNAME record. If IHS DNS offers
ALIAS/ANAME or CNAME flattening, point `projectpulsar.org` to the generated
Azure hostname. Otherwise use a free DNS provider with apex flattening, or make
`www.projectpulsar.org` canonical and use IHS URL forwarding for the apex.

Add the TXT validation record displayed by Azure before starting certificate
validation. Do not remove it while the custom domain is in use.

## 3. IHS alias-domain forwarding

IHS provides an **Alan Adı URL Yönlendirme** operation in its domain control
panel. Configure permanent, unmasked forwarding:

- `projectpulsar.org.tr` → `https://projectpulsar.org`
- `www.projectpulsar.org.tr` → `https://projectpulsar.org`
- `projectpulsar.com.tr` → `https://projectpulsar.org`
- `www.projectpulsar.com.tr` → `https://projectpulsar.org`

Choose HTTP 301 when IHS offers the status-code option. Preserve paths and
query strings if the forwarding feature provides that setting. Confirm with
IHS support whether HTTPS forwarding certificates are included before relying
on these aliases publicly.

## 4. Verification

Verify the free Azure app first:

```bash
curl -I https://green-grass-08ada9c03.7.azurestaticapps.net/
curl -I https://green-grass-08ada9c03.7.azurestaticapps.net/en/
```

After DNS and certificates are ready:

```bash
curl -I https://projectpulsar.org/
curl -I https://projectpulsar.org/en/
curl -I https://www.projectpulsar.org/en/
curl -I 'https://projectpulsar.org.tr/tr/vision/?source=domain-test'
curl -I https://projectpulsar.org/robots.txt
curl -I https://projectpulsar.org/sitemap-index.xml
```

Acceptance:

- The Static Web App is on the Free plan.
- `/` redirects to `/en/`, and localized pages return HTTPS 200.
- Both primary hostnames have valid Azure-managed certificates.
- Alias domains return 301 to the canonical hostname.
- Canonical and alternate-language metadata use `projectpulsar.org`.
- The final GitHub Actions deployment is green.
