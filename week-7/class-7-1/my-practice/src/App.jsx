import React from 'react';

const App = () => {
  const name = "Roky"; // Define the name
  
  // ChildC component
  const ChildC = ({ name }) => {
    return (
      <h1>Component C displaying {name}</h1>  {/* Display 'name' in ChildC */}
    );
  };

  // ChildB component
  const ChildB = ({ name }) => {
    return (
      <ChildC name={name} />  {/* Pass 'name' to ChildC */}
    );
  };

  // ChildA component
  const ChildA = ({ name }) => {
    return (
      <>
        <ChildB name={name} />  {/* Pass 'name' to ChildB */}
        <h1>{name} is my good friend</h1>  {/* Display 'name' in ChildA */}
      </>
    );
  };

  return (
    <div>
      <ChildA name={name} />  {/* Pass 'name' to ChildA */}
    </div>
  );
};

export default App;
