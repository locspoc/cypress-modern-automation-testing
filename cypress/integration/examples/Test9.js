// Testing Framework

// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

describe('My Nineth Test Suite', function () {
	before(function () {
		// Run once before all tests in the block
		cy.fixture('example').then(function (data) {
			this.data = data;
		});
	});
	it('Test case 1', function () {
		cy.visit('https://rahulshettyacademy.com/angularpractice/');
		cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
		cy.get('select').select(this.data.gender);
	});
});
