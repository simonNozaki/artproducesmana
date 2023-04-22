import { test, expect } from "@playwright/test";

test("トップページが開ける", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".title")).toHaveText("CastAnArt");
});

test.describe("トップページ上の操作", () => {
  test("画像を押して拡大できる", async ({ page }) => {
    await page.goto("/");
    // 画像をクリックしてモーダルを開く
    page.locator("#landimage").click();
    await expect(page.locator(".dialog-panel")).toBeVisible();
  });

  test("次に進むボタンで画像が切替わる", async ({ page }) => {
    await page.goto("/");
    const previousImageTitle = await page
      .locator(".land-image-label")
      .textContent();
    // 次に進むボタンをクリック
    page.locator("#art-forward-button").click();
    const nextImageTitle = await page
      .locator(".land-image-label")
      .textContent();
    expect(previousImageTitle === nextImageTitle).toBeFalsy();
  });
});
