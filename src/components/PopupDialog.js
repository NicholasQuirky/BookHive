import React, { useState } from "react";
import CollectionDetails from "./CollectionDetails"; // Import CollectionDetails component

const PopupDialog = ({
  book,
  onClose,
  onAddToFavorites,
  onUnfavorite,
  collections,
  setCollections,
  collectionId,

  // Pass collectionId prop
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null); // State to store selected collection

  // Function to handle toggling the dropdown visibility
  const handleAddToCollections = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  // Function to add the book to the selected collection
  const addToCollection = (collection) => {
    const updatedCollections = collections.map((col) => {
      if (col.id === collection.id) {
        // Check if the book is already in the collection to avoid duplicates
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
    setShowDropdown(false); // Close the dropdown after adding
  };

  // Function to remove the book from the collection
  const removeFromCollection = () => {
    const updatedCollections = collections.map((col) => {
      if (col.id === collectionId) {
        return {
          ...col,
          books: col.books.filter((b) => b.id !== book.id),
        };
      }
      return col;
    });
    setCollections(updatedCollections);
    onClose(); // Close the dialog after removing
  };

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
                <button
                  className="AddToFavoritesButton"
                  onClick={onAddToFavorites}
                >
                  Add to Favorites
                </button>
                {collectionId ? (
                  // If collectionId is provided, render the option to remove from collection
                  <button
                    className="RemoveFromCollectionButton"
                    onClick={removeFromCollection}
                  >
                    Remove from Collection
                  </button>
                ) : (
                  // Otherwise, render the option to add to collections
                  <div className="DropDownMenu">
                    <button
                      className="AddToCollectionsButton"
                      onClick={handleAddToCollections}
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
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
