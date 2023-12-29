// Intellisense autocorrect, tool tips etc...
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('My Eighth Test Suite', function () {
	it('My eigth test case', function () {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		cy.frameLoaded('#courses-iframe');
		cy.iframe().find("a[href*='mentorship']").eq(0).click();
		cy.wait(3000);
		cy.iframe().find("h3[class*='pricing-price']").should('have.length', 2);
	});
});
