import React, { useState } from "react";
import Navbar from "../components/Navbar";
import YourCollections from "../components/YourCollections";
import FavouriteBooks from "../components/FavouriteBooks";

function YourLibrary() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const addToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  return (
    <div>
      <Navbar />
      <YourCollections />
      <FavouriteBooks favoriteBooks={favoriteBooks} />
    </div>
  );
}

export default YourLibrary;
