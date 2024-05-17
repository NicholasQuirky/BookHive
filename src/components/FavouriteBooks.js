import React, { useState } from "react";
import BookCover from "../images/BookCover.png";

function FavouriteBooks({ favoriteBooks, addToFavorites }) {
  const [sortOrder, setSortOrder] = useState("recent");

  const sortBooks = (books, order) => {
    switch (order) {
      case "title":
        return books.sort((a, b) =>
          a.volumeInfo.title.localeCompare(b.volumeInfo.title)
        );
      case "author":
        return books.sort((a, b) => {
          const authorA = a.volumeInfo.authors ? a.volumeInfo.authors[0] : "";
          const authorB = b.volumeInfo.authors ? b.volumeInfo.authors[0] : "";
          return authorA.localeCompare(authorB);
        });
      case "recent":
      default:
        return books; // Assuming favoriteBooks is already in "Recently Added" order
    }
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const sortedBooks = sortBooks([...favoriteBooks], sortOrder);

  return (
    <div className="FavouriteBooksContainer">
      <h4>Favourite Books</h4>
      <div className="SortByOptions-FavouriteBooks">
        <span>Sort By:</span>
        <button onClick={() => handleSortChange("recent")}>
          Recently Added
        </button>
        <button onClick={() => handleSortChange("title")}>Title</button>
        <button onClick={() => handleSortChange("author")}>Author</button>
      </div>
      <div className="FavouriteBooks">
        {sortedBooks.map((book, index) => (
          <div key={index} className="FavouriteBook">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || BookCover}
              alt={book.volumeInfo.title}
            />
            <div className="FavouriteBookInfo">
              <h3 className="FavouriteBookTitle">{book.volumeInfo.title}</h3>
              <p className="FavouriteBookAuthor">
                by{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteBooks;
