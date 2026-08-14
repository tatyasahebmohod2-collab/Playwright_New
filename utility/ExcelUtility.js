import exceljs from "exceljs";
import data from "../testData/data.json"


export default class ExcelUtility {


async getPostalCode(country){

                    const workbook=new exceljs.Workbook()
                    await workbook.xlsx.readFile("./testData/PostalCodes.xlsx")
                   const sheet1 =  workbook.getWorksheet("Sheet")


                   for (let i = 2; i <= sheet1.rowCount; i++) {

                    if(sheet1.getRow(i).getCell(1).value===country){
                        return sheet1.getRow(i).getCell(2).value
                    }


}
return null

}







}