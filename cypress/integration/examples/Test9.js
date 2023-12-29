// Testing Framework

// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

describe('My Nineth Test Suite', function () {
	it('Test case 1', function () {
		cy.visit('https://rahulshettyacademy.com/angularpractice/');
		cy.get('input[name="name"]:nth-child(2)').type('Bob');
		cy.get('select').select('Male');
	});
});
