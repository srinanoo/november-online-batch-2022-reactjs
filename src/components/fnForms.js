import { useRef, useState } from "react";
import axios from "axios";

function FnForms() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let usernameRef = useRef("");
    let passwordRef = useRef("");

    const handleStateSubmit = () => { // most preferred
        console.log('Handling Submission...');
        console.log("Username : " + username);
        console.log("Password : " + password);

        let dataObj = {
            "username": username,
            "password": password
        };

        // axios.get(`http://localhost:5000/?username=${username}&password=${password}`)
        //     .then(res => console.log(res));

        // axios.post(`http://localhost:5000`, dataObj)
        //     .then(res => console.log(res));

        // axios.put(`http://localhost:5000`, dataObj)
        //     .then(res => console.log(res));

        // axios.delete(`http://localhost:5000?username=${username}`)
        //     .then(res => console.log(res));
        

        axios.get(`https://api.zippopotam.us/us/94501`)
            .then(res => {
                console.log(res);
            });
    }

    const handleRefSubmit = () => { // next preferred
        console.log('Handling Ref Submission...');
        console.log("Username : " + usernameRef.current.value);
        console.log("Password : " + passwordRef.current.value);
    }

    const handleDOMSubmit = () => { // least preferred
        console.log('Handling DOM Submission...');
        console.log("Username : " + document.getElementById("username").value);
        console.log("Password : " + document.getElementById("password").value);
    }

    const handleSubmit = (e) => { // least preferred
        e.preventDefault();
        console.log('Handling Form Submission...');
        console.log("Username : " + document.getElementById("txtUsername").value);
        console.log("Password : " + document.getElementById("txtPassword").value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Anchor tag is clicked...");
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <p><a href="https://google.com" onClick={handleClick}>Click Here</a></p>

            <h3>React Form using State Management</h3>
            {/* <input type="text" placeholder="Username:" onChange={(e) => setUsername(e.target.value)} /><br />
            <input type="text" placeholder="Password:" onChange={(e) => setPassword(e.target.value)} /><br /> */}

            <input type="text" placeholder="Username:" onChange={updateUsername} /><br />
            <input type="text" placeholder="Password:" onChange={updatePassword} /><br />
            
            <button onClick={handleStateSubmit}>Submit</button><br />
            
            <hr />

            <h3>React Form using useRef</h3>
            <input type="text" placeholder="Username:" ref={usernameRef} /><br />
            <input type="text" placeholder="Password:" ref={passwordRef} /><br />
            <button onClick={handleRefSubmit}>Submit</button><br />

            <hr />

            <h3>React Form using DOM</h3>
            <input type="text" placeholder="Username:" id="username" /><br />
            <input type="text" placeholder="Password:" id="password" /><br />
            <button onClick={handleDOMSubmit}>Submit</button><br />

            <hr />

            <h3>React Form with Submit using DOM</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username:" id="txtUsername" /><br />
                <input type="text" placeholder="Password:" id="txtPassword" /><br />
                {/* <input type="button" onClick={handleSubmit} value="Submit" /><br /> */}
                <button>Submit</button>
            </form>
        </>
    )
}

export default FnForms;