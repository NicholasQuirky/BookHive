import React from 'react';
// import './PopupDialog.css';

const PopupDialog = ({ book, onClose, onAddToFavorites }) => {
  if (!book) return null;

  return (
    <div className="PopupDialog">
      <div className="PopupContent">
        <span className="CloseButton" onClick={onClose}>
          X
        </span>
        <div className="PopupLeftColumn">
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
          <p className="DialogTitle">{book.volumeInfo.title}</p>
          <p className="DialogAuthor">
            By:{" "}
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown"}
          </p>
        </div>
        <div className="PopupRightColumn">
          <p className="DialogDescription">
            {book.volumeInfo.description || "No description available"}
          </p>
          {onAddToFavorites && (
          <button className="AddToFavoritesButton" onClick={onAddToFavorites}>
            Add to Favorites
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
