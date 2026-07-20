import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/en/",
  "/en/vision/",
  "/en/platform/",
  "/en/use-cases/",
  "/en/trust/",
  "/en/roadmap/",
  "/tr/",
  "/tr/vision/",
  "/tr/platform/",
  "/tr/use-cases/",
  "/tr/trust/",
  "/tr/roadmap/"
];

test("all localized routes render with canonical metadata", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`https://projectpulsar\\.org${route.replaceAll("/", "\\/")}`)
    );
  }
});

test("language switch preserves the equivalent page", async ({ page }) => {
  await page.goto("/en/platform/");
  await page.getByRole("link", { name: /Turkish/i }).click();
  await expect(page).toHaveURL(/\/tr\/platform\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "tr");
});

test("theme selection is persisted", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/en/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Change color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("primary page has no serious accessibility violations", async ({ page }) => {
  await page.goto("/en/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();

  expect(
    results.violations.filter((violation) =>
      ["critical", "serious"].includes(violation.impact ?? "")
    )
  ).toEqual([]);
});

test("mobile layout does not overflow horizontally", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/tr/");
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
});
