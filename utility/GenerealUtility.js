
import data from "../testData/data.json"

export default class GeneralUtilities{


constructor(page){

    this.page=page
}

async navigation(){

    await this.page.goto(data.navigationUrl.url)
}


async clickOnElement(element){

    await element.click()
}

async FillTheTextBox(element,text){

    await element.fill(text)
}

async hover(element){
    await element.hover()
}

async selectOptionByText(locator, text) {
        await locator.selectOption({ label: text });
    }

}

