import { t, Selector } from "testcafe";
import testData from "../module/testData";


export default class signUpPage {
constructor(){
this.First_Name = Selector('[name="signup_minireg[first_name]"]')
this.Last_Name = Selector('[name="signup_minireg[last_name]"]')
this.Email_Address = Selector('[id="signup_minireg_email"]')
this.Password_Field = Selector('[name="signup_minireg[password]"]')
this.SignInButton = Selector('[name="send"]')
this.Captcher_tickBox = Selector('[id="recaptcha-anchor"]')
this.Send_Captcher = Selector('.element-form-button-solid-lime.element-form-button-size-40.mb10.fn')
this.Error_Firstname = Selector('.text.input-error').withText('Please enter your first name here.')
this.Error_Lastname = Selector('[tabindex="11"]').withText('Please enter your last name here.')
this.Error_EmailAddress = Selector('[tabindex="12"]').withText('Please check the e-mail ad-dress you entered.')
this.Error_Password = Selector('[tabindex="13"]').withText('Please select a password (min. 8 characters).')
this.YourDeliveries = Selector('h1').withText('Your Deliveries')

}


async signUpToZing (){

    await t
         .typeText(this.First_Name,testData.Customer_First_Name)
         .typeText(this.Last_Name, testData.Customer_Last_Name)
         .wait(2000)
         .typeText(this.Email_Address,testData.Customer_Email)
         .typeText(this.Password_Field,testData.Customer_password)
         .click(this.SignInButton)
}

async verifyCustomer(){
await t
      .click(this.Captcher_tickBox)
      .click(this.Send_Captcher)

}

async errorFirstname(){
  await t
  .typeText(this.Last_Name,testData.Customer_Last_Name)
  .typeText(this.Email_Address,testData.Customer_Email)
  .wait(2000)
  .typeText(this.Password_Field,testData.Customer_password)
  .click(this.SignInButton)

}

async errorLastname(){
 await t
    .typeText(this.First_Name,testData.Customer_First_Name)
    .typeText(this.Email_Address,testData.Customer_Email)
    .wait(2000)
    .typeText(this.Password_Field,testData.Customer_password)
    .click(this.SignInButton)
  
  }

  async errorEmailAddress(){
    await t
    .typeText(this.First_Name,testData.Customer_First_Name)
    .typeText(this.Last_Name,testData.Customer_Last_Name)
    .typeText(this.Password_Field,testData.Customer_password)
    .wait(2000)
    .click(this.SignInButton)
  
  }
         
  async errorPassword(){
    await t
        .typeText(this.First_Name,testData.Customer_First_Name)
        .typeText(this.Last_Name,testData.Customer_Last_Name)
        .typeText(this.Email_Address,testData.Customer_Email)
        .wait(2000)
        .click(this.SignInButton)
  

  }

}