import React, { useState } from "react";

function AddHogs() {
    const [newHogName, setNewHogName] = useState("")
    const [newHogSpecialty, setNewHogSpecialty] = useState("")
    const [newHogGrease, setNewHogGrease] = useState("")
    const [newHogWeight, setNewHogWeight] = useState("")
    const [newHogAward, setNewHogAward] = useState("")
    const [newHogImage, setNewHogImage] = useState("")

    return (
        <form className="newHogForm" >
            <div className="ui input">
                <input className="ui input" type="text" name="text" placeholder="hog name" onChange={(e) => setNewHogName(e.target.value)} />
                <input className="ui input" type="text" name="text" placeholder="hog specialty" onChange={(e) => setNewHogSpecialty(e.target.value)} />
                <select className="ui dropdown" onChange={(e) => setNewHogGrease(e.target.value)}>
                    <option value="select">greased?</option>
                    <option value="true">yes</option>
                    <option value="false">no</option>
                </select>
                <input className="ui input" type="text" name="text" placeholder="hog weight" onChange={(e) => setNewHogWeight(e.target.value)} />
                <input className="ui input" type="text" name="text" placeholder="highest award achieved" onChange={(e) => setNewHogAward(e.target.value)} />
                <input className="ui input" type="text" name="text" placeholder="hog image" onChange={(e) => setNewHogImage(e.target.value)} />
                <button className="ui button">Add New Hog</button>
            </div>
        </form>
    )
}

export default AddHogs;