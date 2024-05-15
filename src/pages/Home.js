import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SuggestedBooks from "../components/SuggestedBooks";
import PopularBooks from "../components/PopularBooks";
import SearchContainer from "../components/SearchContainer";
import SearchResults from "../components/SearchResults"; // Import the SearchResults component

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  const closeSearchResults = () => {
    setSearchResultsVisible(false);
    setSearchResults([]);
  };

  return (
    <div className="container">
      <Navbar />
      <SearchContainer
        setSearchResultsVisible={setSearchResultsVisible}
        setSearchResults={setSearchResults}
      />
      <main>
        {searchResultsVisible && (
          <SearchResults
            searchResults={searchResults}
            onClose={closeSearchResults}
          />
        )}
        {!searchResultsVisible && (
          <>
            <SuggestedBooks />
            <PopularBooks />
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
