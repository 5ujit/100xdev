import React from 'react';

const Piece = ({ piece }) => {
  const pieceSymbols = {
    wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
    bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟'
  };

  return <span style={{ fontSize: '40px' }}>{pieceSymbols[piece]}</span>;
};

export default Piece;
