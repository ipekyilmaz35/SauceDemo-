import { test, expect } from '@playwright/test';

test('Failed login', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'sauce');
  await page.click('#login-button');

  await page.waitForTimeout(3000);
  await page.isVisible('h3[data-test="error"]')
});

