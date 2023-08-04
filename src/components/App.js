import React from "react";
import Nav from "./Nav";
// import Filter from "./Filter";
// import Sort from "./Sort";
import TileContainer from "./TileContainer";
// import DetailsContainer from "./DetailsContainer";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			{/* <Filter />
			<Sort /> */}
			<TileContainer hogs={hogs} />
			{/* <DetailsContainer /> */}
		</div>
	);
}

export default App;
