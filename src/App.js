import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourLibrary from "./pages/YourLibrary";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const addToFavorites = (book) => {
    console.log("Adding to favorites:", favoriteBooks);
    setFavoriteBooks((prevFavoriteBooks) => [...prevFavoriteBooks, book]);
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
                />
              }
            />
            <Route
              path="/Home"
              element={
                <Home
                  favoriteBooks={favoriteBooks}
                  addToFavorites={addToFavorites}
                />
              }
            />
            <Route
              path="/YourLibrary"
              element={
                <YourLibrary
                  favoriteBooks={favoriteBooks}
                  addToFavorites={addToFavorites}
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
