//Components/ MovieDisplay.jsx
import React from "react";

const MovieDisplay = ({ movie }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieDisplay;
