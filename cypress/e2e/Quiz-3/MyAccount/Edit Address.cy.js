describe('Edit Addres Information spec', () => {
    it('Succes Edit Address Book', () => {

        cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/id/24929/')
       
        cy.get('#firstname').type ('Wakabayashi')
        cy.get('#lastname').type ('Ozora')
        cy.get('#company').type ('SAMSUNG')
        cy.get('#telephone').type ('23456')
        cy.get('#street_1').type ('Jl. Dago No 52')
        cy.get('#street_2').type ('Dipatiukur')
        cy.get('#street_3').type ('Cibeunying Kulon')
        cy.get('#city').type ('Bandung')
        cy.get('#region').type ('Jawa Barat')
        cy.get('#zip').type ('44004')
        cy.get('#country').type ('Indonesia')
   
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

    })
})