
import { expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./common";
import { GenricUtilis } from "../utilis/genricUtilis";


export class UsersPage extends CommonPage {
    page: Page;
    saveBtn: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.saveBtn = this.page.getByRole('button', { name: 'save Save' })
    }

    async errorMessageValidation() {
        await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })
        await this.page.getByRole('heading', { name: 'Users' }).waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.getByRole('heading', { name: 'Users' })).toBeVisible();
        await this.page.getByText('Add', { exact: true }).click();
        await expect(this.page.getByText('Add Application User', { exact: true })).toBeVisible();
        await this.saveBtn.click()
        await expect(this.page.getByText('Password is required', { exact: true })).toBeVisible();
    }

    async createNewUser() {
        await this.elementIsVisible(this.page.getByRole('heading', { name: 'Users' }), 60000)
        //await this.page.getByRole('heading', { name: 'Users' }).waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.getByRole('heading', { name: 'Users' })).toBeVisible();
        await this.page.getByText('Add', { exact: true }).click();
        await expect(this.page.getByText('Add Application User', { exact: true })).toBeVisible();

        await this.page.locator('input[name="Email"]').fill('test@example.com');
        await this.page.locator('input[name="UserFullName"]').fill('Test User');
        await this.page.locator('[class="rz-dropdown valid rz-state-empty"]').click()
        await this.page.locator('[class="rz-dropdown-items rz-dropdown-list"]').last().waitFor({ state: 'visible', timeout: 60000 })

        await this.page.locator('input[name="Password"]').fill('Test@123');
        await this.page.locator('input[name="ConfirmPassword"]').fill('Test@123');
        await this.saveBtn.click()
    }



}