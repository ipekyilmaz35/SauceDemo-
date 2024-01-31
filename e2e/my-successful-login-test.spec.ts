import { test, expect } from '@playwright/test';

test('Successful login', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.waitForTimeout(3000);

    const url = page.url();
    expect(url).toContain('/inventory.html');

  await page.locator('#item_5_title_link').click();
});

