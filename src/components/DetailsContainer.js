import React, { useState } from "react";
import DetailTile from "./DetailTile";

function DetailsContainer({ clickedHog }) {
    console.log(clickedHog)
    return (
        <div className="detailsContainer">
            <DetailTile clickedHog={clickedHog} />
        </div>
    )
}

export default DetailsContainer;