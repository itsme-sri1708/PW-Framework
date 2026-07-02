import { Locator, Page, expect } from "@playwright/test";
import { LoginPage } from "./login";
import { CommonPage } from "./common";
import { GenricUtilis } from "../utilis/genricUtilis";

export class RolesPage extends CommonPage {
     page: Page;
     inputBox: Locator;
     saveBtn: Locator;
     cancelBtn: Locator;
     constructor(page: Page) {
          super(page);
          this.page = page;
          this.inputBox = this.page.locator('[name="Name"]')
          this.saveBtn = this.page.getByText('Save', { exact: true })
          this.cancelBtn = this.page.getByText('Cancel', { exact: true })
     }

     async verifyAddApplication() {
          await this.page.getByText('Add', { exact: true }).click();
          await expect(this.page.getByText('Add Application Role', { exact: true })).toBeVisible();
          await expect(this.inputBox).toBeVisible();
          await expect(this.saveBtn).toBeVisible();
          await expect(this.cancelBtn).toBeVisible();
     }

     async createNewRole() {

          const num = await this.generateRandomNumber();
          await this.inputBox.fill(`Test_${num}`);
          await this.saveBtn.click();

     
     }

}
