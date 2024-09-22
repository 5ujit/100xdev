// src/components/Grandchild.jsx
import React from 'react';

const Grandchild = ({ message }) => {
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>Message: {message}</p>
    </div>
  );
};

export default Grandchild;