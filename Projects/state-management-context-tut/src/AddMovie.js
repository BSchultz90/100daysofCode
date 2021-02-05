import React, { useState } from "react";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form>
      <input type="text" name="name" />
      <input type="text" price="price" />
      <button>Submit</button>
    </form>
  );
};
