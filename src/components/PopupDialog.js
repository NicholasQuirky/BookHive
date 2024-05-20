import React, { useState } from "react";
import CollectionDetails from "./CollectionDetails";

const PopupDialog = ({
  book,
  onClose,
  onAddToFavorites,
  onUnfavorite,
  collections,
  setCollections,
  collectionId,

}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);

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
    onClose();
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
                  <button
                    className="RemoveFromCollectionButton"
                    onClick={removeFromCollection}
                  >
                    Remove from Collection
                  </button>
                ) : (
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
