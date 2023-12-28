// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

describe('My Fifth Test Suite', function () {
	it('My fifth test case', function () {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		// cy.get('#opentab').click();
		cy.get('#opentab').invoke('removeAttr', 'target').click();
		cy.origin('https://www.qaclickacademy.com', () => {
			cy.get('#navbarSupportedContent a[href*="about"]').click();
			cy.get('.section-title h2').should('contain', 'QAClick Academy');
		});
	});
});
