import React, { useState } from "react";
import BookDetailsPopup from "./BookDetailsPopup";
import CollectionCover from "../images/CollectionCover.png";

const CollectionDetails = ({
  collection,
  onClose,
  onCollectionUpdate,
  collections, // Add collections prop
  setCollections, // Add setCollections prop
}) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
  };

  const handleRemoveBook = () => {
    const updatedBooks = collection.books.filter(
      (book) => book.id !== selectedBook.id
    );
    const updatedCollection = {
      ...collection,
      books: updatedBooks,
    };
    onCollectionUpdate(updatedCollection);
    handleCloseDialog();
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
            <img src={book.image || CollectionCover} alt={book.title} />
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
          onRemoveFromCollection={handleRemoveBook}
          collections={collections} // Pass collections prop
          setCollections={setCollections} // Pass setCollections prop
        />
      )}
    </div>
  );
};

export default CollectionDetails;
