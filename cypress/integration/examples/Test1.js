// cypress - Spec

/// <reference types="Cypress" />

describe('My First Test Suite', function () {
	it('My first test case', function () {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
	});
});
