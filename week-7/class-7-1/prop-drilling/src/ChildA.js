// ChildA.js
import React from "react";
import ChildB from "./ChildB";

function ChildA({ name }) {  // Destructure the 'name' prop
    return (
        <>
            <ChildB name={name} />  {/* Pass 'name' to ChildB */}
            <h2>
                {name} is my good friend  {/* Display the name */}
            </h2>
        </>
    );
}

export default ChildA;
