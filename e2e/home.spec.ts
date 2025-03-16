import { test, expect } from "@playwright/test";

test("トップページが正しくレンダリングされることを確認", async ({ page }) => {
  // トップページへアクセス
  await page.goto("/");

  // ヘッダータイトルのチェック
  const title = page.locator("h1").first();
  await expect(title).toBeVisible();
  await expect(title).toContainText("自分にぴったりの教材");

  // サブタイトルのチェック
  const subtitle = page.locator("p.text-xl.text-muted-foreground");
  await expect(subtitle).toBeVisible();
  await expect(subtitle).toContainText(
    "プログラミング学習に役立つリソースのコレクション"
  );
});
