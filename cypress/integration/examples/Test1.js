// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

describe('My First Test Suite', function () {
	it('My first test case', function () {
		Cypress.config('defaultCommandTimeout', 8000);
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);
		cy.get('.product').should('have.length', 5);
		cy.get('.product:visible').should('have.length', 4);
		// Parent Child Chaining
		cy.get('.products').as('productLocator');
		cy.get('@productLocator').find('.product').should('have.length', 4);
		cy.get(':nth-child(3) > .product-action > button').click();
		cy.get('@productLocator')
			.find('.product')
			.eq(2)
			.contains('ADD TO CART')
			.click()
			.then(function () {
				console.log('sf');
			});
		cy.get('@productLocator')
			.find('.product')
			.each(($el, index, $list) => {
				const textVeg = $el.find('h4.product-name').text();
				if (textVeg.includes('Cashews')) {
					cy.wrap($el).find('button').click();
				}
			});
		// Assert if logo text is correctly displayed
		cy.get('.brand').should('have.text', 'GREENKART');
		// This is to print in logs
		const logo = cy.get('.brand').then(function (logoElement) {
			cy.log(logoElement.text());
		});
		// cy.log(logo.text());
	});
});
