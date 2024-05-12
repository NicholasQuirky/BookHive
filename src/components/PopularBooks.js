import React, { useState } from "react";
import PopularBookCover from "../images/BookCover.png";

const PopularBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const suggestedBooksData = [
    { title: "Popular Book 1", author: "Author 1", description: "Generate random text strings with various options and characters. The randomness comes from atmospheric noise, which is better than pseudo-random number algorithms.", image: PopularBookCover },
    { title: "Popular Book 2", author: "Author 2", description: "Description 2", image: PopularBookCover },
    { title: "Popular Book 3", author: "Author 3", description: "Description 3", image: PopularBookCover },
    { title: "Popular Book 4", author: "Author 4", description: "Description 4", image: PopularBookCover },
    { title: "Popular Book 5", author: "Author 5", description: "Description 5", image: PopularBookCover },
  ];

  const handleBookClick = (index) => {
    setSelectedBook(suggestedBooksData[index]);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
  };

  return (
    <div className="PopularBooksContainer">
      <h4>Popular Books</h4>
      <div className="PopularBooks">
        {suggestedBooksData.map((book, index) => (
          <div key={index} className="PopularBook" onClick={() => handleBookClick(index)}>
            <img src={book.image} alt={book.title} />
            <div className="PopularBookInfo">
              <h3 className="PopularBookTitle">{book.title}</h3>
              <p className="PopularBookAuthor">by {book.author}</p>
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

export default PopularBooks;
