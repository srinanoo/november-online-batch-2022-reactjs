import { useContext } from "react";
// import { loginContext } from "../App";

function ChildComp2() {
    // const logged = useContext(loginContext);
    return (
        <>
            <h3>Child Component 2</h3>

            {
                // logged 
                // && 
                <div>
                    Only for Logged in users
                </div>
            }
        </>
    )
}

export default ChildComp2;