import { useEffect, useState } from "react";

const UseEffectHook =()=> {
    const [username ,setusername] = useState("");
    useEffect(() => {
        console.log("this is userEffectHook");
    },[username]);
    return (
        <>
        <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        />
        </>
    );
};

export default UseEffectHook;