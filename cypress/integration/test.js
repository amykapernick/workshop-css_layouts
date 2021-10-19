describe(`Overview Page`, () => {
	before(() => {
		cy.visit(`http://localhost:1234`);
	});

	it(`contains "Bullet Journal" in the title`, () => {
		cy.title().should(`contain`, `Bullet Journal`);
	});
});
