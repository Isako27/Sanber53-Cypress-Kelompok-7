class EditAccountPage{
    //cara 1 (branch isako)
    //yang disimpan hanya element locator
    fname = '#firstname'
    lname = '#lastname'
    login_btn = '.submit-button.btn_action'
    err = '[data-test="error"]'

    //cara 2
    //buat fungsi lengkap
    verifyError(){
        cy.get(this.err).should('be.visible')
    }

    clickSave(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }
}
export default new EditAccountPage()