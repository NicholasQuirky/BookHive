import React from "react";
import BookCover from "../images/BookCover.png";

function FavouriteBooks({ favoriteBooks, addToFavorites }) {
  console.log("Favorite books:", favoriteBooks); // Debugging line to check props
  return (
    <div className="FavouriteBooksContainer">
      <h4>Favourite Books</h4>
      <div className="SortByOptions-FavouriteBooks">
        <span>Sort By:</span>
        <button>Recently Added</button>
        <button>Title</button>
        <button>Author</button>
      </div>
      <div className="FavouriteBooks">
        {favoriteBooks.map((book, index) => (
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
