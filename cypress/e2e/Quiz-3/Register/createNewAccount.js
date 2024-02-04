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
    Register.verifySuccess()
  })
  it.only('Verify failed create account using registered customer', () => {
    cy.get(Register.fName).type('shintya')
    cy.get(Register.lName).type('simatupang')
    cy.get(Register.email).type('mikasa00@yopmail.com')
    cy.get(Register.pwd).type('Shanon1212')
    cy.get(Register.confirm_pwd).type('Shanon1212')
    Register.verifyError()
  })
})