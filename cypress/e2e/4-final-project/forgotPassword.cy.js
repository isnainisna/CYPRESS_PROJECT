import forgotPassword_Object from "../../support/PageObjects/forgotPassword_Object.cy.js";
import forgotPasswordData from "../../fixtures/forgotPasswordData.json";
import forgotPassword_ObjectCy from "../../support/PageObjects/forgotPassword_Object.cy.js";

describe('forgot Password', ()=> {
    beforeEach(() => {
        forgotPassword_Object.visit();
        forgotPassword_Object.intercept();
    })
it ('TC1 Reset Password valid Username', () => {
        forgotPassword_Object.ResetUsername(forgotPasswordData.EmailValid);
        forgotPassword_Object.Reset_btn();
        forgotPassword_Object.ResponseRequest();
        forgotPassword_Object.ResetSuccessfully();
})
it ('TC2 Reset Password invalid Username', () => {
    forgotPassword_Object.ResetUsername(forgotPasswordData.EmailInvalid);
    forgotPassword_Object.Reset_btn();
    forgotPassword_Object.ResponseRequest();
    forgotPassword_Object.ResetUnsuccessfully();
})
it ('TC3 Reset Password Cancel', () => {
    forgotPassword_Object.ResetUsername(forgotPasswordData.EmailInvalid);
    forgotPassword_Object.Cancel_btn();
    forgotPassword_Object.BacktoLogin();
})
});
        