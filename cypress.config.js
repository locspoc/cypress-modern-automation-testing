require('dotenv').config();
const { defineConfig } = require('cypress');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const sqlServer = require('cypress-sql-server');

async function setupNodeEvents(on, config) {
	// This is required for the preprocessor to be able to generate JSON reports after each run, and more,

	// Browserify
	on('file:preprocessor', browserify.default(config));

	// Cucumber
	await preprocessor.addCucumberPreprocessorPlugin(on, config);

	// Database
	config.db = {
		userName: process.env.SQL_USERNAME,
		password: process.env.SQL_PASSWORD,
		server: process.env.SQL_SERVER,
		options: {
			database: process.env.SQL_DATABASE,
			encrypt: true,
			rowCollectionOnRequestCompletion: true,
		},
	};

	// SQL Server
	tasks = sqlServer.loadDBPlugin(config.db);
	on('task', tasks);

	// Make sure to return the config object as it might have been modified by the plugin.
	return config;
}

module.exports = defineConfig({
	chromeWebSecurity: false,
	defaultCommandTimeout: 6000,
	e2e: {
		setupNodeEvents,
		specPattern: 'cypress/integration/examples/BDD/*.feature',
	},
	env: {
		url: 'https://rahulshettyacademy.com',
	},
	projectId: 's4g31o',
	retries: {
		runMode: 1,
	},
});
