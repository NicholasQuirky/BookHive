// SearchContainer.js
import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../images/library-background.png";
import SearchResults from "./SearchResults";

function SearchContainer({ favoriteBooks, addToFavorites, collections, setCollections }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=10`
      );
      setSearchResults(response.data.items || []);
      setSearchResultsVisible(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleCloseSearchResults = () => {
    setSearchResultsVisible(false);
    setSearchResults([]);
  };

  return (
    <div className="search-container">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="search-overlay">
        <h2 className="search-heading">Find Your Favorite Books</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {searchResultsVisible && (
        <SearchResults
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          searchQuery={searchQuery}
          onClose={handleCloseSearchResults}
          addToFavorites={addToFavorites}
          favoriteBooks={favoriteBooks}
          collections={collections} // Pass collections prop
          setCollections={setCollections} // Pass setCollections prop
        />
      )}
    </div>
  );
}

export default SearchContainer;
