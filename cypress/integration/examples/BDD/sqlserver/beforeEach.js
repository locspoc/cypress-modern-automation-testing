beforeEach(function () {
	cy.visit('https://example.cypress.io/commands/waiting');
	cy.sqlServer('select * from Persons').then(function (result) {
		this.data = result;
	});
});
