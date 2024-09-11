import React, { useState } from 'react';

const ThemeToggle = ({ onToggle }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    onToggle(!isDarkTheme);
  };

  return (
    <button onClick={handleToggle} style={{ position: 'absolute', top: '10px', right: '10px' }}>
      {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
};

export default ThemeToggle;
