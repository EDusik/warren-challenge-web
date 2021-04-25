/* eslint-disable no-undef */

// Add intellisense
/// <reference types="cypress" />

import transactions from "../fixtures/transactions.json";

describe("Home - Cypress Integration Test", async () => {
	it("should show the correct logo text", () => {
		cy.goToTheHomePage();

		cy.get("[data-testid='logo'").should("contain", "Eduwarren");
	});

	it("should show the correct data transaction[0]", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.get("h1").should("contain", transactions[0].title);
		cy.get("p").should("contain", transactions[0].description);
		cy.get("b").should("contain", transactions[0].status);
		cy.get("span").should("contain", "R$ 2.078,66");
	});

	it("should show the correct data transaction[1]", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.get("h1").should("contain", transactions[1].title);
		cy.get("p").should("contain", transactions[1].description);
		cy.get("b").should("contain", transactions[1].status);
		cy.get("span").should("contain", "R$ 148.856,29");
	});

	it("should show the correct data transaction[2]", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.get("h1").should("contain", transactions[2].title);
		cy.get("p").should("contain", transactions[2].description);
		cy.get("b").should("contain", transactions[2].status);
		cy.get("span").should("contain", "R$ 25.092,8");
	});

	it("should show the correct footer text", () => {
		cy.getTransactions();
		cy.goToTheHomePage();

		cy.get("[data-testid='footer'").should("contain", "Develop by 👨‍💻 Eduardo Dusik");
	});
});
