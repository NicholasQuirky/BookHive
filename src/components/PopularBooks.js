import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopupDialog from './PopupDialog';

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=Fiction&key=AIzaSyBrg6gyOZTUx2lC9Tb03C4wrNN7JL-nsPw&maxResults=10'
        );
        setPopularBooks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching popular books:', error);
      }
    };

    fetchPopularBooks();
  }, []);

  const fetchMoreBooks = async () => {
    try {
      const startIndex = (page + 1) * 10; // Calculate the start index for the next page
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=Fiction&key=AIzaSyBrg6gyOZTUx2lC9Tb03C4wrNN7JL-nsPw&maxResults=10&startIndex=${startIndex}`
      );
      setPopularBooks((prevBooks) => [...prevBooks, ...response.data.items]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching more books:', error);
    }
  };

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
              src={book.volumeInfo.imageLinks?.thumbnail || 'default-image-path'} // Add a default image path if needed
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
        <PopupDialog book={selectedBook} onClose={handleCloseDialog} />
      )}
      <button onClick={fetchMoreBooks} className="SeeMoreButton">
        See More
      </button>
    </div>
  );
};

export default PopularBooks;