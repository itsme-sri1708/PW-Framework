import { Locator, Page, expect } from "@playwright/test";

export class GenricUtilis { 
    page: Page;
    constructor(page: Page) { 
        this.page = page;

    }
    async elementIsVisible(element: Locator, timeout: number) {
        await element.waitFor({ state: 'visible', timeout: 60000 })
        
    }

    async tobeVisible(locator: Locator) { 
        await expect(locator).toBeVisible()

   }

   async click (locator: Locator) {
        await locator.click()
   }

    
}