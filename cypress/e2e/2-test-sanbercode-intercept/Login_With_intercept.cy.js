describe('Login OrangeHRM', () => {
  beforeEach(() => {
    // intercept
    cy.intercept('GET','**/web/index.php/dashboard/index').as('index')
    cy.intercept('GET','**/web/index.php/api/v2/dashboard/employees/time-at-work*').as('timeAtWork')
    cy.intercept('GET','**/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  it('TC1 - Login valid dengan intercept', () => {
    // Action: input login
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Tunggu response login
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
    // Assertion: redirect ke dashboard
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard');
  });

// Action: invalid username
it('TC2 - Login invalid dengan intercept', () => {
    cy.get('input[name="username"]').type('Adminn');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Tunggu response login
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
    // Assertion: redirect ke dashboard
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials')
  });
// Action: invalid Password
it('TC3 - Login invalid dengan intercept', () => {
    cy.get('input[name="username"]').type('Adminn');
    cy.get('input[name="password"]').type('admin1234');
    cy.get('button[type="submit"]').click();

    // Tunggu response login
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
    // Assertion: redirect ke dashboard
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials')
  });
// Action: invalid Password dan Username
it('TC4 - Login invalid dengan intercept', () => {
    cy.get('input[name="username"]').type('Adminn');
    cy.get('input[name="password"]').type('admin1234');
    cy.get('button[type="submit"]').click();

    // Tunggu response login
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
    // Assertion: redirect ke dashboard
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials')
  });
// Action: invalid Password dan username menggunakan karakter spesial
it('TC5 - Login invalid dengan intercept', () => {
    cy.get('input[name="username"]').type('Adm!n');
    cy.get('input[name="password"]').type('admin12#');
    cy.get('button[type="submit"]').click();

    // Tunggu response login
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
    // Assertion: redirect ke dashboard
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials')
  });
// Action: invalid Password dan username kosong
it('TC6 - Login invalid dengan intercept', () => {
    cy.get('input[name="username"]').clear('');
    cy.get('input[name="password"]').clear('');
    cy.get('button[type="submit"]').click();

    // Tunggu response login
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
    // Assertion: redirect ke dashboard
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Required')
  });

});
