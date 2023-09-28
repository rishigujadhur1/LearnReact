import { useEffect, useState } from "react";
import MovieSection from "./MovieSection";

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
    <div>
      <h1>Movie List</h1>

      <div className="search">
        <input
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <div key={i}>
              <MovieSection movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
}
export default App;
