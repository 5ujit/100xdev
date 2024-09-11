// this is src/App.jsx

import React from 'react';
import Board from './components/Board';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Board />
    </ErrorBoundary>
  );
}

export default App;
