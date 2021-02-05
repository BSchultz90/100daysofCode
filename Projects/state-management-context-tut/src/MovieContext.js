import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
    //   Render out the State in the Provider
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
