
import React, { useState, useCallback, useRef } from "react";
import axios from "axios";
import MovieDisplay from "./MovieDisplay";
import MovieError from "./MovieError";

const MovieSearch=()=>{  
  const [movieName,setMovieName]=useState("");
  const [movieData,setMovieData]=useState(null);
  const [error, setError]=useState(null);


  //useref to focus input field
  const inputRef= useRef(null);

  const handleChange= (e)=> setMovieNmae(e.target.value);


  const handleSearch= useCallback(()=>{
    if(!movieName) return;
    setMovieData(null);
    setError(null);


    axios
      .get(`http://www.omdbapi.com/?t=${movieName}&apikey=f665b7e5`)
      .then((response)=>{
        if(response.data.Response==="True"){
          setMovieData(response.data);

          setMovieName("")
          inputRef.current.focus();

        }else{
          setError(response.data.Error);
        }
      })
      .catch((err)=>{
        setError("Failed to fetch data!")
        console.error(err)

      })


  },[movieName])


  return(
    <div> 
      <h1>Movie Rating Finder </h1>
      < input
      ref={inputRef}
      placeholder="Enter movie name"
      value={movieName}
      onChange={handleChange} /> 

      <button onClick={handleSearch}> Search</button>
      {movieData && <MovieDisplay movie={movieData} />}
      {error && <MovieError message={error}/>}

    </div>
  )


}

export default MovieSearch 
;