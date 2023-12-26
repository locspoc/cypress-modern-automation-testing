// cypress - Spec

/// <reference types="Cypress" />

describe('My First Test Suite', function () {
	it('My first test case', function () {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);
		cy.get('.product').should('have.length', 5);
		cy.get('.product:visible').should('have.length', 4);
		// Parent Child Chaining
		cy.get('.products').find('.product').should('have.length', 4);
		cy.get(':nth-child(3) > .product-action > button').click();
		cy.get('.products')
			.find('.product')
			.eq(2)
			.contains('ADD TO CART')
			.click();
		cy.get('.products')
			.find('.product')
			.each(($el, index, $list) => {
				const textVeg = $el.find('h4.product-name').text();
				if (textVeg.includes('Cashews')) {
					cy.wrap($el).find('button').click();
				}
			});
	});
});
