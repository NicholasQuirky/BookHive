import React, { useState, useEffect } from "react";
import BookCover from "../images/BookCover.png";
import ValidationDialog from "./ValidationDialog"; // Import the validation dialog component

function FavouriteBooks({
  favoriteBooks,
  addToFavorites,
  removeFromFavorites,
}) {
  const [sortOrder, setSortOrder] = useState("recent");
  const [filter, setFilter] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [selectedBook, setSelectedBook] = useState(null); // State for selected book
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility

  useEffect(() => {
    // Extract unique categories from favoriteBooks
    const uniqueCategories = new Set();
    favoriteBooks.forEach((book) => {
      if (book.volumeInfo.categories) {
        book.volumeInfo.categories.forEach((category) =>
          uniqueCategories.add(category)
        );
      }
    });

    // Convert the Set to an array and add "All" at the beginning
    setCategories(["All", ...Array.from(uniqueCategories)]);
  }, [favoriteBooks]);

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
        return [...books].reverse(); // Reverse the array to get the opposite order
      default:
        return books; // Assuming favoriteBooks is already in "Recently Added" order
    }
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filteredBooks = favoriteBooks.filter((book) => {
    if (filter === "All") return true;
    return book.volumeInfo.categories?.includes(filter);
  });

  const sortedBooks = sortBooks([...filteredBooks], sortOrder);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedBook(null);
  };

  const handleUnfavorite = () => {
    if (selectedBook) {
      removeFromFavorites(selectedBook); // Call the function to remove from favorites
      closeDialog(); // Close the dialog after removing from favorites
    }
  };

  return (
    <div className="FavouriteBooksContainer">
      <h4>Favourite Books</h4>
      <div className="OptionsContainer">
        <div className="SortByOptions-FavouriteBooks">
          <span>Sort By:</span>
          <button onClick={() => handleSortChange("recent")}>
            Recently Added
          </button>
          <button onClick={() => handleSortChange("title")}>Title</button>
          <button onClick={() => handleSortChange("author")}>Author</button>
          <div className="FilterByCategory">
            <span className="FilterLabel">Filter By Category:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="CategoryDropdown"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="FavouriteBooks">
        {sortedBooks.map((book, index) => (
          <div
            key={index}
            className="FavouriteBook"
            onClick={() => handleBookClick(book)}
          >
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
      {isDialogOpen && selectedBook && (
        <ValidationDialog
          book={selectedBook}
          onClose={closeDialog}
          onUnfavorite={handleUnfavorite}
        />
      )}
    </div>
  );
}

export default FavouriteBooks;
