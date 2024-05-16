import React from "react";
import Navbar from "../components/Navbar";
import YourCollections from "../components/YourCollections";
import FavouriteBooks from "../components/FavouriteBooks";

function YourLibrary({ favoriteBooks, addToFavorites }) {
  return (
    <div>
      <Navbar />
      <YourCollections />
      <FavouriteBooks
        favoriteBooks={favoriteBooks}
        addToFavorites={addToFavorites}
      />
    </div>
  );
}

export default YourLibrary;
