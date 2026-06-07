import { test, expect } from '@playwright/test';

test('verify detailed ui components', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Capture Services section (Bento Grid)
  const servicesSection = page.locator('section:has-text("Nuestros Servicios")');
  if (await servicesSection.isVisible()) {
    await servicesSection.scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'verification/services_bento.png' });
  }

  // Capture Calculator section
  const calculatorSection = page.locator('#cotizador-express');
  if (await calculatorSection.isVisible()) {
    await calculatorSection.scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'verification/calculator_form.png' });

    // Check if it's the new multi-step version
    const step1 = page.locator('text=Paso 1: Ruta');
    if (await step1.isVisible()) {
       console.log('Multi-step calculator detected');
    }
  }
});
