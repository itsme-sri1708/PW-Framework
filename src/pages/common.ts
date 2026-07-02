import { Page } from '@playwright/test';
import { RolesPage } from './roles';
import { GenricUtilis } from '../utilis/genricUtilis';

export class CommonPage extends GenricUtilis{
    page: Page
    constructor(page: Page) {
    super   (page);
        this.page = page;
    }

    async navigatetoDashboard(parentMenu: string, childMenu?: string) {
        await this.page.getByText(parentMenu, { exact: true }).click();
        if (childMenu) {
            await this.page.getByRole('link', { name: childMenu }).waitFor({ state: 'visible', timeout: 60000 })
            await this.page.getByRole('link', { name: childMenu }).click();
        }

    }

    async generateRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 1000);
        return randomNumber;
    }
}