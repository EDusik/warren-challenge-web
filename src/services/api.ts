import axios from "axios";
import { environment } from "../environments/environments";

import { Transaction } from "../models/Transaction";

const http = axios.create({
	baseURL: environment.baseUrl,
	headers: {
		"Content-type": "application/json"
	}
});

export const getTransactions = () => {
	return http.get<Transaction[]>("/transactions");
};

export const getTransaction = (id: string) => {
	return http.get<Transaction>(`/transactions/${id}`);
};
