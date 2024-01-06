/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Visit website and Connection to Azure SQL Server database', function () {
	this.data.forEach((result) => {
		console.log(result[1]);
		console.log(result[3]);
		cy.log(result[1]);
		cy.log(result[3]);
	});
});

When('Form is completed', function () {
	cy.get('.wait-input1').type(this.data[0][1]);
	cy.wait(1000);
	cy.get('.wait-input2').type(this.data[1][1]);
	cy.wait(1000);
});
