describe('Edit Account spec', () => {

   beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
   })

    it('Succes Edit Account Information', () => {

    cy.get('#firstname').clear().type('Taro')
    cy.get('#lastname').clear().type ('Misaki')
    cy.get('#change-email').clear().type('ceklist')
    cy.get('#change-password').clear().type('ceklist')
    cy.get('#current-password').clear().type ('123 ')
    cy.get('#password').clear().type ('1234')
    cy.get('#password-confirmation').clear().type ('1234')
    cy.get('#Save').click()
    cy.get('[data-test="error"]').should('be.visible')

    })
    it.only('Verify Edit Account Gagal',  () => {
    cy.get('#firstname').clear().type('locked_out_user')
    cy.get('lastname').clear().type ('locked_out_user')
    cy.get('#change-email').clear().type('')
    cy.get('#change-password').clear().type('')
    cy.get('#current-password').clear().type ('')
    cy.get('#password').clear().type ('scret_sauce')
    cy.get('#password-confirmation').clear().type ('scret_sauce')

    cy.get('[data-test="error"]').should('contain.text','Sorry this')
  
  })
})