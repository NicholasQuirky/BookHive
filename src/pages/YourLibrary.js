import React from "react";
import Navbar from "../components/Navbar";
import YourCollections from "../components/YourCollections";
import FavouriteBooks from "../components/FavouriteBooks";

function YourLibrary({ favoriteBooks, addToFavorites, removeFromFavorites }) {
  return (
    <div>
      <Navbar />
      <YourCollections />
      <FavouriteBooks
        favoriteBooks={favoriteBooks}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default YourLibrary;
