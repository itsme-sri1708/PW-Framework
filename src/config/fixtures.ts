
import {test as baseTest, Page} from '@playwright/test';
import { LoginPage } from '../pages/login';

type LoginFixture = {
    pagewithLogin : Page
}

export const test = baseTest.extend<LoginFixture>({
    pagewithLogin: async ({page}, use) =>{
        const loginpage = new LoginPage(page);
        await loginpage.UserLogin();
        await use(page);
    }
})