import React, { useState } from "react";

const PopupDialog = ({ book, onClose, onAddToFavorites, collections, setCollections }) => {
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown menu

  // Function to add a book to a selected collection
  const addToCollection = (collectionName) => {
    const updatedCollections = collections.map((collection) => {
      if (collection.name === collectionName) {
        return {
          ...collection,
          books: [...collection.books, book],
        };
      }
      return collection;
    });
    setCollections(updatedCollections);
  };

  // Function to handle toggling the dropdown visibility
  const handleAddToCollections = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown); // Toggle dropdown visibility
  };
  
  // Function to render the dropdown content
  const renderDropdownContent = () => {
    if (!collections || collections.length === 0) {
      return <div className="DropdownContent">No collections available</div>;
    }

    return (
      <div className="DropdownContent">
        {collections.map((collection) => (
          <button key={collection.id} onClick={() => addToCollection(collection.name)}>
            {collection.name}
          </button>
        ))}
      </div>
    );
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
                src={book.volumeInfo.imageLinks?.thumbnail || "../images/BookCover.png"}
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
              <button className="AddToFavoritesButton" onClick={onAddToFavorites}>
                Add to Favorites
              </button>
              <div className="DropDownMenu">
                <button className="AddToCollectionsButton" onClick={handleAddToCollections}>
                  Add to Collections
                </button>
                {showDropdown && renderDropdownContent()}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
