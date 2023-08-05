import React, { useState } from "react";

function DetailTile({ clickedHog }) {
    return (
        <div className="detailedHog ui pink card">
            <img className="image" src={clickedHog.image} alt={clickedHog.name} />
            <div className="ui large header">{clickedHog.name}</div>
            <div className="content">{"Weight: " + clickedHog.weight + "lbs"}</div>
            <div className="content">{"Greased: "}{clickedHog.greased ? "yes" : "no"}</div>
            <div className="content">{"Specialty: " + clickedHog.specialty}</div>
            <div className="content">{"Highest Medal Achieved: " + clickedHog["highest medal achieved"]}</div>
        </div >
    )
}

export default DetailTile;