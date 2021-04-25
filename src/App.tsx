import { useContext } from "react";
import { GlobalContext } from "./context/reducer";

import Home from "./pages/Home";
import { DetailsModal } from "./components/DetailsModal/DetailsModal";

function App() {
	const { context } = useContext(GlobalContext);
	return (
		<div className="App">
			<Home />
			{context.isDetailsModalOpen && <DetailsModal />}
		</div>
	);
}

export default App;
