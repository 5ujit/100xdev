// ChildC.js
import React from "react";
import {data,data1} from './App'

function ChildC() {  
    return (
        <>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <>
                        
                        <h1>My name is{name} </h1>
                        </>
                    )
                }
            }
        </data.Consumer>
        </>
    );
}

export default ChildC;
