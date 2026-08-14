
import {test as base} from "@playwright/test"
import POMManager from "../pomManager/pomManager"

let email;
export  const test=base.extend({


registration : async({page},use)=>{

       const pom=new POMManager(page)
        let registration=    pom.getUserRegistrationPage()
        await pom.getWelcomePage().navigateToHomePage()
        await pom.getWelcomePage().clickOnRegistration()
           email = `user${Date.now()}@test.com`;
     await     registration.clickOnGender()
     await registration.EnterFirstName()
     await registration.EnterLastName()
     await registration.EnterEmail(email)
     await registration.EnterPassword()
     await registration.EnterConfirmPassword()
     await registration.clickOnRegisterBtn()

     //assertion to verify the registration succefull
     await registration.verifyRegistrationSuccesful()
     await registration.logot()

    
     //execute the script after fixture
     await use(page)

}

,
loginfixture: async ({page},use)=>{


    const pom=new POMManager(page)
   let login=  pom.getLoginPage()

 // await login.navigateToHomePage()
  await login.clickOnLogin()
  await login.EnterEmail(email)
  await login.EnterPassword()
  await login.clickOnLoginBtn()

  //assertion to verify the login succefull
  await login.verifyLogin(email)
await use(page)

}



}
)