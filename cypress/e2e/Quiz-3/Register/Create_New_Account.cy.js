describe('Create New Account', () => {
  beforeEach(() => {
    //cy.visit('https://magento.softwaretestingboard.com/customer/account/create/git ')
  })
  it('successfully create a new account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('abc')
    cy.get('#lastname').type('defghij')
    cy.get('#email_address').type('mikasa01@yopmail.com')
    cy.get('#password').type('Shanon1213')
    cy.get('#password-confirmation').type('Shanon1213')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  })
  it('verify create account using registered customer', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('shintya')
    cy.get('#lastname').type('simatupang')
    cy.get('#email_address').type('mikasa00@yopmail.com')
    cy.get('#password').type('Shanon1212')
    cy.get('#password-confirmation').type('Shanon1212')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-error').should('contain.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  })
})