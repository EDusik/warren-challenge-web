/* eslint-disable no-undef */

// Add intellisense
/// <reference types="cypress" />

import transactions from "../fixtures/transactions.json";

describe("Details Modal - Cypress E2E Test", async () => {
	it("should modal 'Resgate'/'Solicitada' contain right values", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.contains(transactions[0].title).click();
		cy.get(".details-modal-body").should("be.visible");
		cy.get('[data-testid="modal-title"]').should("contain", transactions[0].title);
		cy.get('[data-testid="modal-status"').should("contain", "Solicitada");
		cy.get('[data-testid="modal-transferred-from"').should("contain", "Transferido de");
		cy.get('[data-testid="modal-from"]').should("contain", transactions[0].from);
		cy.get('[data-testid="modal-amount-from"]').should("contain", "R$ 2.078,66");
		cy.get('[data-testid="modal-transferred-to"').should("contain", "Para");
		cy.get('[data-testid="modal-to"]').should("contain", transactions[0].to);
		cy.get('[data-testid="modal-amount-to"]').should("contain", "R$ 2.078,66");
		cy.get('[data-testid="modal-close-button"]').click();
		cy.get('[data-testid="details-modal-body"]').should("not.exist");
	});

	it("should modal 'Depósito'/'Concluída' contain right values", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.contains(transactions[1].title).click();
		cy.get(".details-modal-body").should("be.visible");
		cy.get('[data-testid="modal-title"]').should("contain", transactions[1].title);
		cy.get('[data-testid="modal-status"').should("contain", "Concluída");
		cy.get('[data-testid="modal-transferred-from"').should("contain", "Transferido de");
		cy.get('[data-testid="modal-from"]').should("contain", transactions[1].from);
		cy.get('[data-testid="modal-amount-from"]').should("contain", "R$ 148.856,29");
		cy.get('[data-testid="modal-transferred-to"').should("contain", "Para");
		cy.get('[data-testid="modal-to"]').should("contain", transactions[1].to);
		cy.get('[data-testid="modal-amount-to"]').should("contain", "R$ 148.856,29");
		cy.get('[data-testid="modal-close-button"]').click();
		cy.get('[data-testid="details-modal-body"]').should("not.exist");
	});

	it("should modal 'Movimentação interna'/'Processando' contain right values", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.contains(transactions[2].title).click();
		cy.get(".details-modal-body").should("be.visible");
		cy.get('[data-testid="modal-title"]').should("contain", transactions[2].title);
		cy.get('[data-testid="modal-status"').should("contain", "Processando");
		cy.get('[data-testid="modal-transferred-from"').should("contain", "Transferido de");
		cy.get('[data-testid="modal-from"]').should("contain", transactions[2].from);
		cy.get('[data-testid="modal-amount-from"]').should("contain", "R$ 25.092,8");
		cy.get('[data-testid="modal-transferred-to"').should("contain", "Para");
		cy.get('[data-testid="modal-to"]').should("contain", transactions[2].to);
		cy.get('[data-testid="modal-amount-to"]').should("contain", "R$ 25.092,8");
		cy.get('[data-testid="modal-close-button"]').click();
		cy.get('[data-testid="details-modal-body"]').should("not.exist");
	});
});
