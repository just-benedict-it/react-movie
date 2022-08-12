import { useState, useEffect } from "react";
import Movie from "../Components/movie.js";
import React from "react";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>Movies</h1>
      <h2>{loading ? "Loading . . ." : null}</h2>
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            medium_cover_image={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
