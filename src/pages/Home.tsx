import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { TableData } from "../components/TableData/TableData";

export const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Navbar />
			<TableData />
		</React.Fragment>
	);
};

export default Home;
