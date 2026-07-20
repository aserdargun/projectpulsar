import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/en/",
  "/en/vision/",
  "/en/platform/",
  "/en/infrastructure/",
  "/en/use-cases/",
  "/en/trust/",
  "/en/roadmap/",
  "/tr/",
  "/tr/vision/",
  "/tr/platform/",
  "/tr/infrastructure/",
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

test("primary and infrastructure pages have no serious accessibility violations", async ({
  page
}) => {
  for (const route of ["/en/", "/tr/infrastructure/"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(
      results.violations.filter((violation) =>
        ["critical", "serious"].includes(violation.impact ?? "")
      )
    ).toEqual([]);
  }
});

test("Türkiye landed-cost calculator updates the dated TRY result", async ({
  page
}) => {
  await page.goto("/tr/infrastructure/");
  await expect(page.locator('time[datetime="2026-07-20"]')).toHaveText(
    "20 Temmuz 2026"
  );

  const grossTry = page.locator('[data-result="gross-try"]');
  const initial = await grossTry.textContent();
  await page.locator('[data-field="fx"]').fill("50");

  await expect(grossTry).not.toHaveText(initial ?? "");
  await expect(grossTry).toContainText("₺");
});

test("mobile layout does not overflow horizontally", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/tr/infrastructure/");
  const overflow = await page.evaluate(async () => {
    const clientWidth = document.documentElement.clientWidth;
    const offenders = [...document.querySelectorAll<HTMLElement>("body *")]
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          element: `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ""}${[...element.classList].map((name) => `.${name}`).join("")}`,
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width)
        };
      })
      .filter(
        ({ left, right, width }) =>
          width > 0 &&
          (left < -1 || right > document.documentElement.clientWidth + 1)
      )
      .slice(0, 12);

    window.scrollTo(10_000, 0);
    await new Promise(requestAnimationFrame);
    const reachableScrollX = window.scrollX;
    window.scrollTo(0, 0);

    return { reachableScrollX, offenders };
  });
  expect(overflow.offenders).toEqual([]);
  expect(overflow.reachableScrollX).toBe(0);
});
