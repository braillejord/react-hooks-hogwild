import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sort from "./Sort";
import AddHogs from "./AddHogs"
import TileContainer from "./TileContainer";
import DetailsContainer from "./DetailsContainer";

import hogs from "../porkers_data";

function App() {
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs)
	const [clickedHog, setClickedHog] = useState(hogs.find((hog) => hog))


	function handleHogClick(name) {
		const clickedHogDetails = hogs.find((hog) => {
			if (hog.name === name) {
				return true;
			}
		})
		setClickedHog(clickedHogDetails)
	}

	function filterHogsByGrease(value) {
		setHogsToDisplay(hogs.filter((hog) => {
			if (value === 'greasedHogs' && hog.greased) {
				return true;
			} else if (value === 'nonGreasedHogs' && !hog.greased) {
				return true;
			} else if (value === 'allHogs') {
				return true;
			}
		}))
	}

	function sortHogs(value) {
		if (value === "byName") {
			const sortByName = hogs.sort((a, b) => a.name.localeCompare(b.name))
			setHogsToDisplay([...sortByName])
		} else if (value === "byWeight") {
			const sortByWeight = hogs.sort(function (a, b) {
				if (a.weight < b.weight) {
					return -1
				}
				if (a.weight > b.weight) {
					return 1
				}
				return 0;
			})
			setHogsToDisplay([...sortByWeight])
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter filter={filterHogsByGrease} />
			<Sort sort={sortHogs} />
			<AddHogs />
			<div className="mainContent">
				<TileContainer hogs={hogsToDisplay} handleHogClick={handleHogClick} />
				<DetailsContainer clickedHog={clickedHog} />
			</div>
		</div>
	);
}

export default App;
