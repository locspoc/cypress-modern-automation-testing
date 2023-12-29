class HomePage {
	getEditBox() {
		return cy.get('input[name="name"]:nth-child(2)');
	}
	getEntrepreneur() {
		return cy.get('#inlineRadio3');
	}
	getGender() {
		return cy.get('select');
	}
	getShopTab() {
		return cy.get(':nth-child(2) > .nav-link');
	}
	getTwoWayDataBinding() {
		return cy.get(':nth-child(4) > .ng-untouched');
	}
}

export default HomePage;
