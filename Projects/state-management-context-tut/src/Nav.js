import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { MovieList } from "./MovieList";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Brice Schultz</h3>
      <p>List of Movies: {movies.length} </p>
    </div>
  );
};

export default Nav;
