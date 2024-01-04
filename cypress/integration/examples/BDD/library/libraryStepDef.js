/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open library page', () => {
	cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
});

When('I send a reqeust for lirbary info', () => {
	cy.intercept(
		{
			method: 'GET',
			url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
		},
		{
			statusCode: 200,
			body: [
				{
					book_name: 'RestAssured with Java',
					isbn: 'RSU',
					aisle: '2301',
				},
			],
		}
	).as('bookretrievals');
	cy.get("button[class='btn btn-primary']").click();
	cy.wait('@bookretrievals');
});

Then('Receive mock data', () => {
	cy.get('p').should('have.text', 'Oops only 1 Book available');
	cy.get('tbody tr th').should('have.text', '1');
});
