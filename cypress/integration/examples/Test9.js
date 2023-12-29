// Testing Framework
import HomePage from '../pageObjects/HomePage';

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
		const homePage = new HomePage();
		cy.visit('https://rahulshettyacademy.com/angularpractice/');
		cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
		cy.get('select').select(this.data.gender);
		// Two way binding example input matches name
		cy.get(':nth-child(4) > .ng-untouched').should(
			'have.value',
			this.data.name
		);
		// Min Length is 2
		cy.get('input[name="name"]:nth-child(2)').should(
			'have.attr',
			'minlength',
			'2'
		);
		// Entrepreneur option box is disabled
		cy.get('#inlineRadio3').should('be.disabled');
		cy.pause();
		cy.get(':nth-child(2) > .nav-link').click();
		// Array and Custom Command
		this.data.productName.forEach((product) => {
			cy.selectProduct(product);
		});
	});
});
