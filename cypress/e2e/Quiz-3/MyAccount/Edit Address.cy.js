describe('Edit Addres Information spec', () => {
    it('Succes Edit Address Book', () => {

        cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/id/24929/')
       
        cy.get('#firstname').type ('Tsubasa')
        cy.get('#lastname').type ('Ozora')
        cy.get('#company').type ('Telkom')
        cy.get('#telephone').type ('12345')
        cy.get('#street_1').type ('Jl. Raya Soreang No. 36')
        cy.get('#street_2').type ('')
        cy.get('#street_3').type ('')
        cy.get('#city').type ('Bandung')
        cy.get('#region').type ('Jawa Barat')
        cy.get('#zip').type ('44004')
        cy.get('#country').type ('Indonesia')
   
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

    })
})