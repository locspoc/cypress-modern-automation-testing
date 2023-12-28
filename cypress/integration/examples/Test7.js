// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

describe('My Seven Test Suite', function () {
	it('My seventh test case', function () {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		// Option 1: Make Visible with Jquery
		// cy.get('div.mouse-hover-content').invoke('show');
		// Option 2: Click All Elements even if invisible
		cy.contains('Top').click({ force: true });
		cy.url().should('include', 'top');
	});
});
