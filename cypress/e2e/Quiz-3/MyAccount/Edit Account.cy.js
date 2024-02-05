describe('Edit Account spec', () => {
  it('Succes Edit Account Information', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')

    cy.get('#firstname').type ('Tsubasa')
    cy.get('#lastname').type ('Ozora')
    cy.get('#change-email')
    cy.get('#change-password')
    cy.get('#current-password').type ('12345')
    cy.get('#password').type ('Jl. Raya Soreang No. 36')
    cy.get('#city').type ('Bandung')
    cy.get('#region').type ('Jawa Barat')
    cy.get('#password-confirmation').type ('44004')
    cy.get('#country').type ('Indonesia')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()


  })
})