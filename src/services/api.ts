import axios from "axios";
import { environment } from "../environments/environments";

const http = axios.create({
	baseURL: environment.baseUrl,
	headers: {
		"Content-type": "application/json"
	}
});

export const getTransactions = () => {
	return http.get("/transactions");
};

export const getTransaction = (id: number) => {
	return http.get(`/transactions/${id}`);
};
