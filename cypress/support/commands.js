/* eslint-disable no-undef */
import { environment } from "../../src/environments/environments";

Cypress.Commands.add("goToTheHomePage", () => {
	cy.visit("/");
});

Cypress.Commands.add("getTransactions", () => {
	cy.route("GET", `${environment.baseUrl}transactions`, "fixture:transactions.json");
});
