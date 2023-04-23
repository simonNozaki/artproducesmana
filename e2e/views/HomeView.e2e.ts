import { test, expect } from "@playwright/test";

test.describe("画面遷移、表示", () => {
  test("トップページが開ける", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".title")).toHaveText("CastAnArt");
  });

  test("ハンバーガーメニューを開ける", async ({ page }) => {
    await page.goto("/");
    await page.locator(".global-navigation-button").click();
    await expect(page.locator(".navigation-side-bar")).toBeVisible();
  });

  test("aboutに遷移できる", async ({ page }) => {
    await page.goto("/");
    // グローバルメニューからaboutに遷移する
    await page.locator(".global-navigation-button").click();
    await page.getByText("CastAnArtとは").click();
    await expect(page).toHaveURL(/.*\/about/);
  });
});

test.describe("カードリスト", () => {
  test("アコーディオンを開ける", async ({ page }) => {
    await page.goto("/");
    await page.locator(".global-navigation-button").click();
    await page.getByText("収録カード").click();
    await page.getByText("土地").click();
    // 土地のリストがアコーディオンで出現する
    await expect(page.locator(".card-list")).toBeVisible();
  });
});

test.describe("トップページ上の操作", () => {
  test("画像を押して拡大できる", async ({ page }) => {
    await page.goto("/");
    // 画像をクリックしてモーダルを開く
    await page.locator("#landimage").click();
    await expect(page.locator(".dialog-panel")).toBeVisible();
  });

  test("モーダルを開いて閉じる", async ({ page }) => {
    await page.goto("/");
    // 画像をクリックしてモーダルを開く
    await page.locator("#landimage").click();
    await page.locator(".modal-close").click();
  });

  test("次に進むボタンで画像が切替わる", async ({ page }) => {
    await page.goto("/");
    const previousImageTitle = await page
      .locator(".land-image-label")
      .textContent();
    // 次に進むボタンをクリック
    await page.locator(".art-forward-button").click();
    const nextImageTitle = await page
      .locator(".land-image-label")
      .textContent();
    expect(previousImageTitle === nextImageTitle).toBeFalsy();
  });
});
