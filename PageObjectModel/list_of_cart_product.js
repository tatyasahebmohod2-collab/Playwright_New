import { expect } from "@playwright/test";
import data from "../testData/data.json"
import GeneralUtilities from "../utility/GenerealUtility";
import ExcelUtility from "../utility/ExcelUtility";


export default class CartList{


constructor(page){

     this.excelUtility = new ExcelUtility(); 
    this.generalutilities=new GeneralUtilities(page)
    this.page=page
    this.shoppingcart=page.getByText("Shopping cart").first()
    this.iteanTOVerify=page.locator(".product-name")
    this.country=page.locator("#CountryId")
    this.postalcode=page.locator("[id='ZipPostalCode']")

}

async shoppingCartList(){

    await this.generalutilities.clickOnElement(this.shoppingcart)
}

async verifyCartItem(){
    await expect (this.iteanTOVerify).toHaveText("Smartphone")
}


async selectCountry(){
    await this.generalutilities.selectOptionByText(this.country,data.userData.country)
}

                         
async getpostalcode(){

   const postalcode= await this.excelUtility.getPostalCode(data.userData.country)
    await this.generalutilities.FillTheTextBox(this.postalcode, postalcode)

}





}

