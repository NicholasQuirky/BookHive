import React from "react";
import "./ValidationDialog.css";

const ValidationDialog = ({ book, onClose, onConfirm, onUnfavorite }) => {
  if (!book) return null;

  return (
    <div className="ValidationDialogOverlay">
      <div className="ValidationDialog">
        <div className="ValidationDialogContent">
          {/* Close button */}
          <span className="CloseButton" onClick={onClose}>
            &times;
          </span>
          {/* Dialog message */}
          <div className="ValidationDialogMessage">
            <p>
              <strong>{book.volumeInfo.title}</strong> by{" "}
              <strong>
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </strong>
            </p>
          </div>
          {/* Unfavorite and Confirm buttons */}
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
  );
};

export default ValidationDialog;
