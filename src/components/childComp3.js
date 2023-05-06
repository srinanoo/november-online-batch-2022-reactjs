import { useContext } from "react";
import { loginContext } from "../App";

function ChildComp3(props) {
    const logged = useContext(loginContext);
    return (
        <>
            <h3>Child Component 3</h3>

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

export default ChildComp3;