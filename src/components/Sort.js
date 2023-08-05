import React from "react";

function Sort({ sort }) {
    return (
        <select className="ui dropdown" onChange={(e) => sort(e.target.value)}>
            <option value="allHogs">Sort Hogs</option>
            <option value="byName">Sort by Name</option>
            <option value="byWeight">Sort by Weight</option>
        </select >
    )
}

export default Sort;