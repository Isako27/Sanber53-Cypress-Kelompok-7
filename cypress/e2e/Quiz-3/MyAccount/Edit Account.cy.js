describe('Edit Account spec', () => {
  it('Succes Edit Account Information', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/id/24929/')

    cy.get('#firstname').type ('Tsubasa')
    cy.get('#lastname').type ('Ozora')
    cy.get('#company').type ('Telkom')
    cy.get('#telephone number').type ('12345')
    cy.get('#street Addres').type ('Jl. Raya Soreang No. 36')
    cy.get('#city').type ('Bandung')
    cy.get('#state/Province').type ('Jawa Barat')
    cy.get('#postal/Postal Code').type ('44004')
    cy.get('#country').type ('Indonesia')
  cy.get('#form-validate > .action-toolbar > div.primary > .action').click()


  })
})