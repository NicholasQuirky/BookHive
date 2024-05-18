import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CollectionCover from "../images/BookCover.png";
import CreateCollection from "./CreateCollection";
import CollectionView from "./CollectionView";

const YourCollections = ({ addToFavorites }) => {
  const [collections, setCollections] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleCreateCollection = (collectionName) => {
    const newCollection = {
      name: collectionName,
      photo: CollectionCover,
      books: [] // Initialize an empty array for storing books
    };
    setCollections([...collections, newCollection]);
  };

  const handleViewCollection = (collection) => {
    setSelectedCollection(collection);
  };

  const handleCloseCollectionView = () => {
    setSelectedCollection(null);
  };

  return (
    <div className="YourCollectionsContainer">
      <h4>Your Collections</h4>
      <div className="SortByOptions-YourCollections">
        <span>Sort By:</span>
        <button>Recently Added</button>
        <button>Title</button>
        <div className="AddtoCollections-YourCollections">
          <button onClick={() => setIsPopupOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      <div className="YourCollections">
        {collections.map((collection, index) => (
          <div key={index} className="YourCollection" onClick={() => handleViewCollection(collection)}>
            <img src={collection.photo} alt={collection.name} />
            <div className="YourCollectionInfo">
              <h3 className="CollectionTitle">{collection.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <CreateCollection
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onCreateCollection={handleCreateCollection}
      />

      {selectedCollection && (
        <CollectionView collection={selectedCollection} onClose={handleCloseCollectionView} />
      )}
    </div>
  );
};

export default YourCollections;
