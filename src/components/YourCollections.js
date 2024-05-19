import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CollectionCover from "../images/BookCover.png";
import CreateCollection from "./CreateCollection";
import CollectionView from "./CollectionView";

const YourCollections = ({ addToFavorites, collections, setCollections, handleCreateCollection }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [sortBy, setSortBy] = useState('recentlyAdded');

  const sortCollections = (sortBy) => {
    const sortedCollections = [...collections];
    if (sortBy === 'recentlyAdded') {
      sortedCollections.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortBy === 'title') {
      sortedCollections.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sortedCollections;
  };

  const handleViewCollection = (collection) => {
    setSelectedCollection(collection);
  };

  const handleCloseCollectionView = () => {
    setSelectedCollection(null);
  };

  const handleDeleteCollection = (selectedCollection) => {
    const updatedCollections = collections.filter(collection => collection !== selectedCollection);
    setCollections(updatedCollections);
    handleCloseCollectionView();
  };

  return (
    <div className="YourCollectionsContainer">
      <h4>Your Collections</h4>
      <div className="SortByOptions-YourCollections">
        <span>Sort By:</span>
        <button onClick={() => setSortBy('recentlyAdded')}>Recently Added</button>
        <button onClick={() => setSortBy('title')}>Title</button>
        <div className="AddtoCollections-YourCollections">
          <button onClick={() => setIsPopupOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      <div className="YourCollections">
        {sortCollections(sortBy).map((collection, index) => (
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
        <CollectionView 
        collection={selectedCollection} 
        onClose={handleCloseCollectionView}
        onDelete={() => handleDeleteCollection(selectedCollection)} />
      )}
    </div>
  );
};

export default YourCollections;
