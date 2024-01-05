/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Is logged in through local storage', () => {
	cy.LoginAPI().then(function () {
		cy.visit('https://rahulshettyacademy.com/client/', {
			onBeforeLoad: function (window) {
				window.localStorage.setItem('token', Cypress.env('token'));
			},
		});
	});
});
