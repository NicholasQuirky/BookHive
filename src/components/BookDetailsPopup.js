import React from "react";
import CollectionCover from "../images/CollectionCover.png";

const BookDetailsPopup = ({
  book,
  onClose,
  onAddToFavorites,
  onUnfavorite,
}) => {
  return (
    <div className="PopupDialog">
      <div className="PopupContent">
        <span className="CloseButton" onClick={onClose}>
          X
        </span>
        <div className="PopupLeftColumn">
          {book && (
            <>
              <img src={book.image || CollectionCover} alt={book.title} />
              <p className="DialogTitle">{book.title}</p>
              <p className="DialogAuthor">
                By: {book.authors ? book.authors.join(", ") : "Unknown"}
              </p>
            </>
          )}
        </div>
        <div className="PopupRightColumn">
          {book && (
            <>
              <p className="DialogDescription">
                {book.description || "No description available"}
              </p>
              <div className="PopupButtonHolder">
                <button onClick={onAddToFavorites}>Add to Favorites</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
