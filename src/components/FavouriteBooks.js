import React from "react";
import BookCover from "../images/BookCover.png";

const FavouriteBooks = () => {
  const FavouriteBooksData = [
    { title: "Book 1", author: "Author 1", image: BookCover },
    { title: "Book 2", author: "Author 2", image: BookCover },
    { title: "Book 3", author: "Author 3", image: BookCover },
    { title: "Book 4", author: "Author 4", image: BookCover },
  ];

  return (
    <div className="FavouriteBooksContainer">
      <h4>Your Favourite Books</h4>
      <div className="SortByOptions-FavouriteBooks">
        <span>Sort By:</span>
        <button>Recently Added</button>
        <button>Title</button>
        <button>Author</button>
      </div>
      <div className="FavouriteBooks">
        {FavouriteBooksData.map((book, index) => (
          <div key={index} className="FavouriteBook">
            <img src={book.image} alt={book.title} />
            <div className="FavouriteBookInfo">
              <h3 className="FavouriteBookTitle">{book.title}</h3>
              <p className="FavouriteBookAuthor">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteBooks;
