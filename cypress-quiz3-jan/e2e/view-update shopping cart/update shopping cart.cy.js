/// <reference types="cypress" />


describe('normal case update shopping cart', () => {
    it('update total items on mini shopping cart', () =>{
      cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
      cy.contains('Proteus Fitness Jackshirt').click()
      cy.get('#option-label-size-143-item-166').click()
      cy.get('#option-label-color-93-item-49').click()
      cy.get('#qty').clear().type('2')
      cy.get('#product-addtocart-button').click()
      cy.wait(4000)
      cy.get('.showcart').click()
      cy.get('[id^=cart-item-]').clear().type('4')
      cy.get('[id^=update-cart-item-]').click()
      cy.get('#btn-minicart-close').click()
    })


    it('update items through edit item button at mini shopping cart', () =>{
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
        cy.contains('Proteus Fitness Jackshirt').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#qty').clear().type('2')
        cy.get('#product-addtocart-button').click()
        cy.wait(4000)
        cy.get('.showcart').click()
        cy.get('.product-item-details > .actions > .primary > .action').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#qty').clear().type('12')
        cy.get('#product-updatecart-button').click()
      })


      it('update items at shopping cart', () =>{
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
        cy.contains('Proteus Fitness Jackshirt').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#qty').clear().type('2')
        cy.get('#product-addtocart-button').click()
        cy.wait(4000)
        cy.get('.showcart').click()
        cy.get('a.action.viewcart').click()
        cy.get('.input-text.qty').clear().type('20')
        cy.get('.update').click()

      })

    
})


describe('negative case update shopping cart', () => {
    it('update total items >10000 on mini shopping cart', () =>{
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
        cy.contains('Proteus Fitness Jackshirt').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#qty').clear().type('2')
        cy.get('#product-addtocart-button').click()
        cy.wait(4000)
        cy.get('.showcart').click()
        cy.get('[id^=cart-item-]').clear().type('11111')
        cy.get('[id^=update-cart-item-]').click()
        cy.get('#modal-content-39 > div').should('have.text','The requested qty exceeds the maximum qty allowed in shopping cart')
        
      })

      it('update total items >10000 through edit item button at mini shopping cart', () =>{
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
        cy.contains('Proteus Fitness Jackshirt').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#qty').clear().type('2')
        cy.get('#product-addtocart-button').click()
        cy.wait(4000)
        cy.get('.showcart').click()
        cy.get('.product-item-details > .actions > .primary > .action').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#qty').clear().type('11111')
        cy.get('#product-updatecart-button').click()
        cy.get('#qty-error').should('have.text','The maximum you may purchase is 10000.')
      })

      it('update total items >10000 at shopping cart', () =>{
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
        cy.contains('Proteus Fitness Jackshirt').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#qty').clear().type('2')
        cy.get('#product-addtocart-button').click()
        cy.wait(4000)
        cy.get('.showcart').click()
        cy.get('a.action.viewcart').click()
        cy.get('.input-text.qty').clear().type('999993')
        cy.get('.update').click()
        cy.get('.message-error > div').should('have.text','The requested qty exceeds the maximum qty allowed in shopping cart')

      })
    

})
