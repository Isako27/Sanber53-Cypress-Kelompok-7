describe('Test Menu Edit Account', () => {

 // branch "main" 

  beforeEach(() => {
   
   cy.visit('https://magento.softwaretestingboard.com')

  })
   
   it('Edit Account Information - Edit FirstName & LastName', () => {
    
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('ihsansolusi@gmail.com')
    cy.get('#pass').type('Mochamad27')
    cy.wait(1000)
    cy.get('#send2').click()

    // ke menu ganti account
    //branch "main"
    cy.visit('https://magento.softwaretestingboard.com/customer/account')
    
    cy.get('.base').should('contain','My Account')
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear()
    cy.get('#firstname').type("Mochamad Isako")
    cy.get('#lastname').clear()
    cy.get('#lastname').type("Yuda")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success > div').should('have.text','You saved the account information.')


  })
})