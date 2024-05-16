import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCover from "../images/BookCover.png";

const SuggestedBooks = ({ favoriteBooks, addToFavorites }) => {
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [clickedBook, setClickedBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchSuggestedBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=InternetOfThings&key=AIzaSyBrg6gyOZTUx2lC9Tb03C4wrNN7JL-nsPw&maxResults=10`
        );
        setSuggestedBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching suggested books:", error);
      }
    };

    fetchSuggestedBooks();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
  };

  const handleAddToFavorites = () => {
    if (selectedBook) {
      addToFavorites(selectedBook);
      setSelectedBook(null);
    }
  };

  return (
    <div className="SuggestedBooksContainer">
      <h4>Suggested Books For You</h4>
      <div className="SuggestedBooks">
        {suggestedBooks.map((book, index) => (
          <div
            key={index}
            className="SuggestedBook"
            onClick={() => handleBookClick(book)}
          >
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : BookCover
              }
              alt={book.volumeInfo.title}
            />
            <div className="SuggestedBookInfo">
              <h3 className="SuggestedBookTitle">{book.volumeInfo.title}</h3>
              <p className="SuggestedBookAuthor">
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
            <button
              className="AddToFavoritesButton"
              onClick={handleAddToFavorites}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestedBooks;
