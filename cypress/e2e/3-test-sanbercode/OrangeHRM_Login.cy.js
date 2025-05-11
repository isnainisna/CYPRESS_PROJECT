//Login Valid
describe('Login OrangeHRM', ()=> {
    it ('TC1 loginValid',()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('Admin');
        cy.xpath("//input[@name='password']").clear().type('admin123')
        cy.get('.oxd-button').click()   
    });
});

//Login_Invalid_username
describe('Login OrangeHRM', ()=> {
    it ('TC2 loginValid username',()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('adminn');
        cy.xpath("//input[@name='password']").clear().type('admin123')
        cy.get('.oxd-button').click()   
    });
});

//Login_invalid_password
describe('Login OrangeHRM', ()=> {
    it ('TC3 login inValid password',()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('admin');
        cy.xpath("//input[@name='password']").clear().type('admin1234')
        cy.get('.oxd-button').click()   
    });
});

//Login_invalid_password dan username
describe('Login invalid password dan username salah', ()=> {
    it ('TC4 loginValid',()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('adminn');
        cy.xpath("//input[@name='password']").clear().type('admin1234')
        cy.get('.oxd-button').click()   
    });
});

//Login_invalid_password dan username tidak diisi
describe('Login OrangeHRM', ()=> {
    it ('TC5 login inValid username dan password tidak diisi',()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('');
        cy.xpath("//input[@name='password']").clear().type('')
        cy.get('.oxd-button').click()   
    });
});

//Login_invalid_password dan username menggunakan spesial karakter
describe('TC6 Login Invalid OrangeHRM', ()=> {
    it ('TC4 login inValid username dan password tidak diisi',()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type(',');
        cy.xpath("//input[@name='password']").clear().type('admin12!')
        cy.get('.oxd-button').click()   
    });
});