import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateCollection from "./CreateCollection";
import CollectionView from "./CollectionView";
import CollectionDetails from "./CollectionDetails";
import CollectionCover from "../images/CollectionBackground.png";

const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const YourCollections = ({ addToFavorites, collections, setCollections }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [sortBy, setSortBy] = useState("recentlyAdded");

  const sortCollections = (sortBy) => {
    const sortedCollections = [...collections];
    if (sortBy === "recentlyAdded") {
      sortedCollections.sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
      );
    } else if (sortBy === "title") {
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

  const handleDeleteCollection = (collection) => {
    const updatedCollections = collections.filter(
      (col) => col.id !== collection.id
    );
    setCollections(updatedCollections);
    handleCloseCollectionView();
  };

  const handleCreateCollection = (newCollectionName) => {
    const newCollection = {
      id: generateUniqueId(),
      name: newCollectionName,
      dateAdded: new Date(),
      books: [],
    };

    setCollections([...collections, newCollection]);
  };

  return (
    <div className="YourCollectionsContainer">
      <h4>Your Collections</h4>
      <div className="SortByOptions-YourCollections">
        <span>Sort By:</span>
        <button onClick={() => setSortBy("recentlyAdded")}>
          Recently Added
        </button>
        <button onClick={() => setSortBy("title")}>Title</button>
        <div className="AddtoCollections-YourCollections">
          <button onClick={() => setIsPopupOpen(true)}>
            Create Collection <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      <div className="YourCollections">
        {sortCollections(sortBy).map((collection, index) => (
          <div
            key={index}
            className="YourCollection"
            onClick={() => handleViewCollection(collection)}
          >
            <img
              src={collection.photo || CollectionCover}
              alt={CollectionCover}
            />
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
        <CollectionDetails
          collection={selectedCollection}
          onClose={handleCloseCollectionView}
          onDelete={handleDeleteCollection} // Pass the delete function
        />
      )}
    </div>
  );
};

export default YourCollections;
