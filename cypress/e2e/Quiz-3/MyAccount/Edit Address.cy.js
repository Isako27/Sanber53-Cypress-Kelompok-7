describe('Test Edit Menu Address', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    })
    
    it('Sukses Add Address Book', () => {
      
      // Login dulu ya...
      cy.contains('Sign In').click()
      cy.get('#email').type('ihsansolusi@gmail.com')
      cy.get('#pass').type('Mochamad27')
      cy.wait(1200)
      cy.get('#send2').click()    
  
      // Lanjut ke Menu Edit Address Book
      cy.visit('https://magento.softwaretestingboard.com/customer/address/new/')
      cy.get('#country').select('Indonesia')
      cy.get('#country').should('have.value', 'ID')
      cy.get('#telephone').type('0899788770')
      cy.get('#street_1').type('Perumahan Batununggal Regency Indah')
      cy.get('#city').type('Kota Bandung')
      cy.get('#region').type('Indonesia')
      cy.get('#zip').type('78455')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success').should('be.visible')
      cy.get('.message-success > div').should('contain.text', 'You saved the address.')
    })
  
    it('Gagal Add Address', () => {
      
      // Login Lagi
      cy.contains('Sign In').click()
      cy.get('#email').type('ihsansolusi@gmail.com')
      cy.get('#pass').type('Mochamad27')
      cy.wait(1200)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    
  
      // Ke Menu Edit Address Book
      cy.visit('https://magento.softwaretestingboard.com/customer/address/new/')
      cy.wait(1200)
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#telephone-error').should('be.visible')
      cy.get('#telephone-error').should('contain.text', 'This is a required field.')
      cy.get('#street_1-error').should('be.visible')
      cy.get('#street_1-error').should('contain.text', 'This is a required field.')
      cy.get('#city-error').should('be.visible')
      cy.get('#city-error').should('contain.text', 'This is a required field.')
      cy.get('#zip-error').should('be.visible')
      cy.get('#zip-error').should('contain.text', 'This is a required field.')
    })
  
    it('Sukses Edit Billing Address', () => {
      
      // Login
      cy.contains('Sign In').click()
      cy.get('#email').type('ihsansolusi@gmail.com')
      cy.get('#pass').type('Mochamad27')
      cy.wait(1200)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    
  
      // Masuk ke Menu Edit Address Book
      cy.visit('https://magento.softwaretestingboard.com/customer/address')
      cy.get('.box-address-billing > .box-actions > .action > span').click()
      cy.get('#lastname').clear().type('Yuda')
      cy.get('#telephone').clear().type('0899788770')
      cy.get('#street_1').clear().type('Perumahan Batununggal Regency Indah')
      cy.get('#city').clear().type('Kota Bandung')
      cy.get('#region').clear().type('Indonesia')
      cy.get('#zip').clear().type('78455')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success').should('be.visible')
      cy.get('.message-success > div').should('contain.text', 'You saved the address.')
    })
  
    it('Gagal Edit Billing Address', () => {
      
      // Login
      cy.contains('Sign In').click()
      cy.get('#email').type('ihsansolusi@gmail.com')
      cy.get('#pass').type('Mochamad27')
      cy.wait(1200)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    
  
      // Masuk ke Menu Edit Address Book
      cy.visit('https://magento.softwaretestingboard.com/customer/address')
      cy.get('.box-address-billing > .box-actions > .action > span').click()
      cy.get('#lastname').clear()
      cy.get('#telephone').clear()
      cy.get('#street_1').clear()
      cy.get('#city').clear()
      cy.get('#region').clear()
      cy.get('#zip').clear()
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#telephone-error').should('be.visible')
      cy.get('#telephone-error').should('contain.text', 'This is a required field.')
      cy.get('#street_1-error').should('be.visible')
      cy.get('#street_1-error').should('contain.text', 'This is a required field.')
      cy.get('#city-error').should('be.visible')
      cy.get('#city-error').should('contain.text', 'This is a required field.')
      cy.get('#zip-error').should('be.visible')
      cy.get('#zip-error').should('contain.text', 'This is a required field.')
    })
  })