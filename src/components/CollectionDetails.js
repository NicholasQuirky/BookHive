import React, { useState } from "react";
import BookDetailsPopup from "./BookDetailsPopup"; // Import BookDetailsPopup component

const CollectionDetails = ({
  collection,
  onClose,
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

  return (
    <div className="collection-details">
      <h3>{collection.name}</h3>
      <button onClick={onClose}>Close</button>
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
