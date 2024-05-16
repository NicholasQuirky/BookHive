import React, { useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./SearchResults.css";

const SearchResults = ({ searchResults, onClose }) => {
  const [clickedBook, setClickedBook] = useState(null);
  const { addBookToFavorites } = useContext(FavoritesContext); // Use addBookToFavorites from context

  const handleBookClick = (book) => {
    setClickedBook(book);
  };

  const handleCloseDialog = () => {
    setClickedBook(null);
  };

  const handleAddToFavorites = () => {
    if (clickedBook) {
      addBookToFavorites(clickedBook); // Use addBookToFavorites to add book to favorites
      setClickedBook(null);
    }
  };

  return (
    <div className="SearchResultsContainer">
      <div className="SearchResultsHeader">
        <h4>Search Results</h4>
        <button onClick={onClose} className="CloseButton">
          X
        </button>
      </div>
      <div className="SearchResults">
        {searchResults.map((book, index) => (
          <div
            key={index}
            className="SearchResultBook"
            onClick={() => handleBookClick(book)}
          >
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "path_to_placeholder_image"
              }
              alt={book.volumeInfo.title}
            />
            <div className="SearchResultBookInfo">
              <h3 className="SearchResultBookTitle">{book.volumeInfo.title}</h3>
              <p className="SearchResultBookAuthor">
                by{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
      {clickedBook && (
        <div className="PopupDialog">
          <div className="PopupContent">
            <span className="CloseButton" onClick={handleCloseDialog}>
              X
            </span>
            <div className="PopupLeftColumn">
              <img
                src={clickedBook.volumeInfo.imageLinks?.thumbnail}
                alt={clickedBook.volumeInfo.title}
              />
              <p className="DialogTitle">{clickedBook.volumeInfo.title}</p>
              <p className="DialogAuthor">
                By:{" "}
                {clickedBook.volumeInfo.authors
                  ? clickedBook.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </p>
            </div>
            <div className="PopupRightColumn">
              <p className="DialogDescription">
                {clickedBook.volumeInfo.description ||
                  "No description available"}
              </p>
            </div>
            <button
              className="AddToFavoritesButton"
              onClick={handleAddToFavorites}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
