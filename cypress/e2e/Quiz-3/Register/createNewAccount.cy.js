import { constants } from "buffer"
import Register from "../../../support/pageObject/Register"
const registerData = require("../../../fixtures/registerData.json")

describe('Create New Account Functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })
  //need to edit the newEmail value in fixtures/registerData to successfully run this case
  it('Make sure successfully create a new account', () => {
    cy.get(Register.fName).type(registerData.newAcc.newFName)
    cy.get(Register.lName).type(registerData.newAcc.newLName)
    cy.get(Register.email).type(registerData.newAcc.newEmail)
    cy.get(Register.pwd).type(registerData.newAcc.newPwd)
    cy.get(Register.confirm_pwd).type(registerData.newAcc.newConfirmPwd)
    Register.clickCreate()
    Register.verifySuccess()
  })
  it('Verify success create account will redirect to valid url', () => {
    cy.get(Register.fName).type(registerData.newAcc.newFName)
    cy.get(Register.lName).type(registerData.newAcc.newLName)
    cy.get(Register.email).type(registerData.newAcc.newEmail)
    cy.get(Register.pwd).type(registerData.newAcc.newPwd)
    cy.get(Register.confirm_pwd).type(registerData.newAcc.newConfirmPwd)
    Register.clickCreate()
    Register.verifySuccess()
    cy.verifyUrl('/customer/account/')
  })
  it('Verify failed create account using all the registered customer data', () => {
    cy.get(Register.fName).type(registerData.currentAcc.currentFName)
    cy.get(Register.lName).type(registerData.currentAcc.currentLName)
    cy.get(Register.email).type(registerData.currentAcc.currentEmail)
    cy.get(Register.pwd).type(registerData.currentAcc.currentPwd)
    cy.get(Register.confirm_pwd).type(registerData.currentAcc.currentConfirmPwd)
    Register.clickCreate()
    Register.verifyError()
  })
  it('Verify failed create account using registered email', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.currentAcc.currentEmail),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
    Register.verifyError()
    })
  it('Verify failed create account without fills all the fields', () => {
    Register.clickCreate()
    Register.verifyFNameError()
    Register.verifyLNameError()
    Register.verifyEmailError()
    Register.verifyPwdError()
    Register.verifyConfirmPwdError()
  })
  it('Verify failed create account without fills the First Name field', () => {
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
    Register.verifyFNameError()
  })
  it('Verify failed create account without fills the Last Name field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
    Register.verifyLNameError()

  })
  it('Verify failed create account without fills the E-mail field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
    Register.verifyEmailError()
  })
  it('Verify failed create account without fills the Password field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
    Register.verifyPwdError()
  })
  it('Verify failed create account without fills the Confirm Password field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    Register.clickCreate()
    Register.verifyConfirmPwdError()
  })
  

})