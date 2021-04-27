/* eslint-disable no-undef */

// Add intellisense
/// <reference types="cypress" />

describe("Sort Button - Cypress Integration Test", async () => {
	it("should sort button work properly", () => {
		cy.getTransactions();
		cy.goToTheHomePage();
		cy.get("[data-testid='transaction-box'").first().should("contain", "Resgate");
		cy.get("[data-testid='transaction-box'").last().should("contain", "Movimentação interna");
		cy.get("#sort-button").click();
		cy.get("[data-testid='transaction-box'").first().should("contain", "Movimentação interna");
		cy.get("[data-testid='transaction-box'").last().should("contain", "Resgate");
	});
});
