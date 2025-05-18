import dashboardDirectoryData from "../../fixtures/dashboardDirectoryData.json";

class DirectoryDashboardPage{
intercept(){
    cy.intercept('GET','**/web/index.php/dashboard/index').as('index')   
    cy.intercept('GET','**/web/index.php/directory/viewDirectory').as('viewDirectory');
    cy.intercept('GET','**/api/v2/directory/employees*').as('getDirectory');
    };

    visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com')
    }

 InputUsernameLogin(){
    cy.get('[name="username"]').type('Admin');
 }
 InputPasswordLogin(){
    cy.get('[name="password"]').type('admin123');
 }  
 Login_btn(){
    cy.get('button[type="submit"]').click();
 } 

 VerifyLoginSuccess(){
    cy.url().should('include', '/dashboard');
 }
DirectoryMenu(){
    cy.contains('Directory').click();
}
viewDirectory(){
    cy.url().should('include', '/viewDirectory')
}
    
Search_btn(){
    cy.get('button[type="submit"].oxd-button--secondary').click()
}
Reset_btn(){
    cy.get('button[type="reset"].oxd-button--ghost').click()
}

searchByValidName(){
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Timothy')
  //   cy.get('.oxd-autocomplete-option').contains('Timothy Lewis Amiano').click()
}
searchByInvalidName(){
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Linda')
    cy.get('.oxd-autocomplete-option').should('be.visible').first().click()
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').clear().type('Linda')
}
SearchByAllItemsValid(){
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Peter')
    cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    cy.get('.oxd-select-wrapper').eq(0).click()
    cy.get('.oxd-select-dropdown > *').contains('Chief Financial Officer').click()
    cy.get('.oxd-select-wrapper').eq(1).click()
    cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click()
}
SearchByAllItemsInvalid(){
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Peter')
    cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    cy.get('.oxd-select-wrapper').eq(0).click()
    cy.get('.oxd-select-dropdown > *').contains('HR Manager').click()
    cy.get('.oxd-select-wrapper').eq(1).click()
    cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click()
}

ResetFilterByName(){
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('Timothy')
    cy.get('.oxd-autocomplete-option').contains('Timothy Lewis Amiano').click()
}
ResetFilterByJobList(){
    cy.get('.oxd-select-wrapper').eq(0).click()
    cy.get('.oxd-select-dropdown > *').contains('HR Manager').click()
}
ResetFilterByLocation(){
    cy.get('.oxd-select-wrapper').eq(1).click()
    cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click()
}
    
VerifyUserNotFound(){
    cy.get('.oxd-toast-container').should('be.visible').contains('No Records Found')
}
FilterByJobList(){
    cy.get('.oxd-select-wrapper').eq(0).click()
    cy.get('.oxd-select-dropdown > *').contains('HR Manager').click()
}
FilterByLocation(){
    cy.get('.oxd-select-wrapper').eq(1).click()
    cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click()
}
VerifyUserFound(){
    cy.contains('Records Found').should('be.visible');
}
ViewEmployeeDirectory(){
    cy.get('.oxd-sheet').click();

}
ResponseAPI(){
cy.wait('@index').its('response.statusCode').should('eq', 200);
cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
}

}
export default new DirectoryDashboardPage()

