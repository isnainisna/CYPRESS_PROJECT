import Login_Object from "../../support/PageObjects/Login_Object";
import loginData from "../../fixtures/loginData.json";

describe('Login OrangeHRM', ()=> {
    beforeEach(() => {
        Login_Object.visit();
        Login_Object.intercept();
    });

    it.only ('TC1 loginValid',()=> {
        Login_Object.inputUsername(loginData.validUsername);
        Login_Object.inputPassword(loginData.validPassword);
        Login_Object.login_btn();
        Login_Object.responseLogin();
        Login_Object.verifyLoginSuccess();  
    })

//Login_Invalid_username
    it ('TC2 loginValid username',()=> {
        Login_Object.inputUsername(loginData.invalidUsername);
        Login_Object.inputPassword(loginData.validPassword);
        Login_Object.login_btn();
        Login_Object.responseLogin();
        Login_Object.verifyLoginError();

    })

//Login_invalid_password
    it ('TC3 login inValid password',()=> {
        Login_Object.inputUsername(loginData.validUsername);
        Login_Object.inputPassword(loginData.invalidPassword);
        Login_Object.login_btn();
        Login_Object.responseLogin();
        Login_Object.verifyLoginError();
    })

//Login_invalid_password dan username

    it ('TC4 login inValid',()=> {
        Login_Object.inputUsername(loginData.invalidUsername);
        Login_Object.inputPassword(loginData.invalidPassword);
        Login_Object.login_btn();
        Login_Object.responseLogin();
        Login_Object.verifyLoginError();  
    })

//Login_invalid_password dan username tidak diisi
    it ('TC5 login inValid username dan password tidak diisi',()=> {
        Login_Object.inputUsername(loginData.EmptyUsername);
        Login_Object.inputPassword(loginData.EmptyPassword);
        Login_Object.login_btn();
        Login_Object.responseLogin();
        Login_Object.verifyLoginEmptyPasswordUsername();   
    })

//Login_invalid_password dan username menggunakan spesial karakter
    it ('TC6 login inValid username dan password Menggunkaan spesial karakter',()=> {
        Login_Object.inputUsername(loginData.invalidUsername);
        Login_Object.inputPassword(loginData.invalidPassword);
        Login_Object.login_btn();
        Login_Object.responseLogin();
        Login_Object.verifyLoginError(); 
    })
});