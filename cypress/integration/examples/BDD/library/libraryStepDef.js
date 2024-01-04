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
				{
					book_name: 'RestAssured with Java',
					isbn: 'RSU',
					aisle: '2301',
				},
			],
		}
	).as('bookretrievals');
	cy.get("button[class='btn btn-primary']").click();
	cy.wait('@bookretrievals').then(({ request, response }) => {
		cy.log(response);
		cy.log(response.body);
		// const length = response.body.length + 1;
		cy.get('tr').should('have.length', response.body.length + 1);
	});
});

Then('Receive mock data', () => {
	// cy.get('p').should('have.text', 'Oops only 1 Book available');
	cy.get('tbody tr').should('have.length', '2');
	// cy.get('tbody tr th').should('have.text', '1');
	// cy.get('tbody tr th').should('have.text', '2');
	// length of response array = number of rows in table
});

When('I send a mock reqeust for lirbary info', () => {
	cy.intercept(
		'GET',
		'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
		(req) => {
			req.url =
				'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';
			req.continue((res) => {
				// expect(res.statusCode).to.equal(403);
			});
		}
	).as('dummyUrl');
	cy.get("button[class='btn btn-primary']").click();
	cy.wait('@dummyUrl');
});

Then('Receive mock data 2', () => {
	// cy.get('p').should('have.text', 'Oops only 1 Book available');
	// cy.get('tbody tr').should('have.length', '2');
	// cy.get('tbody tr th').should('have.text', '1');
	// cy.get('tbody tr th').should('have.text', '2');
	// length of response array = number of rows in table
});
