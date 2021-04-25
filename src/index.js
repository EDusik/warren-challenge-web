import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContextProvider } from "./context/reducer";

import GlobalStyle from "./styles/Global/Global";
import { makeServer } from "./server";

if (Window.Cypress) {
	makeServer();
}

ReactDOM.render(
	<React.StrictMode>
		<GlobalContextProvider>
			<GlobalStyle />
			<App />
		</GlobalContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
