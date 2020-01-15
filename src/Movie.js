import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, title, rating, poster }) => {
  console.log(id, title, rating, poster);
  return (
    <Link to={`/detail/${id}`}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <h3>{title}</h3>
        <h4>{rating}</h4>
      </div>
    </Link>
  );
};

export default Movie;
