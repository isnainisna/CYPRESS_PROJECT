import loginData from "../../fixtures/loginData.json";

class loginPage{
    visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com')
    };

    intercept(){
    cy.intercept('GET','**/web/index.php/dashboard/index').as('index')
    cy.intercept('GET','**/web/index.php/api/v2/dashboard/employees/subunit').as('subunit')
    cy.intercept('GET','**/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
    }

inputUsername(username){
    cy.get('input[name="username"]').type(username);
}

inputPassword(password){
    cy.get('input[name="password"]').clear().type(password)
}

login_btn(){
    cy.get('.oxd-button').click()
}

responseLogin(){
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    cy.wait('@subunit').its('response.statusCode').should('eq', 200);
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    
}

verifyLoginSuccess(){
    cy.url().should('include', '/dashboard')   
}
verifyLoginError(){
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials')
}
verifyLoginEmptyPasswordUsername(){
    cy.get('.oxd-input-field-error-message').should('be.visible').and('contain', 'Required')
}

}
export default new loginPage()
