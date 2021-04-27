import React from "react";

import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { TransactionData } from "../components/TransactionData/TransactionData";

export const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Navbar />
			<TransactionData />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
