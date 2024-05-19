import React from "react";
import Navbar from "../components/Navbar";
import YourCollections from "../components/YourCollections";
import FavouriteBooks from "../components/FavouriteBooks";

function YourLibrary({ favoriteBooks, addToFavorites, removeFromFavorites, collections, setCollections, handleCreateCollection }) {
  return (
    <div>
      <Navbar />
      <YourCollections 
        collections={collections}
        setCollections={setCollections}
        handleCreateCollection={handleCreateCollection}
      />
      <FavouriteBooks
        favoriteBooks={favoriteBooks}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        

      />
    </div>
  );
}

export default YourLibrary;