import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourLibrary from "./pages/YourLibrary";
import SearchResults from "./components/SearchResults"; // Import SearchResults component
import { FavoritesProvider } from "./context/FavoritesContext";
import CollectionCover from "./images/BookCover.png";



function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [collections, setCollections] = useState([]);

  const addToFavorites = (book) => {
    console.log("Adding to favorites:", favoriteBooks);
    setFavoriteBooks((prevFavoriteBooks) => [...prevFavoriteBooks, book]);
  };

  const removeFromFavorites = (bookToRemove) => {
    setFavoriteBooks((prevFavoriteBooks) =>
      prevFavoriteBooks.filter((book) => book !== bookToRemove)
    );
  };

  const handleCreateCollection = (collectionName) => {
    const newCollection = {
      name: collectionName,
      photo: CollectionCover,
      books: [] // Initialize an empty array for storing books
    };
    setCollections((collections)=> [...collections, newCollection]);
  };

 
  return (
    <div>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  favoriteBooks={favoriteBooks}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route
              path="/Home"
              element={
                <Home
                  favoriteBooks={favoriteBooks}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route
              path="/YourLibrary"
              element={
                <YourLibrary
                  favoriteBooks={favoriteBooks}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  setCollections={setCollections}
                  collections={collections}
                  handleCreateCollection={handleCreateCollection}
                />
              }
            />
            <Route // Add Route for SearchResults
              path="/Search"
              element={
                <SearchResults
                  searchResults={[]} // Pass empty array as initial search results
                  setSearchResults={() => {}} // Placeholder for setSearchResults
                  searchQuery=""
                  onClose={() => {}} // Placeholder for onClose function
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  favoriteBooks={favoriteBooks}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </div>
  );
}

export default App;
