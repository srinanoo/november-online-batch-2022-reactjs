import { useState, useEffect, useRef } from "react";

function FnHooks() {

    const [name, setName] = useState("Dinesh");
    const [count, setCount] = useState(0);
    const [userData, setUserData] = useState([]);
    const [userObj, setUserObj] = useState({});
    const [login, setLogin] = useState(false);
    const oldName = useRef(""); // getSnapshotBeforeUpdate

    const updateNameState = () => {
        setName("Tony");
        // setCount(1);
        // setLogin(true);
    }

    const updateLoginState = () => {
        setLogin(true);
    }

    // Example of componentDidUpdate (repeated called)
    // useEffect(() => {
    // });

    // Example of componentDidMount (called once)
    // useEffect(() => {
    // }, []);

    // Example of componentDidUpdate (called when state variable is updated)
    // useEffect(() => {
    // },[<state variable1>, <state variable2>, ...]);

    useEffect(() => { // behaving like componentDidUpdate
        console.log("useEffect.... count");

        oldName.current = name;

        setCount(count => count + 1);
    }, []); // if empty dependency is used then this is behaving like componentDidMount

    // useEffect(() => {
    //     console.log("useEffect.... Name");

    //     setName("Tony");
    // }, []);

    console.log("rendering...");

    return (
        <>
            <h1>Function Hooks</h1>
            <div>
                <p>Name: {name}</p>
                <p>Old Name: {oldName.current}</p>
                <p>Count: {count}</p>
                <p>Login: {login.toString()}</p>
                <p><button onClick={updateNameState}>Update Name State</button></p>
                <p><button onClick={updateLoginState}>Update Login State</button></p>
            </div>
        </>
    )
}

export default FnHooks;