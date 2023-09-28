import React from "react";

const MovieSection = (props) => {
  return (
    <div className="movies">
      <h2>{props.movie.title}</h2>
      <img alt="poster" src={props.movie.Poster}></img>
      <p>{props.movie.year}</p>
      <span>{props.movie.type}</span>
    </div>
  );
};

export default MovieSection;
