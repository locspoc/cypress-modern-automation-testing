beforeEach(function () {
	cy.fixture('example').then(function (data) {
		// globalThis.data = data;
		this.data = data;
	});
});

// beforeEach(() =>{
// 	cy.fixture('example').then(function (data) {
// 		globalThis.data = data;
// 		// this.data = data;
// 	});
// });
