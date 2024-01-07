/// <reference types="Cypress" />
const neatCSV = require('neat-csv');

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// import neatCSV from 'neat-csv';

let productName;

Given('Is logged in through local storage', () => {
	cy.LoginAPI().then(function () {
		cy.visit('https://rahulshettyacademy.com/client/', {
			onBeforeLoad: function (window) {
				window.localStorage.setItem('token', Cypress.env('token'));
			},
		});
	});
});

When('Product added to cart', () => {
	cy.get('.card-body b')
		.eq(1)
		.then(function (ele) {
			productName = ele.text();
		});
	cy.get('.card-body button:last-of-type').eq(1).click();
	cy.get('[routerlink*="cart"]').click();
});

Then('Go to checkout', () => {
	cy.contains('Checkout').click();
});

Then('Place order', () => {
	cy.get('[placeholder*="Country"]').type('ind');
	cy.get('.ta-results button').each(($el, index, $list) => {
		if ($el.text() === ' India') {
			cy.log($el);
			cy.wrap($el).click();
		}
	});
	cy.get('.action__submit').click();
});

Then('Download csv file', () => {
	cy.wait(2000);
	cy.get('.order-summary button').eq(0).click();

	cy.readFile(
		Cypress.config('fileServerFolder') +
			'/cypress/downloads/order-invoice_mrlocspoc.csv'
	).then(async (text) => {
		const csv = await neatCSV(text);
		// console.log('csv: ', csv);
		const actualProductNameCSV = csv[0]['Product Name'];
		expect(productName).to.equal(actualProductNameCSV);
	});
});

Then('Download Excel file and validate', () => {
	cy.wait(2000);
	// cy.get('.order-summary button').eq(1).click();x
	cy.get('.order-summary button').contains('Excel').click();
	const filePath =
		Cypress.config('fileServerFolder') +
		'/cypress/downloads/order-invoice_mrlocspoc.xlsx';
	cy.task('excelToJsonConverter', filePath).then(function (result) {
		cy.log(result);
		cy.log(result.data[1].A);
		expect(productName).to.equal(result.data[1].B);
		// console.log('result: ', result);
	});

	// Browser(Engine) - JS code -> Client Side Environment (Front End) - Cypress

	// Node (Engine) - JS code -> Back End applications / environment
	// Accessing files - fs, Database access,

	// Task - (File,DB) -> Config.js, (ExcelToJson)-> cy.task(ExcelToJson)
});
