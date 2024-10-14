// ChildC.js
import React from "react";

function ChildC({ name }) {  // Destructure 'name'
    return (
        <>
            <h1>
                Component C displaying {name}  {/* Display the name */}
            </h1>
        </>
    );
}

export default ChildC;
