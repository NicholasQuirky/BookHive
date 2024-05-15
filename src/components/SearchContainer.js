import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../images/library-background.png";
import SearchResults from "./SearchResults"; // Import the SearchResults component

function SearchContainer({ setSearchResultsVisible, setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyBrg6gyOZTUx2lC9Tb03C4wrNN7JL-nsPw&maxResults=10`
      );
      setSearchResults(response.data.items || []);
      setSearchResultsVisible(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
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
    </div>
  );
}

export default SearchContainer;
