import React from "react";

function PreviewTile({ name, image }) {
    return (
        <div className="ui column pink centered card" >
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