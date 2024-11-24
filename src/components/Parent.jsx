import { useState } from "react";
const Parent = () => {
    const [username, setusername] = useState("Test");

    const changeUsername = () => {
        setusername("New Test");
    };
    return (
            <>
                <p>the value is {username}</p>
                <button onClick={() => changeUsername()}> clickme</button>
            </>
        )
    };

export default Parent;