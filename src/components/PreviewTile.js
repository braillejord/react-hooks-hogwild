import React from "react";

function PreviewTile({ name, image, handleHogClick }) {
    return (
        <div className="ui four wide column centered card" onClick={() => handleHogClick(name)} >
            <div className="image">
                <img className="hogImage" src={image} alt={name} />
            </div>
            <div className="content">
                <a className="ui header hogName">{name}</a>
            </div>
        </div>
    )
}

export default PreviewTile;