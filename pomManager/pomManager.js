
import WelcomePage from "../PageObjectModel/welcomePage"
import UserRegistration from "../PageObjectModel/userRegistration"
import Login from"../PageObjectModel/loginPage"
import CartList from "../PageObjectModel/list_of_cart_product"
import Electronics from"../PageObjectModel/electronics"
import CellPhone from "../PageObjectModel/cellPhone"
import AddToCart from "../PageObjectModel/addToCart"

export default class POMManager{


    constructor(page){

        this.page=page
        this.welcomePage=new WelcomePage(page)
        this.userRegistration=new UserRegistration(page)
        this.login=new Login(page)
        this.cartList=new CartList(page)
        this.electronics=new Electronics(page)
        this.cellPhone=new CellPhone(page)
        this.addtocart=new AddToCart(page)

    }

  getWelcomePage(){
    return this.welcomePage;
}

 getUserRegistrationPage(){

    return this.userRegistration;
}
getLoginPage(){
    return this.login;
}

 getCartListPage(){
    return this.cartList;
}

getElectronicsPage(){
    return this.electronics;
}

 getCellPhonePage(){

  return  this.cellPhone;
}

 getAddtocartPage(){

    return this.addtocart;
}



}