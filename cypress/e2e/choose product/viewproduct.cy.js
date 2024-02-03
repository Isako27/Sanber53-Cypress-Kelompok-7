/// <reference types="cypress" />


describe('Choose Product', () => {
    it('Choose product only from list', () =>{
      cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
      cy.contains('Proteus Fitness Jackshirt').click()
    })

    it('Choose product with size and colour from list', () =>{
      cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
      cy.get('.swatch-opt-430 > .size > .swatch-attribute-options > #option-label-size-143-item-168').click()
      cy.get('.swatch-opt-430 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49').click()
      //cy.get('.swatch-opt-430 > button.tocart.primary').click()
    })
  })

