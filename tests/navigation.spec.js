import { test, expect } from '@playwright/test';

test.describe('Site Navigation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Home page shows "Home" h1, correct title, and URL', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('Home');
        await expect(page).toHaveTitle('Home'); 
        await expect(page).toHaveURL('/'); 
    });

    test('Navigating to About page updates URL, h1, and title', async ({ page }) => {
        await page.locator('text=About').click(); 
        await expect(page).toHaveURL(/.*about\.html/);
        await expect(page.locator('h1')).toHaveText('About');
        await expect(page).toHaveTitle('About'); 
    });

    test('Navigating to Contact page updates URL, h1, and title', async ({ page }) => {
        await page.locator('text=Contact').click(); 
        await expect(page).toHaveURL(/.*contact\.html/);
        await expect(page.locator('h1')).toHaveText('Contact');
        await expect(page).toHaveTitle('Contact'); 
    });
});