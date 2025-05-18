const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    suppportFile:"Cypress/support/e2e.js",
    defaulftCommandTimeout: 30000, //dalam milidetik
    baseUrl:"https://opensource-demo.orangehrmlive.com/"
  },
});
