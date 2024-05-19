import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCover from "../images/BookCover.png";
import PopupDialog from "./PopupDialog";
import SeeMoreButton from "./SeeMoreButton";

const SuggestedBooks = ({
  favoriteBooks,
  addToFavorites,
  collections,
  setCollections,
}) => {
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchSuggestedBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=InternetOfThings&key=AIzaSyB8YH1j4mqz3FkYXW_5Z1DGCB5q_yyf2KQ&maxResults=10`
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
        <PopupDialog
          book={selectedBook}
          onClose={handleCloseDialog}
          onAddToFavorites={handleAddToFavorites}
          collections={collections} // Pass collections as prop
          setCollections={setCollections} // Pass setCollections as prop
        />
      )}
      <SeeMoreButton
        query="InternetOfThings"
        page={page}
        setBooks={setSuggestedBooks}
        setPage={setPage}
      />
    </div>
  );
};

export default SuggestedBooks;
