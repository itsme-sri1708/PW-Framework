
import { LoginPage } from '../src/pages/login';
import { CommonPage } from '../src/pages/common';
import { test } from '../src/config/fixtures';
import { RolesPage } from '../src/pages/roles';

test.describe('Roles Page Validation', () => {
    let rolespage: RolesPage;
    test.beforeEach(async ({pagewithLogin}) => {
        rolespage = new RolesPage(pagewithLogin);
    })


    test('TC001 & 002:Verify Roles page loads successfully', async () => {

        // const loginpage = new LoginPage(pagewithLogin);
        // loginpage.UserLogin();  

        //const rolespage = new CommonPage(pagewithLogin);
        await rolespage.navigatetoDashboard('Administrator','Roles');
        await rolespage.verifyAddApplication();
    })

    test('TC003:Verify user can open Add Application Role popup',async({})=>{
        await rolespage.navigatetoDashboard('Administrator','Roles');
        await rolespage.verifyAddApplication();
        await rolespage.createNewRole()


    })
})