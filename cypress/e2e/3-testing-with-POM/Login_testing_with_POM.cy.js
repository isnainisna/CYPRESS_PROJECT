import Login_Object from "../../support/PageObjects/Login_Object";
import loginData from "../../fixtures/loginData.json";

describe('Login OrangeHRM', ()=> {
    beforeEach(() => {
        Login_Object.visit();
    });

    it.only ('TC1 loginValid',()=> {
        Login_Object.inputUsername(loginData.validUsername);
        //cy.get('input[name="username"]').type('Admin');
        Login_Object.inputPassword(loginData.validPassword);
        //cy.get('input[name="password"]').clear().type('admin123')
        Login_Object.login_btn();
        //cy.get('.oxd-button').click() 
        Login_Object.verifyLoginSuccess();
        //cy.url().should('include', '/dashboard');  
    })

//Login_Invalid_username
    it ('TC2 loginValid username',()=> {
        //cy.get('input[name="username"]').type('adminn');
        //cy.get('input[name="password"]').clear().type('admin123')
        //cy.get('.oxd-button').click() 
        //cy.url().should('include', '/dashboard');
        //cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials') 
        Login_Object.inputUsername(loginData.invalidUsername);
        Login_Object.inputPassword(loginData.validPassword);
        Login_Object.login_btn();
        Login_Object.verifyLoginError();

    })

//Login_invalid_password
    it ('TC3 login inValid password',()=> {
        // cy.get('input[name="username"]').type('admin');
        // cy.get('input[name="password"]').clear().type('admin1234')
        // cy.get('.oxd-button').click()   
        // cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials') 
        Login_Object.inputUsername(loginData.validUsername);
        Login_Object.inputPassword(loginData.invalidPassword);
        Login_Object.login_btn();
        Login_Object.verifyLoginError();
    })

//Login_invalid_password dan username

    it ('TC4 login inValid',()=> {
        // cy.get('input[name="username"]').type('adminn');
        // cy.get('input[name="password"]').clear().type('admin1234')
        // cy.get('.oxd-button').click() 
        // cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials') 
        Login_Object.inputUsername(loginData.invalidUsername);
        Login_Object.inputPassword(loginData.invalidPassword);
        Login_Object.login_btn();
        Login_Object.verifyLoginError();  
    })


//Login_invalid_password dan username tidak diisi
    it ('TC5 login inValid username dan password tidak diisi',()=> {
        // cy.get('input[name="username"]').type('');
        // cy.get('input[name="password"]').clear().type('')
        // cy.get('.oxd-button').click()  
        // cy.get('.oxd-input-field-error-message').should('be.visible').and('contain', 'Required') 
        Login_Object.inputUsername(loginData.EmptyUsername);
        Login_Object.inputPassword(loginData.EmptyPassword);
        Login_Object.login_btn();
        Login_Object.verifyLoginEmptyPasswordUsername();   
    })

//Login_invalid_password dan username menggunakan spesial karakter
    it ('TC6 login inValid username dan password Menggunkaan spesial karakter',()=> {
        // cy.get('input[name="username"]').type(',');
        // cy.get('input[name="password"]').clear().type('admin12!')
        // cy.get('.oxd-button').click()   
        Login_Object.inputUsername(loginData.invalidUsername);
        Login_Object.inputPassword(loginData.invalidPassword);
        Login_Object.login_btn();
        Login_Object.verifyLoginError(); 
    })
});