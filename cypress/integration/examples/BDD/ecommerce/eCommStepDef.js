import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homePage = new HomePage();
const productsPage = new ProductsPage();

Given('I open Ecommerce page', () => {
	cy.visit(Cypress.env('url') + '/angularpractice/');
});

When('I add items to cart', () => {
	homePage.getShopTab().click();
	// Array and Custom Command
	this.data.productName.forEach((product) => {
		cy.selectProduct(product);
	});
	// cy.wait(5000);
	productsPage.getCheckoutButton().click();
});

And('Validate the total prices', () => {
	// Compare Line Items Vs Total
	let sum = 0;
	cy.get('tr td:nth-child(4) strong')
		.each(($el, index, $list) => {
			// cy.log($el.text());
			const amount = $el.text();
			let res = amount.split(' ');
			res = res[1].trim();
			sum = Number(sum) + Number(res);
			cy.log(res);
			cy.log(sum);
		})
		.then(() => {
			cy.log(sum);
		});
	cy.get('h3 strong').then(($el) => {
		const amount = $el.text();
		let res = amount.split(' ');
		let total = Number(res[1].trim());
		expect(total).to.equal(sum);
	});
});

Then('Select the country, submit and verify thank you message', () => {
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
