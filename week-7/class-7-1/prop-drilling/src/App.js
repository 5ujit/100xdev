import { createContext, useContext } from "react";

const NameContext= createContext();
const App=()=>{
    const name ="Rocky";


    return (
        <NameContext.Provider value={name}>
            <div>
            <ChildA/>
            </div>
        </NameContext.Provider>
    )
}

const ChildA=()=>{
    return (
        <>
      
      <h3> {useContext (NameContext) } is my good friend</h3> 
        <ChildB/>

        </>
    )
}

const ChildB=()=>{
    return (
        <ChildC/>
    )
}




const ChildC=()=>{
    const name =useContext(NameContext);
    return(
        <>
        <h1> Component C is displaying {name} </h1>
        </>
    )
}

export default App;