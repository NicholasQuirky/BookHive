import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SuggestedBooks from "../components/SuggestedBooks";
import PopularBooks from "../components/PopularBooks";
import SearchContainer from "../components/SearchContainer";
import SearchResults from "../components/SearchResults";

function Home({
  favoriteBooks,
  addToFavorites,
  collections,
  setCollections,
  addToCollection,
}) {
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
        collections={collections}
        setCollections={setCollections}
      />
      <main>
        {searchResultsVisible && (
          <SearchResults
            searchResults={searchResults}
            onClose={closeSearchResults}
            favoriteBooks={favoriteBooks}
            addToFavorites={addToFavorites}
            collections={collections}
            setCollections={setCollections}
            addToCollection={addToCollection}
          />
        )}
        {!searchResultsVisible && (
          <>
            <SuggestedBooks
              favoriteBooks={favoriteBooks}
              addToFavorites={addToFavorites}
              collections={collections}
              setCollections={setCollections}
              addToCollection={addToCollection}
            />
            <PopularBooks
              favoriteBooks={favoriteBooks}
              addToFavorites={addToFavorites}
              collections={collections}
              setCollections={setCollections}
              addToCollection={addToCollection}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
