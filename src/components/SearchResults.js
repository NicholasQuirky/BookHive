import React, { useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import PopupDialog from "./PopupDialog";
import "./SearchResults.css";
import CollectionCover from "../images/BookCover.png";
import SeeMoreButton from "./SeeMoreButton";

const SearchResults = ({
  searchResults,
  setSearchResults,
  searchQuery,
  onClose,
  addToFavorites,
  favoriteBooks,
}) => {
  const [clickedBook, setClickedBook] = useState(null);
  const [page, setPage] = useState(1);

  const handleBookClick = (book) => {
    setClickedBook(book);
  };

  const handleCloseDialog = () => {
    setClickedBook(null);
  };

  const handleAddToFavorites = () => {
    if (clickedBook) {
      addToFavorites(clickedBook);
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
              src={book.volumeInfo.imageLinks?.thumbnail || CollectionCover}
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
        <PopupDialog
          book={clickedBook}
          onClose={handleCloseDialog}
          onAddToFavorites={handleAddToFavorites}
        />
      )}
      <SeeMoreButton
        query={searchQuery}
        page={page}
        setBooks={setSearchResults}
        setPage={setPage}
      />
    </div>
  );
};

export default SearchResults;
