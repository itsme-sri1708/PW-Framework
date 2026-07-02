
import { Page } from '@playwright/test';
import { CommonPage } from './common';
import { expect } from '@playwright/test';

export class ClaimsPage extends CommonPage {
    page: Page;
    constructor (page: Page) {
        super(page);
        this.page = page;

    }

    async claimHomePage () {
        await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })
        await expect(this.page.getByText('Auto', { exact: true })).toBeVisible();
        await this.page.getByText('New Claim').click();
        await expect(this.page.getByText('New Claim')).toBeVisible();
        await this.page.getByRole('link', { name: 'New Claim' }).click()
    }


    async claimsPageNavigation (headers: string[]) {
         await this.page.locator('rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })
        for (const header of headers) {
            await expect(this.page.locator('thead th').getByText(header)).toBeVisible()

        }


    }
    
}