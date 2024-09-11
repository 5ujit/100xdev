// this is src/chess/ChessLogic.jsx

import { Chess } from 'chess.js';  // Correct import for named export

const chess = new Chess();

// Log available methods to the console
console.log(Object.keys(chess));  // Correctly using Object.keys to list methods

export const getBoard = () => {
  const board = chess.board();
  return board.map(row => row.map(square => square ? `${square.color}${square.type.toUpperCase()}` : ''));
};

export const movePiece = (from, to) => {
  const move = chess.move({ from: `${from.y}${from.x}`, to: `${to.y}${to.x}` });
  return move;
};

// Check if the game is over using available methods
export const isGameOver = () => {
  if (typeof chess.game_over === 'function') {
    return chess.game_over();
  }
  // Return a default false if game_over is not a function
  return false;
};
