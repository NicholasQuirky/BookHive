import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourLibrary from "./pages/YourLibrary";
import SearchResults from "./components/SearchResults";
import { FavoritesProvider } from "./context/FavoritesContext";

// Define the generateUniqueId function
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [collections, setCollections] = useState([]);

  const addToFavorites = (book) => {
    console.log("Adding to favorites:", book);
    setFavoriteBooks((prevFavoriteBooks) => [...prevFavoriteBooks, book]);
  };

  const removeFromFavorites = (bookToRemove) => {
    setFavoriteBooks((prevFavoriteBooks) =>
      prevFavoriteBooks.filter((book) => book !== bookToRemove)
    );
  };

  const handleCreateCollection = (collectionName) => {
    const newCollection = {
      id: generateUniqueId(),
      name: collectionName,
      dateAdded: new Date(),
      books: [],
    };
    setCollections((collections) => [...collections, newCollection]);
  };

  return (
    <div>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index // route "/"
              element={
                <Home
                  favoriteBooks={favoriteBooks}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  collections={collections}
                  setCollections={setCollections}
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
                  collections={collections}
                  setCollections={setCollections}
                  handleCreateCollection={handleCreateCollection}
                />
              }
            />
            <Route
              path="/Search"
              element={
                <SearchResults
                  searchResults={[]}
                  setSearchResults={() => {}}
                  searchQuery=""
                  onClose={() => {}}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  favoriteBooks={favoriteBooks}
                  setCollections={setCollections}
                  handleCreateCollection={handleCreateCollection}
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
