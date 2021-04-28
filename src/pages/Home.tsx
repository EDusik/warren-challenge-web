import React from "react";

import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Search } from "../components/Search/Search";
import { TransactionData } from "../components/TransactionData/TransactionData";

export const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Search />
			<TransactionData />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
