import React, { useState } from "react";
import Nav from "./Nav";
// import Filter from "./Filter";
// import Sort from "./Sort";
import TileContainer from "./TileContainer";
import DetailsContainer from "./DetailsContainer";

import hogs from "../porkers_data";

function App() {
	const [clickedHog, setClickedHog] = useState(hogs.find((hog) => hog))

	function handleHogClick(name) {
		const clickedHogDetails = hogs.find((hog) => {
			if (hog.name === name) {
				return true;
			}
		})
		setClickedHog(clickedHogDetails)
	}

	return (
		<div className="App">
			<Nav />
			{/* <Filter />
			<Sort /> */}
			<div className="mainContent">
				<TileContainer hogs={hogs} handleHogClick={handleHogClick} />
				<DetailsContainer clickedHog={clickedHog} />
			</div>
		</div>
	);
}

export default App;
