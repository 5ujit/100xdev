// src/components/Child.jsx
import React from 'react';
import Grandchild from './Grandchild';

const Child = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <Grandchild message={message} />
    </div>
  );
};

export default Child;