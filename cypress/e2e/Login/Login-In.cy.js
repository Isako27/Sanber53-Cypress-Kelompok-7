describe('Login-In Sukses', () => {
  beforeEach(() => {
   cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
  })
  it('Login Berhasil', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type ('yudamobile@gmail.com')
    cy.get('#pass').type ('M0chamad90')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()

  })
})