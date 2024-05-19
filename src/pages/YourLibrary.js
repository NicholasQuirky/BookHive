import React from "react";
import Navbar from "../components/Navbar";
import YourCollections from "../components/YourCollections";
import FavouriteBooks from "../components/FavouriteBooks";

function YourLibrary({
  favoriteBooks,
  addToFavorites,
  removeFromFavorites,
  collections,
  setCollections,
  handleCreateCollection,
  addBookToCollection,
}) {
  return (
    <div>
      <Navbar />
      <YourCollections
        collections={collections}
        setCollections={setCollections}
        handleCreateCollection={handleCreateCollection}
        addBookToCollection={addBookToCollection}
      />
      <FavouriteBooks
        favoriteBooks={favoriteBooks}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        addBookToCollection={addBookToCollection}
        collections={collections}
        setCollections={setCollections}
      />
    </div>
  );
}

export default YourLibrary;
