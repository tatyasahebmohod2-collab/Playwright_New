//import {test} from '@playwright/test'
import {test} from "../fixture/loginFixture"

import POMManager from '../pomManager/pomManager'

test("demo web shop",async({page,registration,loginfixture})=>{

const pom=new POMManager(page)

//navigate to electronics page

await pom.getElectronicsPage().clickOnElectronics()
await pom.getElectronicsPage().verifyElectronicpage()

await pom.getCellPhonePage().clickOnCellPhone()
await pom.getCellPhonePage().verifyCellPhonePage()
//add the product in cart
await pom.getAddtocartPage().addtoCart()
//get the list of cart product
await pom.getCartListPage().shoppingCartList()
await pom.getCartListPage().verifyCartItem()
await pom.getCartListPage().selectCountry()
await pom.getCartListPage().getpostalcode()

await page.pause()

  
})
