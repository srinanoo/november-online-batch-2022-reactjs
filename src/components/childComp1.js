import { useContext } from "react";
import { loginContext } from "../App";

function ChildComp1() {
    const logged = useContext(loginContext);
    return (
        <>
            <h3>Child Component 1</h3>

            {
                logged 
                && 
                <div>
                    Only for Logged in users
                </div>
            }
        </>
    )
}

export default ChildComp1;