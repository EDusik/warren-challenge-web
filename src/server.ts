import { Server } from "miragejs";

import transactions from "./mocks/transactions.json";
import transaction from "./mocks/transactions.json";

import { environment } from "./environments/environments";

export function makeServer() {
	let server = new Server({
		routes() {
			this.get(`${environment.baseUrl}/transactions`, () => transactions);
			this.get(`${environment.baseUrl}/transactions/:id`, () => transaction);
		}
	});

	return server;
}
