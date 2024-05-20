import React, { useState } from "react";
import "./ValidationDialog.css";

const ValidationDialog = ({
  book,
  collections,
  setCollections,
  onClose,
  onConfirm,
  onUnfavorite,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  if (!book) return null;

  const handleAddToCollections = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const addToCollection = (collection) => {
    const updatedCollections = collections.map((col) => {
      if (col.id === collection.id) {
        const bookExists = col.books.some((b) => b.id === book.id);
        if (!bookExists) {
          return {
            ...col,
            books: [
              ...col.books,
              {
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks?.thumbnail,
              },
            ],
          };
        }
      }
      return col;
    });
    setCollections(updatedCollections);
    setShowDropdown(false);
  };

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
                book.volumeInfo.imageLinks?.thumbnail ||
                "../images/BookCover.png"
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
              <div className="ValidationDialogActions">
                <button
                  onClick={handleAddToCollections}
                  className="AddToCollectionsButton"
                >
                  Add to Collections
                </button>
                {showDropdown && (
                  <div className="DropdownContent">
                    {collections.map((collection) => (
                      <button
                        key={collection.id}
                        onClick={() => addToCollection(collection)}
                      >
                        {collection.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationDialog;
