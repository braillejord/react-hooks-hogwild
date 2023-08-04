import React from "react";
import PreviewTile from "./PreviewTile"

function TileContainer({ hogs }) {
    return (
        <div className="ui container cards">
            {hogs.map((hog) => (
                <PreviewTile key={hog.name} name={hog.name} image={hog.image} />
            ))
            }
        </div>
    )
}

export default TileContainer;