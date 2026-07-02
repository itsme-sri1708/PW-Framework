
import { Page } from '@playwright/test';
import { CommonPage } from './common';
import { expect } from '@playwright/test';

export class ClaimsPage extends CommonPage {
    page: Page;
    constructor (page: Page) {
        super(page);
        this.page = page;

    }

    async claimsPageNavigation (headers: string[]) {
         await this.page.locator('rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })
        for (const header of headers) {
            await expect(this.page.locator('thead th').getByText(header)).toBeVisible()

        }


    }
    
}