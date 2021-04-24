import React from "react";

import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { TableData } from "../components/TableData/TableData";

export const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Navbar />
			<TableData />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
