import React, { useState } from "react";

const PopupDialog = ({ book, onClose, onAddToFavorites, onAddToCollections }) => {
  const [collections, setCollections] = useState([]); // State to manage collections
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown menu

  // Sample collections data (replace with your actual collections data)
  const sampleCollections = [
    { name: "Collection 1", books: [] },
    { name: "Collection 2", books: [] },
    { name: "Collection 3", books: [] },
  ];

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

  // Function to handle adding to collections
  const handleAddToCollections = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div className="PopupDialog">
      <div className="PopupContent">
        <span className="CloseButton" onClick={onClose}>
          X
        </span>
        <div className="PopupLeftColumn">
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
        <div className="PopupRightColumn">
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
            {showDropdown && (
              <div className="DropdownContent">
                {sampleCollections.map((collection) => (
                  <button key={collection.name} onClick={() => addToCollection(collection.name)}>
                    {collection.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
