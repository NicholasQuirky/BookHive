import React from "react";
import PopularBookCover from "../images/BookCover.png";

const PopularBooks = () => {
  const popularBooksData = [
    { title: "Popular Book 1", author: "Author 1", image: PopularBookCover },
    { title: "Popular Book 2", author: "Author 2", image: PopularBookCover },
    { title: "Popular Book 3", author: "Author 3", image: PopularBookCover },
    { title: "Popular Book 4", author: "Author 4", image: PopularBookCover },
  ];

  return (
    <div className="PopularBooksContainer">
      <h4>Popular Books</h4>
      <div className="PopularBooks">
        {popularBooksData.map((book, index) => (
          <div key={index} className="PopularBook">
            <img src={book.image} alt={book.title} />
            <div className="PopularBookInfo">
              <h3 className="PopularBookTitle">{book.title}</h3>
              <p className="PopularBookAuthor">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
