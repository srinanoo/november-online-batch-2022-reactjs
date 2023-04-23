import { useState } from "react"; // Function HOOKS ; Hooks will always start with "use..." (Hooks: useState, useEffect, useRef, useContext)

function FnPropsStates(props) {
    const [name, setLogin] = useState("Default Name");
    const [age, setAge] = useState(0);
    const [namesList, setNamesList] = useState(["Sample 1", "Sample 2"]);

    const updateNameState = () => {
        setLogin("Updated Name");
        setAge(30);
        setNamesList(["New Name 1", "New Name 2", "New Name 3"]);
    }

    return (
        <>
            <h2>Function Component</h2>

            <p>Name: {props.dinesh.name}</p>
            <p>Id: {props.dinesh.id + 10}</p>
            <p>Active: {props.dinesh.active.toString()}</p>
            <p>Age: {props.dinesh.age}</p>

            <hr />

            <h3>State Data</h3>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Names List: 
                {namesList.map((v, i) => <li key={i}>{v}</li>)}
            </p>
            <p><button onClick={updateNameState}>Update Name State</button></p>
        </>
    )
}

export default FnPropsStates;