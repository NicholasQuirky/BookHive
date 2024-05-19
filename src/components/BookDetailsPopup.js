import React from "react";
import CollectionCover from "../images/CollectionCover.png";

const BookDetailsPopup = ({
  book,
  onClose,
  onAddToFavorites,
  onUnfavorite,
  collections,
  setCollections,
  collectionId,
}) => {
  return (
    <div className="PopupDialog">
      <div className="PopupContent">
        <span className="CloseButton" onClick={onClose}>
          X
        </span>
        <div className="PopupLeftColumn">
          {book && book.volumeInfo && (
            <>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || CollectionCover}
                alt={book.volumeInfo.title}
              />
              <p className="DialogTitle">{book.volumeInfo.title}</p>
              <p className="DialogAuthor">
                By:{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </p>
            </>
          )}
        </div>
        <div className="PopupRightColumn">
          {book && book.volumeInfo && (
            <>
              <p className="DialogDescription">
                {book.volumeInfo.description || "No description available"}
              </p>
              <div className="PopupButtonHolder">
                <button>Remove from Collection</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
