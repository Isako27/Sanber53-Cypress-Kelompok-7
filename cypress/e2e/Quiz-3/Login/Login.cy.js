const loginData = require("../../../fixtures/loginData.json")
import LoginObject from "../../../support/pageObject/LoginObject"

describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  })
  it('Verify login successfully', () => {
    cy.get(LoginObject.email).type(loginData.validLogin.email)
    cy.get(LoginObject.password).type(loginData.validLogin.password)
    cy.get(LoginObject.login_btn).click()
  })
})