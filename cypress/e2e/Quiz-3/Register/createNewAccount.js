import Register from "../../../support/pageObject/Register"

describe('Create New Account Functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })
  it('Make sure successfully create a new account', () => {
    cy.get(Register.fName).type('ag')
    cy.get(Register.lName).type('af')
    cy.get(Register.email).type('mikasa04@yopmail.com')
    cy.get(Register.pwd).type('Shanon1216')
    cy.get(Register.confirm_pwd).type('Shanon1216')
    Register.clickCreate()
    Register.verifySuccess()
  })
  it('Verify failed create account using registered customer', () => {
    cy.get(Register.fName).type('shintya')
    cy.get(Register.lName).type('simatupang')
    cy.get(Register.email).type('mikasa00@yopmail.com')
    cy.get(Register.pwd).type('Shanon1212')
    cy.get(Register.confirm_pwd).type('Shanon1212')
    Register.clickCreate()
    Register.verifyError()
  })
  it('Verify failed create account using registered email', () => {

  })
  it('Verify failed create account without fills all the fields', () => {

  })
  it('Verify failed create account without fills the First Name field', () => {

  })
  it('Verify failed create account without fills the Last Name field', () => {

  })
  it('Verify failed create account without fills the E-mail field', () => {

  })
  it('Verify failed create account without fills the Password field', () => {

  })
  it('Verify failed create account without fills the Confirm Password field', () => {

  })
  

})