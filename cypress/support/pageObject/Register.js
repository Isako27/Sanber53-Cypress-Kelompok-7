class Register {
    fName = '#firstname'
    lName= '#lastname'
    email = '#email_address'
    pwd = '#password'
    confirm_pwd = '#password-confirmation'
    create_btn = '#form-validate > .actions-toolbar > div.primary > .action'
    success = '.message-success'
    failed = '.message-error'

    verifySuccess(){
        //message success with text validation
        cy.get(this.success).should('contain.text', 'Thank you for registering with Main Website Store.')
    }

    verifyError(){
        //message error with text validation
        cy.get(this.failed).should('contain.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }

    clickCreate(){
        //function to click the Create an Account button
        cy.get(this.create_btn).click()
    }
}
export default new Register()