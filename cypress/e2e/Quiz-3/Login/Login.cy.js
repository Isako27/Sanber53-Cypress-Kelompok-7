//by Shintya Angelica Simatupang
const loginData = require("../../../fixtures/loginData.json")
import objLogin from "../../../support/pageObject/objLogin"

describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  })
  it('Verify login successfully', () => {
    cy.get(objLogin.email).type(loginData.validLogin.email)
    cy.get(objLogin.pwd).type(loginData.validLogin.pwd)
    objLogin.clickLogin()
  })
  it('Verify login successfully will redirect to valid url', () => {
    cy.get(objLogin.email).type(loginData.validLogin.email)
    cy.get(objLogin.pwd).type(loginData.validLogin.pwd)
    objLogin.clickLogin()
    cy.verifyUrl('/customer/account/')
  })
  it('Verify failed login using unregistered email and password', () => {
    cy.get(objLogin.email).type(loginData.invalidLogin.email)
    cy.get(objLogin.pwd).type(loginData.invalidLogin.pwd)
    objLogin.clickLogin()
    objLogin.verifyFailed()
  })
  it('Verify failed login using unregistered email', () => {
    cy.get(objLogin.email).type(loginData.invalidEmail)
    cy.get(objLogin.pwd).type(loginData.validPwd)
    objLogin.clickLogin()
    objLogin.verifyFailed()
  })
  it('Verify failed login using unregistered password', () => {
    cy.get(objLogin.email).type(loginData.validEmail)
    cy.get(objLogin.pwd).type(loginData.invalidPwd)
    objLogin.clickLogin()
    objLogin.verifyFailed()
  })
  //sometimes this case successfully running, sometimes not
  //have to click the login button in GUI after failed and try again 
  it('Verify failed login using wrong email formats', () => {
    cy.get(objLogin.email).type(loginData.invalidFormatEmail)
    objLogin.clickLogin()
    objLogin.verifyFormatEmail()
  })
  it('Verify failed login without fills all the fields', () => {
    objLogin.clickLogin()
    objLogin.verifyError()
  })
  it('Verify failed login without fills the email', () => {
    cy.get(objLogin.pwd).type(loginData.validPwd)
    objLogin.clickLogin()
    objLogin.verifyError()
  })
  it('Verify failed login without fills the password', () => {
    cy.get(objLogin.email).type(loginData.validEmail)
    objLogin.clickLogin()
    objLogin.verifyError()
  })
    
})