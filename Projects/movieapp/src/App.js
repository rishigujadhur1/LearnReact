import { useEffect, useState } from "react";
import MovieSection from "./app/components/MovieSection";
import NavbarSection from "./app/components/NavbarSection";
import Login from "./features/account/Login";
// bs5 components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchInput] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const API_URL = "https://www.omdbapi.com/?apikey=3fd1160a";

  return (
    <div data-bs-theme="dark" className="bg-dark">
      <NavbarSection />
      <Container className="mt-3">
        <Login />
        <InputGroup className="mb-3">
          <Button varient="primary" onClick={() => searchMovies(searchTerm)}>
            Search
          </Button>
          <Form.Control
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </InputGroup>
        {movies?.length > 0 ? (
          <Row>
            {movies.map((movie, i) => (
              <Col xs={6} md={4} key={i}>
                <MovieSection movie={movie} />
              </Col>
            ))}
          </Row>
        ) : (
          <h1>404 Not Found</h1>
        )}
      </Container>
    </div>
  );
}
export default App;
