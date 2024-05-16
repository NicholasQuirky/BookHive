import React, { useState, useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import PopupDialog from './PopupDialog';
import './SearchResults.css';

const SearchResults = ({ searchResults, onClose }) => {
  const [clickedBook, setClickedBook] = useState(null);
  const { addBookToFavorites } = useContext(FavoritesContext);

  const handleBookClick = (book) => {
    setClickedBook(book);
  };

  const handleCloseDialog = () => {
    setClickedBook(null);
  };

  const handleAddToFavorites = () => {
    if (clickedBook) {
      addBookToFavorites(clickedBook);
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
                'path_to_placeholder_image'
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
        <PopupDialog
          book={clickedBook}
          onClose={handleCloseDialog}
          onAddToFavorites={handleAddToFavorites}
        />
      )}
    </div>
  );
};

export default SearchResults;
