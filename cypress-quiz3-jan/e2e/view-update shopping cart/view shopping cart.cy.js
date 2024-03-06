/// <reference types="cypress" />


describe('view shopping cart', () => {
    it('Add product and view mini shopping cart', () =>{
      cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
      cy.contains('Proteus Fitness Jackshirt').click()
      cy.get('#option-label-size-143-item-166').click()
      cy.get('#option-label-color-93-item-49').click()
      cy.get('#qty').clear().type('2')
      cy.get('#product-addtocart-button').click()
      cy.wait(4000)
      cy.get('.showcart').click()
         
    })

    it('Add product and view shopping cart', () =>{
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
        cy.contains('Proteus Fitness Jackshirt').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#qty').clear().type('2')
        cy.get('#product-addtocart-button').click()
        cy.wait(4000)
        cy.get('.showcart').click()
        cy.get(':nth-child(7) > .secondary > .action > span').click() 
      })

    })
  
    

