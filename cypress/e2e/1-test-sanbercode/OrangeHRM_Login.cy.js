//Login Valid
describe('Login OrangeHRM', ()=> {
    beforeEach(() => {
    
      cy.visit('https://opensource-demo.orangehrmlive.com')
    });

    it ('TC1 loginValid',()=> {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').clear().type('admin123')
        cy.get('.oxd-button').click()   
    })

//Login_Invalid_username
    it ('TC2 loginValid username',()=> {
        cy.get('input[name="username"]').type('adminn');
        cy.get('input[name="password"]').clear().type('admin123')
        cy.get('.oxd-button').click()   
    })

//Login_invalid_password
    it ('TC3 login inValid password',()=> {
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').clear().type('admin1234')
        cy.get('.oxd-button').click()   
    })

//Login_invalid_password dan username

    it ('TC4 login inValid',()=> {
        cy.get('input[name="username"]').type('adminn');
        cy.get('input[name="password"]').clear().type('admin1234')
        cy.get('.oxd-button').click()   
    })


//Login_invalid_password dan username tidak diisi
    it ('TC5 login inValid username dan password tidak diisi',()=> {
        cy.get('input[name="username"]').type('');
        cy.get('input[name="password"]').clear().type('')
        cy.get('.oxd-button').click()   
    })

//Login_invalid_password dan username menggunakan spesial karakter
    it ('TC6 login inValid username dan password Menggunkaan spesial karakter',()=> {
        cy.get('input[name="username"]').type(',');
        cy.get('input[name="password"]').clear().type('admin12!')
        cy.get('.oxd-button').click()   
    })
});