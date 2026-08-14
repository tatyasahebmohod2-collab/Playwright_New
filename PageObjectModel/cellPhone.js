import GeneralUtilities from "../utility/GenerealUtility"
import { expect } from "@playwright/test";
import data from "../testData/data.json"


export default class CellPhone{

constructor(page){
this.generalUtilities=new GeneralUtilities(page)
this.page=page
this.cell=page.locator('//a[@href="/cell-phones"]').nth(4)

}


async clickOnCellPhone(){

await this.generalUtilities.clickOnElement(this.cell)

}

async verifyCellPhonePage(){
    await expect(this.page).toHaveURL(data.userData.cellPhonePageUrl)
}

}