import React, { useState } from "react";
import "./SearchResults.css"; // Import the CSS file

const SearchResults = ({
  searchResults,
  onClose,
  selectedBook,
  onAddToFavorites, // added this prop for handling favorites
}) => {
  const [clickedBook, setClickedBook] = useState(null);

  const handleBookClick = (book) => {
    setClickedBook(book);
  };

  const handleCloseDialog = () => {
    setClickedBook(null);
  };

  const handleAddToFavorites = () => {
    onAddToFavorites(clickedBook);
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
              onClick={handleAddToFavorites}
              className="AddToFavoritesButton"
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
