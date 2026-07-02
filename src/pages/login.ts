import { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import process from 'node:process';



export class LoginPage {
    page: Page;
    baseURL: string;
    username: string;
    password: string;
    constructor(page: Page) {
       this.page = page;
       this.baseURL = process.env.BASE_URL || ''
       this.username = process.env.USER_NAME || ''
       this.password = process.env.PASS_WORD || ''
    }

    async UserLogin() {
        await this.page.goto(`${this.baseURL}/Login`);
        await this.page.getByRole('textbox', { name: 'Username' }).fill(this.username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(this.password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        await this.page.waitForURL('https://testcms.reco-claims.ca')
        await this.page.locator('[class="rz-menu rz-profile-menu"]').waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.locator('[class="rz-menu rz-profile-menu"]')).toBeVisible()
    }

}