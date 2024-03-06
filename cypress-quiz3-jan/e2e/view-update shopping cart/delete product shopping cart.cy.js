/// <reference types="cypress" />

describe('delete shopping cart', () => {
it('Add product and view mini shopping cart and delete product on mini shopping cart', () =>{
    cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
    cy.contains('Proteus Fitness Jackshirt').click()
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#option-label-color-93-item-49').click()
    cy.get('#qty').clear().type('2')
    cy.get('#product-addtocart-button').click()
    cy.wait(4000)
    cy.get('.showcart').click()
    cy.get('.product-item-details > .actions > .secondary > .action').click()
    cy.get('.action-primary').click()
    cy.get('.subtitle').should('have.text','You have no items in your shopping cart.')
              
})


  it('Add product and view shopping cart delete product on shopping cart', () =>{
    cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
    cy.contains('Proteus Fitness Jackshirt').click()
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#option-label-color-93-item-49').click()
    cy.get('#qty').clear().type('2')
    cy.get('#product-addtocart-button').click()
    cy.wait(4000)
    cy.get('.showcart').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.get('.action-delete').click()
    cy.get('.cart-empty > :nth-child(1)').should('have.text','You have no items in your shopping cart.')
    
  })

})