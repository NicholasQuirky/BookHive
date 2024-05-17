import React, { useState, useEffect } from "react";
import axios from "axios";

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=Fiction&key=AIzaSyBrg6gyOZTUx2lC9Tb03C4wrNN7JL-nsPw&maxResults=10"
        );
        setPopularBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching popular books:", error);
      }
    };

    fetchPopularBooks();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
  };

  return (
    <div className="PopularBooksContainer">
      <h4>Popular Books</h4>
      <div className="PopularBooks">
        {popularBooks.map((book, index) => (
          <div
            key={index}
            className="PopularBook"
            onClick={() => handleBookClick(book)}
          >
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail || "default-image-path"
              }
              alt={book.volumeInfo.title}
            />
            <div className="PopularBookInfo">
              <h3 className="PopularBookTitle">{book.volumeInfo.title}</h3>
              <p className="PopularBookAuthor">
                by{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="PopupDialog">
          <div className="PopupContent">
            <span className="CloseButton" onClick={handleCloseDialog}>
              X
            </span>
            <div className="PopupLeftColumn">
              <img
                src={selectedBook.volumeInfo.imageLinks.thumbnail}
                alt={selectedBook.volumeInfo.title}
              />
              <p className="DialogTitle">{selectedBook.volumeInfo.title}</p>
              <p className="DialogAuthor">
                By:{" "}
                {selectedBook.volumeInfo.authors
                  ? selectedBook.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </p>
            </div>
            <div className="PopupRightColumn">
              <p className="DialogDescription">
                {selectedBook.volumeInfo.description ||
                  "No description available"}
              </p>
            </div>
            <button className="AddToFavoritesButton">Add to Favorites</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularBooks;
