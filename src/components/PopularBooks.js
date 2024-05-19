import React, { useState, useEffect } from "react";
import axios from "axios";
import PopupDialog from "./PopupDialog";
import SeeMoreButton from "./SeeMoreButton";

const PopularBooks = ({
  favoriteBooks,
  addToFavorites,
  removeFromFavorites,
  collections, // Add collections prop
  setCollections, // Add setCollections prop
}) => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=Fiction&key=AIzaSyB8YH1j4mqz3FkYXW_5Z1DGCB5q_yyf2KQ&maxResults=10"
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

  const handleAddToFavorites = () => {
    if (selectedBook) {
      const isAlreadyAdded = favoriteBooks.some(
        (favorite) => favorite.id === selectedBook.id
      );
      if (isAlreadyAdded) {
        alert("This book is already added to favorites.");
      } else {
        addToFavorites(selectedBook);
        setSelectedBook(null);
      }
    }
  };

  const handleUnfavorite = () => {
    if (selectedBook) {
      removeFromFavorites(selectedBook);
      setSelectedBook(null);
    }
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
        <PopupDialog
          book={selectedBook}
          onClose={handleCloseDialog}
          onAddToFavorites={handleAddToFavorites}
          onUnfavorite={handleUnfavorite}
          collections={collections} // Pass collections prop
          setCollections={setCollections} // Pass setCollections prop
        />
      )}
      <SeeMoreButton
        query="Fiction"
        page={page}
        setBooks={setPopularBooks}
        setPage={setPage}
      />
    </div>
  );
};

export default PopularBooks;
