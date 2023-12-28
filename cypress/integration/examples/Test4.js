// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

describe('My Fourth Test Suite', function () {
	it('My fourth test case', function () {
		// Check boxes
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		cy.get('#alertbtn').click();
		cy.get('[value="Confirm"]').click();
		// Window Alert
		cy.on('window:alert', (str) => {
			// Mocha
			expect(str).to.equal(
				'Hello , share this practice page and share your knowledge'
			);
		});
		cy.on('window:confirm', (str) => {
			// Mocha
			expect(str).to.equal('Hello , Are you sure you want to confirm?');
		});
	});
});
