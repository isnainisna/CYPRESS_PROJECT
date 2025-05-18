import dashboardDirectory from "../../support/PageObjects/dashboardDirectory.js";
import dashboardDirectoryData from "../../fixtures/dashboardDirectoryData.json";

describe('Directory Page Tests', () => {
  beforeEach(() => {
    dashboardDirectory.visit();
    dashboardDirectory.intercept();
    dashboardDirectory.InputUsernameLogin(dashboardDirectoryData.validUsername);
    dashboardDirectory.InputPasswordLogin(dashboardDirectoryData.validPassword);
    dashboardDirectory.Login_btn();
    dashboardDirectory.VerifyLoginSuccess(); 
    dashboardDirectory.DirectoryMenu();
    dashboardDirectory.viewDirectory();
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // cy.intercept('GET','**/web/index.php/dashboard/index').as('index')
    // cy.intercept('GET','**/web/index.php/directory/viewDirectory').as('viewDirectory');
    // cy.intercept('GET','**/api/v2/directory/employees*').as('getDirectory');
    // cy.get('[name="username"]').type('Admin');
    // cy.get('[name="password"]').type('admin123');
    // cy.get('button[type="submit"]').click();
    // cy.url().should('include', '/dashboard');
    // cy.contains('Directory').click();
    // cy.url().should('include', '/viewDirectory');
  })
  

  it ('TC1 Mencari nama karyawan yang invalid dengan mengklik button search', () => {
    dashboardDirectory.searchByInvalidName(dashboardDirectoryData.InvalidEmployeeName);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserNotFound();
    
    // cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Linda')
    // cy.get('.oxd-autocomplete-option').should('be.visible').first().click()
    // cy.get('button[type="submit"].oxd-button--secondary').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // cy.get('.oxd-input-group >.oxd-text').should('be.visible').and('contain', 'Invalid')
  })

  it ('TC2 Mencari nama karyawan yang valid dengan mengklik button search', () => {
    dashboardDirectory.searchByValidName(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
  //   cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Timothy')
  //   cy.get('.oxd-autocomplete-option').contains('Timothy Lewis Amiano').click()
  //   cy.get('button[type="submit"].oxd-button--secondary').click();
  //   cy.wait('@index').its('response.statusCode').should('eq', 200);
  //   cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
  //   cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
  //   cy.contains('Records Found').should('be.visible');
  })

  it ('TC3 Pencarian berdasarkan filter job', () =>{
    dashboardDirectory.FilterByJobList(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
    // cy.get('.oxd-select-wrapper').eq(0).click()
    // cy.get('.oxd-select-dropdown > *').contains('HR Manager').click();
    // cy.get('button[type="submit"]').contains('Search').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // cy.contains('Records Found').should('be.visible');  
  })

  it ('TC4 Pencarian berdasarkan filter lokasi',() =>{
    dashboardDirectory.FilterByLocation(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
    // cy.get('.oxd-select-wrapper').eq(1).click()
    // cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click();
    // cy.get('button[type="submit"]').contains('Search').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // cy.contains('Records Found').should('be.visible');
  })

  it ('TC5 pencarian berdasarkan Nama, filter job, dan lokasi yang valid',()=> {
    dashboardDirectory.SearchByAllItemsValid(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();

    // cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Peter')
    // cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    // cy.get('.oxd-select-wrapper').eq(0).click()
    // cy.get('.oxd-select-dropdown > *').contains('Chief Financial Officer').click();
    // cy.get('.oxd-select-wrapper').eq(1).click()
    // cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click();
    // cy.get('button[type="submit"].oxd-button--secondary').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // cy.contains('Records Found').should('be.visible');

  })
  it ('TC6 pencarian berdasarkan Nama, filter job, dan lokasi yang invalid',()=> {
    dashboardDirectory.SearchByAllItemsInvalid(dashboardDirectoryData.InvalidSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
    // cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Peter')
    // cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    // cy.get('.oxd-select-wrapper').eq(0).click()
    // cy.get('.oxd-select-dropdown > *').contains('HR Manager').click();
    // cy.get('.oxd-select-wrapper').eq(1).click()
    // cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click();
    // cy.get('button[type="submit"].oxd-button--secondary').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // cy.get('.oxd-toast-container').should('be.visible').contains('No Records Found');
})

  it ('TC7 Reset filter pencarian berdasarkan nama', () => {
    dashboardDirectory.ResetFilterByName();
    dashboardDirectory.Reset_btn();
    dashboardDirectory.ResponseAPI();

    // cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Timothy')
    // cy.get('.oxd-autocomplete-option').contains('Timothy Lewis Amiano').click()
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // cy.get('button[type="reset"].oxd-button--ghost').click();
  })

  it ('TC8 Reset filter pencarian berdasarkan select job', () => {
    dashboardDirectory.ResetFilterByJobList();
    dashboardDirectory.Reset_btn();
    dashboardDirectory.ResponseAPI();

    // cy.get('.oxd-select-wrapper').eq(0).click()
    // cy.get('.oxd-select-dropdown > *').contains('HR Manager').click()
    // cy.get('button[type="reset"].oxd-button--ghost').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
  })
  it ('TC9 Reset filter pencarian berdasarkan select lokasi', () => {
    dashboardDirectory.ResetFilterByLocation();
    dashboardDirectory.Reset_btn();
    dashboardDirectory.ResponseAPI();

    // cy.get('.oxd-select-wrapper').eq(1).click()
    // cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click()
    // cy.get('button[type="reset"].oxd-button--ghost').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200)
  })

  it.only ('TC10 Lihat detail karyawan dari Directory', () => {
    dashboardDirectory.SearchByAllItemsValid(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
    dashboardDirectory.ViewEmployeeDirectory();
    // cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Peter')
    // cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    // cy.get('.oxd-select-wrapper').eq(0).click()
    // cy.get('.oxd-select-dropdown > *').contains('Chief Financial Officer').click();
    // cy.get('.oxd-select-wrapper').eq(1).click()
    // cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click();
    // cy.get('button[type="submit"].oxd-button--secondary').click();
    // cy.wait('@index').its('response.statusCode').should('eq', 200);
    // cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    // cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // cy.contains('Records Found').should('be.visible');
    // cy.get('.oxd-sheet').click();
})

});
