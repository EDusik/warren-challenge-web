import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContextProvider } from "./context/reducer";

import GlobalStyle from "./styles/Global/Global";

ReactDOM.render(
	<React.StrictMode>
		<GlobalContextProvider>
			<GlobalStyle />
			<App />
		</GlobalContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
