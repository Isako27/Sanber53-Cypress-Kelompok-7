const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: "https://magento.softwaretestingboard.com",
    env: {
      fname: "standard_user",
      lname: "secret_sauce"
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5432,
    viewportWidth: 900,
    viewportHeight: 650
    


  },
});
