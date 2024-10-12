import React from "react";
function Header(props){
console.log(props);

    return <>  <h1>Hello {props.name} </h1>
    {/* <h2>this is second line </h2> */}

</>
}

export default Header;

