
import { test } from "../src/config/fixtures";
import { claimsPageHeader } from "../src/constants/constants";
import { ClaimsPage } from "../src/pages/claims";

test.describe('Claims Page Validation',()=>{
    let claimspage: ClaimsPage;
    test.beforeEach(async ({pagewithLogin})=>{
        claimspage = new ClaimsPage(pagewithLogin)
        
    })

    test('TC009-Verify Claims page navigation',async ({})=>{
        await claimspage.navigatetoDashboard('Claims');
        await claimspage.claimHomePage();

    })


    test('Verify Claims page Header Validaion', async ({})=>{
        
        await claimspage.claimsPageNavigation(claimsPageHeader);


    })

})