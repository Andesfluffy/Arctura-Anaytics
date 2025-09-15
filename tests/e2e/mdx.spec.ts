import { test, expect } from '@playwright/test'

test('mdx case study renders with heading and code block', async ({ page }) => {
  await page.goto('/case-studies/retail-forecasting')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/Retail demand/i)
  await expect(page.locator('pre code')).toBeVisible()
  // TOC sidebar exists when headings present
  await expect(page.getByText(/On this page/)).toBeVisible()
})

