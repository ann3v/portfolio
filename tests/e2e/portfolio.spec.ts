import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/work/kosvibe",
  "/work/ai-interview-simulator",
  "/work/smart-student-planner",
];

for (const route of routes) {
  test(`${route} renders accessible content and valid internal destinations`, async ({
    page,
    request,
  }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page).toHaveTitle(/Ardit Avdiu/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /\S.{30,}/,
    );

    const destinations = await page
      .locator("a[href]")
      .evaluateAll((links) =>
        Array.from(
          new Set(links.map((link) => (link as HTMLAnchorElement).href)),
        ).filter((href) => new URL(href).origin === window.location.origin),
      );
    for (const destination of destinations) {
      const result = await request.get(destination);
      expect(result.status(), `Broken internal link: ${destination}`).toBe(200);
      const hash = new URL(destination).hash.slice(1);
      if (hash) {
        const body = await result.text();
        const exists = await page.evaluate(
          ({ html, id }) =>
            Boolean(
              new DOMParser()
                .parseFromString(html, "text/html")
                .getElementById(id),
            ),
          { html: body, id: decodeURIComponent(hash) },
        );
        expect(exists, `Missing anchor: ${destination}`).toBe(true);
      }
    }

    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
  });

  test(`${route} fits phone, tablet, and desktop viewports`, async ({
    page,
  }) => {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );
      expect(overflow, `Horizontal overflow at ${width}px on ${route}`).toBe(
        false,
      );
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });
}

test("mobile navigation supports keyboard, Escape, and section selection", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open navigation" });
  const navigation = page.getByRole("navigation", { name: "Main navigation" });
  await expect(navigation).toBeHidden();
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(navigation).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    navigation.getByRole("link", { name: "Work", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(navigation).toBeHidden();
  await expect(menu).toBeFocused();
  await menu.click();
  await navigation.getByRole("link", { name: "Skills", exact: true }).click();
  await expect(page).toHaveURL(/#skills$/);
  await expect(navigation).toBeHidden();
});

test("keyboard users can skip directly to the main content", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: /skip to/i });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  const outline = await skip.evaluate(
    (element) => getComputedStyle(element).outlineStyle,
  );
  expect(outline).not.toBe("none");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
});

test("reduced motion disables smooth scrolling and sustained animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const motion = await page.evaluate(() => ({
    scrolling: getComputedStyle(document.documentElement).scrollBehavior,
    animated: Array.from(document.querySelectorAll("*")).filter((element) =>
      getComputedStyle(element)
        .animationDuration.split(",")
        .some((duration) => parseFloat(duration) > 0.01),
    ).length,
  }));
  expect(motion.scrolling).toBe("auto");
  expect(motion.animated).toBe(0);
});

test("public profiles use the supplied destinations and safe external links", async ({
  page,
}) => {
  await page.goto("/");
  for (const href of [
    "https://github.com/ann3v",
    "https://www.linkedin.com/in/ardit-avdiu-397975365/",
  ]) {
    const links = page.locator(`a[href="${href}"]`);
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  }
});

test("unknown pages return a useful 404 with a route home", async ({
  page,
}) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Back to selected work" }).click();
  await expect(page).toHaveURL(/\/#work$/);
});
