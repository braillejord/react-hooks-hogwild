import React from "react";

function Filter({ filter }) {
    return (
        <select className="ui dropdown" onChange={(e) => filter(e.target.value)}>
            <option value="allHogs">All Hogs</option>
            <option value="greasedHogs">Greased Hogs</option>
            <option value="nonGreasedHogs">Non-Greased Hogs</option>
        </select>
    )
}

export default Filter;