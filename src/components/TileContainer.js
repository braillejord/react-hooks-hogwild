import React from "react";
import PreviewTile from "./PreviewTile"

function TileContainer({ hogs, handleHogClick }) {
    return (
        <div className="ui grid container cards">
            {hogs.map((hog) => (
                <PreviewTile key={hog.name} name={hog.name} image={hog.image} handleHogClick={handleHogClick} />
            ))
            }
        </div>
    )
}

export default TileContainer;