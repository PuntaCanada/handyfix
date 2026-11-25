const {test,expect}=require('@playwright/test');
test('real browser functionality',async({page})=>{await page.goto('file://'+require('path').resolve('public/index.html'));await page.locator('#search').fill('Android'); await expect(page.locator('article:visible')).toHaveCount(1); await page.locator('#search').fill('zzzz'); await expect(page.locator('#empty')).toBeVisible();});
