import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const addBookToFavorites = (book) => {
    setFavoriteBooks((prevFavorites) => [...prevFavorites, book]);
  };

  const removeBookFromFavorites = (bookId) => {
    setFavoriteBooks((prevFavorites) =>
      prevFavorites.filter((book) => book.id !== bookId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteBooks, addBookToFavorites, removeBookFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
