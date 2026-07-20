# Azure production deployment runbook

This runbook publishes the static `dist` output from GitHub and makes
`https://projectpulsar.org` the canonical production address.

## Resource names

| Resource | Name |
| --- | --- |
| Resource group | `rg-projectpulsar-prod` |
| Static Web App | `swa-projectpulsar-prod` |
| Front Door profile | `afd-projectpulsar-prod` |
| Front Door endpoint | `projectpulsar-prod` or the next available equivalent |

Use one production subscription and place the resource group in a region close
to the operating team. The static content itself is globally distributed.

## 1. Create the Static Web App

1. In Azure Portal, create **Static Web App**.
2. Select the Standard hosting plan.
3. Set deployment source to GitHub.
4. Authorize GitHub and select:
   - organization/account: `aserdargun`
   - repository: `projectpulsar`
   - branch: `main`
5. Build configuration:
   - preset: Custom
   - app location: `/`
   - API location: leave empty
   - output location: `dist`
6. Complete creation and wait for the generated hostname.
7. Open **Manage deployment token**, copy the token and add it to GitHub:
   **Settings → Secrets and variables → Actions → New repository secret**
   with the name `AZURE_STATIC_WEB_APPS_API_TOKEN`.
8. Run **Deploy to Azure Static Web Apps** from GitHub Actions and verify the
   generated hostname.

The repository already contains the deployment workflow. If Azure creates a
second workflow, remove the generated duplicate after confirming the existing
workflow deploys successfully.

## 2. Create Azure DNS zones

Create one Azure DNS zone for each domain:

- `projectpulsar.org`
- `projectpulsar.org.tr`
- `projectpulsar.com.tr`

Copy the four authoritative Azure nameservers shown for each zone. At the
domain registrar, replace the current nameservers with the matching Azure
nameservers. Do not copy nameservers between zones.

Before changing nameservers, reproduce any existing mail or verification
records in the Azure DNS zone. Start public DNS records with TTL 300.

## 3. Create Azure Front Door

1. Create an Azure Front Door Standard profile named
   `afd-projectpulsar-prod`.
2. Create an endpoint and an origin group.
3. Add the generated Static Web Apps hostname as the origin.
4. Set origin host header to the same Static Web Apps hostname.
5. Use HTTPS port 443 and enable certificate-name validation.
6. Use `/` as the health probe path.
7. Create a route that accepts HTTPS and forwards to the origin group.

## 4. Add and validate custom domains

Add these Front Door custom domains with Azure-managed certificates:

- `projectpulsar.org`
- `www.projectpulsar.org`
- `projectpulsar.org.tr`
- `www.projectpulsar.org.tr`
- `projectpulsar.com.tr`
- `www.projectpulsar.com.tr`

For each hostname:

1. Add the `_dnsauth` TXT record Front Door provides.
2. For each apex hostname, create an Azure DNS alias record pointing to the
   Front Door endpoint.
3. For each `www` hostname, create a CNAME pointing to the Front Door endpoint.
4. Wait until domain validation and the managed certificate both show ready.

## 5. Route and redirect behavior

Associate only `projectpulsar.org` with the origin route.

Create a Front Door rule set with permanent redirects that preserve path and
query:

- HTTP requests → the same URL on HTTPS.
- `www.projectpulsar.org` → `https://projectpulsar.org`.
- Both `.org.tr` hosts → `https://projectpulsar.org`.
- Both `.com.tr` hosts → `https://projectpulsar.org`.

Use 301 for hostname canonicalization. Test a nested URL and query string, for
example:

```text
https://projectpulsar.com.tr/tr/vision/?source=domain-test
```

It must become:

```text
https://projectpulsar.org/tr/vision/?source=domain-test
```

## 6. Optional origin lock

`public/staticwebapp.config.json` already lists the allowed forwarded hosts.
After Front Door exists, copy its immutable Front Door ID and add this block
under `forwardingGateway`:

```json
"requiredHeaders": {
  "X-Azure-FDID": "<actual-front-door-id>"
}
```

Commit and deploy that value only after Front Door health probes and the
primary domain work. This prevents direct access through the generated origin
hostname. Do not add a placeholder value.

## 7. Production verification

Verify:

```bash
curl -I https://projectpulsar.org/en/
curl -I https://projectpulsar.org/
curl -I https://www.projectpulsar.org/en/
curl -I https://projectpulsar.org.tr/tr/
curl -I https://projectpulsar.com.tr/tr/vision/?source=domain-test
curl -I https://projectpulsar.org/robots.txt
curl -I https://projectpulsar.org/sitemap-index.xml
```

Acceptance:

- The primary page returns HTTPS 200.
- `/` redirects to `/en/`.
- All five aliases return 301 to the canonical hostname.
- Paths and query strings survive hostname redirects.
- Managed certificates are valid for all six hostnames.
- Canonical and alternate-language metadata use `projectpulsar.org`.
- The final GitHub Actions deployment is green.

After stable DNS propagation, raise public record TTL from 300 to 3600.
