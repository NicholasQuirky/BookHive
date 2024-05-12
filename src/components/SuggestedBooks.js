import React, { useState } from "react";
import BookCover from "../images/BookCover.png";

const SuggestedBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const suggestedBooksData = [
    { title: "Book 1", author: "Author 1", description: "Generate random text strings with various options and characters. The randomness comes from atmospheric noise, which is better than pseudo-random number algorithms.", image: BookCover },
    { title: "Book 2", author: "Author 2", description: "Description 2", image: BookCover },
    { title: "Book 3", author: "Author 3", description: "Description 3", image: BookCover },
    { title: "Book 4", author: "Author 4", description: "Description 4", image: BookCover },
    { title: "Book 5", author: "Author 5", description: "Description 5", image: BookCover },
  ];

  const handleBookClick = (index) => {
    setSelectedBook(suggestedBooksData[index]);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
  };

  return (
    <div className="SuggestedBooksContainer">
      <h4>Suggested Books For You</h4>
      <div className="SuggestedBooks">
        {suggestedBooksData.map((book, index) => (
          <div key={index} className="SuggestedBook" onClick={() => handleBookClick(index)}>
            <img src={book.image} alt={book.title} />
            <div className="SuggestedBookInfo">
              <h3 className="SuggestedBookTitle">{book.title}</h3>
              <p className="SuggestedBookAuthor">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="PopupDialog">
          <div className="PopupContent">
          <span className="CloseButton" onClick={handleCloseDialog}>X</span>
            <div className="PopupLeftColumn">
              <img src={selectedBook.image} alt={selectedBook.title} />
              <p className="DialogTitle">{selectedBook.title}</p>
              <p className="DialogAuthor">By: {selectedBook.author}</p>
            </div>
            <div className="PopupRightColumn">
              <p className="DialogDescription">{selectedBook.description}</p>
            </div>
            <button className="AddToFavoritesButton">Add to Favorites</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestedBooks;
