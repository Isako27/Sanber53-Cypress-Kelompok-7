describe('Login-In Sukses', () => {
  

  it('Login Berhasil', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type ('ihsansolusi@gmail.com')
    cy.get('#pass').type ('Mochamad27')
    cy.get('#send2').click()

  })
})