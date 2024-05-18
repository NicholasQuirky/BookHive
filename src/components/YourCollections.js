import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CollectionCover from "../images/BookCover.png";

const YourCollections = ({ addToFavorites }) => {
  const yourCollectionsData = [
    { title: "Collection 1", image: CollectionCover },
    { title: "Collection 2", image: CollectionCover },
    { title: "Collection 3", image: CollectionCover },
    { title: "Collection 4", image: CollectionCover },
    { title: "Collection 5", image: CollectionCover },
  ];

  return (
    <div className="YourCollectionsContainer">
      <h4>Your Collections</h4>
      <div className="SortByOptions-YourCollections">
        <span>Sort By:</span>
        <button>Recently Added</button>
        <button>Title</button>
        <div className="AddtoCollections-YourCollections">
          <button>
            <FontAwesomeIcon icon={faPlus} /> {/* Add icon */}
          </button>
        </div>
      </div>

      <div className="YourCollections">
        {yourCollectionsData.map((collection, index) => (
          <div key={index} className="YourCollection">
            <img src={collection.image} alt={collection.title} />
            <div className="YourCollectionInfo">
              <h3 className="CollectionTitle">{collection.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCollections;
