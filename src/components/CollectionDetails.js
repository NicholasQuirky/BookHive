import React, { useState } from "react";
import BookDetailsPopup from "./BookDetailsPopup"; // Import BookDetailsPopup component

const CollectionDetails = ({
  collection,
  onClose,
  onDelete, // Receive the onDelete function
  collections,
  setCollections,
}) => {
  const [selectedBook, setSelectedBook] = useState(null);

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
      onDelete(collection); // Call onDelete function with the current collection
    }
  };

  return (
    <div className="collection-details">
      <h3>{collection.name}</h3>
      <button className="AddToCollectionsButton" onClick={onClose}>
        Close
      </button>
      <button className="CancelButton" onClick={handleDeleteClick}>
        Delete Collection
      </button>{" "}
      {/* Call handleDeleteClick on button click */}
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
          collections={collections} // Pass collections prop
          setCollections={setCollections} // Pass setCollections prop
        />
      )}
    </div>
  );
};

export default CollectionDetails;
