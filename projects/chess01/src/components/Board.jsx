import React, { useState, useEffect } from 'react';
import Piece from './Piece';
import '../styles/Board.css';
import { getBoard, movePiece, isGameOver } from '../chess/ChessLogic'; // Ensure this path is correct

const Board = ({ isDarkTheme }) => {
  const [board, setBoard] = useState(getBoard());
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquareClick = (x, y) => {
    const square = { x, y };
    if (selectedPiece) {
      const move = movePiece(selectedPiece, square);
      if (move) {
        setBoard(getBoard());
        setSelectedPiece(null);
      }
    } else {
      setSelectedPiece(square);
    }
  };

  useEffect(() => {
    if (isGameOver()) {
      alert("Game Over!");
    }
  }, [board]);

  const renderSquare = (x, y) => {
    const isBlack = (x + y) % 2 === 1;
    return (
      <div
        key={`${x}-${y}`}
        onClick={() => handleSquareClick(x, y)}
        className={`square ${isBlack ? (isDarkTheme ? 'dark-square' : 'black-square') : (isDarkTheme ? 'dark-square' : 'white-square')}`}
      >
        <Piece piece={board[x][y]} />
      </div>
    );
  };

  return (
    <div className={`board ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {board.map((row, x) => row.map((_, y) => renderSquare(x, y)))}
    </div>
  );
};

export default Board;
