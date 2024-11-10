//Compoents/ MovieSearch.jsx
import React, { useState } from "react";
import axios from "axios";
import MovieDisplay from "./MovieDisplay";
import MovieError from "./MovieError";

const MovieSearch = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => setMovieName(e.target.value);

  const handleSearch = () => {movieData
    if (!movieName) return;
    setMovieData(null);
    setError(null);

    // Replace with actual API key
    axios
      .get(`http://www.omdbapi.com/?t=${movieName}&apikey=f665b7e5`)
      .then((response) => {
        if (response.data.Response === "True") {
          setMovieData(response.data);
        } else {
          setError(response.data.Error);
        }
      })
      .catch((err) => {
        setError("Failed to fetch data!");
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Movie Rating Finder</h1>
      <input
        type="text"
        placeholder="Enter movie name"
        value={movieName}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      {movieData && <MovieDisplay movie={movieData} />}
      {error && <MovieError message={error} />}
    </div>
  );
};

export default MovieSearch;
