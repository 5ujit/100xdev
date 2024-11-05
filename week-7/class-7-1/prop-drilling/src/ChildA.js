// ChildA.js
import React from "react";
import ChildB from "./ChildB";

function ChildA({ name }) {  
    return (
        <>
            <ChildB name={name} /> 
            <h2>
                {name} is my good friend 
            </h2>
        </>
    );
}

// export default ChildA;
