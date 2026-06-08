import { test, expect } from '@playwright/test';

test('verify design system and ui fixes', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Verify main background (should be hsl(var(--background)) which is dark)
  const body = page.locator('body');
  await expect(body).toHaveCSS('background-color', 'rgb(9, 9, 11)'); // #09090b mapped from variables

  // Verify OptimizedHeader doesn't have drop-shadow classes (checked via inspection or screenshots)
  await page.screenshot({ path: 'verification/audit_header_fix.png' });

  // Verify Hero section
  await page.screenshot({ path: 'verification/audit_hero_fix.png' });
});

test('verify cotizador page', async ({ page }) => {
  await page.goto('http://localhost:3000/cotizar/express');
  await expect(page).toHaveTitle(/Cotizador/);
  await page.screenshot({ path: 'verification/audit_cotizador_fix.png' });
});
