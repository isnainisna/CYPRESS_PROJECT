# 📌 QA Engineer Final Project – Automation Testing (Cypress)

## 🔍 Project Overview
Ini adalah final project dari bootcamp QA Engineer yang bertujuan untuk melakukan automation testing terhadap beberapa fitur utama dalam aplikasi, yaitu:

- Login
- Forgot Password
- Directory Dashboard Karyawan

Project ini menggunakan Cypress sebagai automation testing framework dengan pendekatan Page Object Model (POM). Fitur-fitur lanjutan seperti Selector, Intercept, dan Hook juga digunakan untuk meningkatkan maintainability, readability, dan reliability dari testing.


## 🧱 Folder Structure

CYPRESS_PROJECT/
├── cypress/
│   ├── e2e/              # Contains all end-to-end test spec files, organized by feature.
│   │   └── finalProject/   # (Your specific sub-folder for the project)
│   │       ├── dashboardDirectory.cy.js
│   │       ├── ForgotPassword.cy.js
│   │       └── Login.cy.js
│   ├── fixtures/         # Stores static test data (e.g., JSON for test credentials).
│   │   ├── dashboardDirectoryData.json
│   │   ├── forgotPasswordData.json
│   │   └── loginData.json
│   ├── support/          # Houses reusable code like custom Cypress commands and global configurations.
│   │   ├── PageObject/   # (Your specific sub-folder for Page Objects)
│   │   │   ├── dashboardDirectory.cy.js # (Assuming this is a Page Object, not a test spec)
│   │   │   ├── ForgotPassword_Object.cy.js
│   │   │   └── Login_Object.cy.js
│   │   ├── commands.js   # Custom commands for common actions (e.g., login).
│   │   └── e2e.js        # Global imports and configurations.
├── cypress.config.js     # Main Cypress configuration file.
├── package.json          # Project metadata and dependency declarations.
├── package-lock.json     # Ensures consistent dependency versions across environments.
└── README.md             # This project's documentation.

---

## ⚙️ Tools

| Tool       | Description                          |
|------------|--------------------------------------|
| Cypress    | Automation testing framework         |
| JavaScript | Bahasa pemrograman utama             |
| POM        | Design pattern untuk modular testing |
| Intercept  | Mock API request/response            |
| Selector   | Mengakses elemen DOM secara spesifik |
| Hook       | Setup/teardown (beforeEach, dll.)    |

---

## 📁 Penjelasan Konsep

### 🧩 POM (Page Object Model)
Digunakan agar test case lebih modular, scalable, dan maintainable. Semua aksi terhadap UI disimpan dalam folder 

`PageObject/`.

Contoh:
```javascript
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get('#username').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();

---

🔖 Selector
Semua selector didefinisikan secara terpusat agar mudah di-maintain jika terjadi perubahan pada struktur HTML.

Contoh:

javascript

export const loginSelectors = {
  usernameInput: '#username',
  passwordInput: '#password',
  loginButton: 'button[type="submit"]'
};

---

🔄 Intercept
Untuk mocking/mengontrol response dari API dalam testing.

Contoh:
javascript
cy.intercept('GET', '/api/employees', { fixture: 'dashboardDirectoryData' }).as('getEmployees');
cy.wait('@getEmployees');

---

🔁 Hook
Digunakan seperti beforeEach() untuk setup awal sebelum menjalankan setiap test.

Contoh:

javascript

beforeEach(() => {
  cy.visit('/login');
  cy.fixture('loginData').then((data) => {
    cy.get('#email').type(data.valid.email);
    cy.get('#password').type(data.valid.password);
    cy.get('button[type="submit"]').click();
  });
});
🧪 How to Run the Tests
Clone project:
git clone https://github.com/username/CYPRESS_PROJECT.git
cd CYPRESS_PROJECT
Install dependencies:
npm install

Run tests Dengan UI:
npx cypress open
Headless mode:

npx cypress run
📌 Test Scenarios
✅ Login Testing
Valid login

Invalid credentials

Empty input fields

🧾 Forgot Password Testing
Valid email submit

Invalid email error

Empty field validation

📊 Directory Dashboard
Load data dengan API mock

Search employee

Filter by department

View employee detail

📚 Notes
Testing berbasis UI & API mock.

Semua halaman memiliki file POM.

Menggunakan Hook untuk menjaga konsistensi.

Selector dipisahkan agar mudah di-maintain.

👨‍💻 Author

Nama: Isnaini

Bootcamp: QA Engineer – SANBERCODE Batch 66
