import React from "react";
import "./ValidationDialog.css";

const ValidationDialog = ({ book, onClose, onConfirm, onUnfavorite }) => {
  if (!book) return null;

  return (
    <div className="ValidationDialogOverlay">
      <div className="ValidationDialog">
        <div className="ValidationDialogContent">
        <span className="CloseButton" onClick={onClose}>
          X
        </span>
          <div className="ValidationDialogLeftColumn">
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail || "../images/BookCover.png"
              }
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
          <div className="ValidationDialogRightColumn">
            <p className="DialogDescription">
              {book.volumeInfo.description || "No description available"}
            </p>
            <div className="ValidationDialogActions">
              <button onClick={onUnfavorite} className="CancelButton">
                Unfavorite
              </button>
              <button onClick={onConfirm} className="ConfirmButton">
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationDialog;
