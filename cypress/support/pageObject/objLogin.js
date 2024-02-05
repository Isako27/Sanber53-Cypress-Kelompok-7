class objLogin{
    email = '#email'
    pwd = '#pass'
    login_btn = '#send2'

    clickLogin(){
        cy.get(this.login_btn).click()
    }

    verifyFailed(){
        cy.get('.message-error').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later')
    }

    verifyError(){
        cy.get('.message-error').should('contain.text','A login and a password are required.')
    }

    verifyFormatEmail(){
        cy.get('#email-error').should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    }
}
export default new objLogin()