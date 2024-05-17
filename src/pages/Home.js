import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SuggestedBooks from "../components/SuggestedBooks";
import PopularBooks from "../components/PopularBooks";
import SearchContainer from "../components/SearchContainer";
import SearchResults from "../components/SearchResults"; // Import the SearchResults component

function Home({ favoriteBooks, addToFavorites }) {
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
        favoriteBooks={favoriteBooks}
        addToFavorites={addToFavorites}
      />
      <main>
        {searchResultsVisible && (
          <SearchResults
            searchResults={searchResults}
            onClose={closeSearchResults}
            favoriteBooks={favoriteBooks}
            addToFavorites={addToFavorites}
          />
        )}
        {!searchResultsVisible && (
          <>
            <SuggestedBooks
              favoriteBooks={favoriteBooks}
              addToFavorites={addToFavorites}
            />
            <PopularBooks
              favoriteBooks={favoriteBooks}
              addToFavorites={addToFavorites}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
