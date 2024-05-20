import React, { useState } from "react";
import BookDetailsPopup from "./BookDetailsPopup";

const CollectionDetails = ({
  collection,
  onClose,
  onDelete,
  onUpdateCollectionName,
  collections,
  setCollections,
}) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(collection.name);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
  };

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this collection?"
    );
    if (isConfirmed) {
      onDelete(collection);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdateCollectionName(collection.id, newName);
    setIsEditing(false);
  };

  return (
    <div className="collection-details">
      <button className="AddToCollectionsButton" onClick={onClose}>
        Close
      </button>
      <button className="CancelButton" onClick={handleDeleteClick}>
        Delete Collection
      </button>
      <div className="collection-info">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
      <div className="SearchResults">
        {collection.books.map((book, index) => (
          <div
            key={index}
            className="SearchResultBook"
            onClick={() => handleBookClick(book)}
          >
            <img
              src={book.image || "../images/BookCover.png"}
              alt={book.title}
            />
            <div className="SearchResultBookInfo">
              <h3 className="SearchResultBookTitle">{book.title}</h3>
              <p className="SearchResultBookAuthor">
                by {book.authors ? book.authors.join(", ") : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedBook && (
        <BookDetailsPopup
          book={selectedBook}
          onClose={handleCloseDialog}
          collections={collections}
          setCollections={setCollections}
        />
      )}
    </div>
  );
};

export default CollectionDetails;
