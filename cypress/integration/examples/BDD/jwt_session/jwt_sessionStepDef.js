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
		console.log('csv: ', csv);
		const actualProductNameCSV = csv[0]['Product Name'];
		expect(productName).to.equal(actualProductNameCSV);
	});
});
