//import * as module from 'testcafe';
import { Selector } from "testcafe";



import signUpPage from "../pages/zingSignUpPage";
import config from "../module/config";
import testData from "../module/testData";


const signUp = new signUpPage();

//var Faker = require('faker');


fixture`Zing Sign Up`
.page(config.ZING);

test("Sign Up to Zing", async t => {
  await signUp.signUpToZing();
  await signUp.verifyCustomer();
  await t.expect()
});

test("SignUp with a blank First Name", async t => {
  await signUp.errorFirstname();
  await t.expect(signUp.Error_Firstname.visible).ok();
});

test("SignUp with a blank Last Name", async t => {
  await signUp.errorLastname();
  await t.expect(signUp.Error_Lastname.visible).ok();
});

test("SignUp with a blank Email Address", async t => {
  await signUp.errorEmailAddress();
  await t.expect(signUp.Error_EmailAddress.visible).ok();
});

test("SignUp with a blank Password", async t => {
  await signUp.errorPassword();
  await t.expect(signUp.Error_EmailAddress.visible).ok();
});
