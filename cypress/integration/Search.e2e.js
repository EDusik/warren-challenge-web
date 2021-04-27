/* eslint-disable no-undef */

// Add intellisense
/// <reference types="cypress" />

describe("Search - Cypress Integration Test", async () => {
	it("should search input work properly", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.get("[data-testid='search'").type("Resgate");
		cy.get("[data-testid='transaction-box'").should("have.length", 1).click();
		cy.get('[data-testid="modal-status"').should("contain", "Solicitada");
		cy.get('[data-testid="modal-close-button"]').click();
		cy.get('[data-testid="details-modal-body"]').should("not.exist");
		cy.get("[data-testid='search'").clear();

		cy.get("[data-testid='search'").type("Depósito");
		cy.get("[data-testid='transaction-box'").should("have.length", 1).click();
		cy.get('[data-testid="modal-status"').should("contain", "Concluída");
		cy.get('[data-testid="modal-close-button"]').click();
		cy.get('[data-testid="details-modal-body"]').should("not.exist");
		cy.get("[data-testid='search'").clear();

		cy.get("[data-testid='search'").type("Movimentação interna");
		cy.get("[data-testid='transaction-box'").should("have.length", 1).click();
		cy.get('[data-testid="modal-status"').should("contain", "Processando");
		cy.get('[data-testid="modal-close-button"]').click();
		cy.get('[data-testid="details-modal-body"]').should("not.exist");
	});
});
