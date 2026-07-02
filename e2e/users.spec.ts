
import { test } from "../src/config/fixtures";
import { UsersPage } from "../src/pages/users";

test.describe('Users  Page Validation', () => {
    let userspage: UsersPage;
    test.beforeEach(async ({ pagewithLogin }) => {
        userspage = new UsersPage(pagewithLogin)

    })

    test('TC007:Verify validation when required fields are empty', async ({ }) => {

        await userspage.navigatetoDashboard('Administrator', 'Users');
        await userspage.errorMessageValidation();

    })

    test('TC006:Verify user creation with valid details',async({})=>{

        await userspage.navigatetoDashboard('Administrator', 'Users');
        await userspage.createNewUser();


    })




})