import forgotPasswordData from "../../fixtures/forgotPasswordData.json";

class forgotPasswordPage{
    visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
    }
    intercept(){
    cy.intercept('GET', '**/web/index.php/auth/sendPasswordReset').as('sendPasswordReset');

  }
ResetUsername(Username){
    cy.get('input[name="username"]').type('Username');
}
Reset_btn(){
    cy.get('button[type="submit"]').click();
}
Cancel_btn(){
    cy.get('.oxd-button--ghost').click();
}
ResponseRequest(){
    cy.wait('@sendPasswordReset').its('response.statusCode').should('eq', 200);
}
ResetSuccessfully(){
    cy.contains('Reset Password link sent successfully').should('be.visible');
}
ResetUnsuccessfully(){
    cy.contains('Reset Password link sent successfully').should('be.visible');
}

BacktoLogin(){
cy.url().should('include', '/auth/login')
}

}

export default new forgotPasswordPage()