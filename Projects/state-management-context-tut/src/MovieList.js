import React, { useState } from "react";
import Movie from "./Movie";

export const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Jerry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game O' Thorns",
      price: "$10",
      id: 255555,
    },
    {
      name: "Recursion",
      price: "$10",
      id: 23524,
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};

export default MovieList;
