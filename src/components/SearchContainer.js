import React, { useState } from "react";
import backgroundImage from '../images/library-background.png'; // Replace with your image path

function SearchContainer() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="search-container">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="search-overlay">
        <h2 className="search-heading">Find Your Favorite Books</h2>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Enter Keywords" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;