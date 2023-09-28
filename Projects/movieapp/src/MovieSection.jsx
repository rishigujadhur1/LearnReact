import React from "react";

const MovieSection = (props) => {
  return (
    <div className="movies">
      <div>
        <h2>{props.movie.title}</h2>
      </div>

      <div>
        <img alt="poster" src={props.movie.Poster}></img>
      </div>

      <div>
        <p>{props.movie.year}</p>
        <span>{props.movie.type}</span>
      </div>
    </div>
  );
};

export default MovieSection;
