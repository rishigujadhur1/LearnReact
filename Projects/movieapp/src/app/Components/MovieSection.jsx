import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const MovieSection = (props) => {
  return (
    <Card className="mx-auto my-3" bg="dark" text="light">
      <Card.Img alt="poster" src={props.movie.Poster} />
      <Card.Body>
        <Card.Title>{props.movie.Title}</Card.Title>
        <Card.Text>
          <Badge bg="secondary">{props.movie.Year}</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieSection;
