import React from "react";
import BookCover from "../images/BookCover.png";

const SuggestedBooks = () => {
  const suggestedBooksData = [
    { title: "Book 1", author: "Author 1", image: BookCover },
    { title: "Book 2", author: "Author 2", image: BookCover },
    { title: "Book 3", author: "Author 3", image: BookCover },
    { title: "Book 4", author: "Author 4", image: BookCover },
  ];

  return (
    <div className="SuggestedBooksContainer">
      <h4>Suggested Books For You</h4>
      <div className="SuggestedBooks">
        {suggestedBooksData.map((book, index) => (
          <div key={index} className="SuggestedBook">
            <img src={book.image} alt={book.title} />
            <div className="SuggestedBookInfo">
              <h3 className="SuggestedBookTitle">{book.title}</h3>
              <p className="SuggestedBookAuthor">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedBooks;
