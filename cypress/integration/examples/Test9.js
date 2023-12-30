// Testing Framework
import HomePage from '../pageObjects/HomePage';
import ProductsPage from '../pageObjects/ProductsPage';

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
		const productsPage = new ProductsPage();
		cy.visit('https://rahulshettyacademy.com/angularpractice/');
		homePage.getEditBox().type(this.data.name);
		homePage.getGender().select(this.data.gender);
		// Two way binding example input matches name
		homePage.getTwoWayDataBinding().should('have.value', this.data.name);
		// Min Length is 2
		homePage.getEditBox().should('have.attr', 'minlength', '2');
		// Entrepreneur option box is disabled
		homePage.getEntrepreneur().should('be.disabled');
		// cy.pause();
		homePage.getShopTab().click();
		// Array and Custom Command
		this.data.productName.forEach((product) => {
			cy.selectProduct(product);
		});
		// cy.wait(5000);
		productsPage.getCheckoutButton().click();
		// Compare Line Items Vs Total
		let sum = 0;
		cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
			// cy.log($el.text());
			const amount = $el.text();
			let res = amount.split(' ');
			res = res[1].trim();
			sum = sum + parseInt(res);
			cy.log(res);
			cy.log(sum);
		});
		cy.log(sum);
		cy.contains('Checkout').click();
		cy.get('#country').type('India');
		cy.get('.suggestions > ul > li > a').click();
		cy.get('#checkbox2').click({ force: true });
		cy.get('input[type="submit"]').click();
		// cy.get('.alert').should(
		// 	'have.text',
		// 	'Success! Thank you! Your order will be delivered in next few weeks :-).'
		// );
		cy.get('.alert').then((element) => {
			const actualText = element.text();
			expect(actualText.includes('Success')).to.be.true;
			// if(actualText.includes("Success")){
			// 	//
			// }
		});
	});
});
