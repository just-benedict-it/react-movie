import { useState, useEffect } from "react";
import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
function Movie({ id, title, year, medium_cover_image, summary, genres }) {
  return (
    <div>
      <h3>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h3>
      <img src={medium_cover_image}></img>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
