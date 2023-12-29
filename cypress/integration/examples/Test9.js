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
		cy.pause();
		homePage.getShopTab().click();
		// Array and Custom Command
		this.data.productName.forEach((product) => {
			cy.selectProduct(product);
		});
		productsPage.getCheckoutButton().click();
	});
});
