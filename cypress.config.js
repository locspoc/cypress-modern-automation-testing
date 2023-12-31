const { defineConfig } = require('cypress');

module.exports = defineConfig({
	chromeWebSecurity: false,
	defaultCommandTimeout: 6000,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'cypress/integration/examples/*.js',
	},
	env: {
		url: 'https://rahulshettyacademy.com',
	},
	projectId: 's4g31o',
	retries: {
		runMode: 1,
	},
});
