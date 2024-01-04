// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

// Intellisense autocorrect, tool tips etc
/// <reference types="Cypress" />

describe('My 10th Test Suite', function () {
	it('Test case 1', function () {
		cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
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
});
