import React from "react";
import BookCover from "../images/BookCover.png";

const YourCollections = () => {
  const yourCollectionsData = [
    { title: "Collection 1", image: BookCover },
    { title: "Collection 2", image: BookCover },
    { title: "Collection 3", image: BookCover },
    { title: "Collection 4", image: BookCover },
  ];

  return (
    <div className="YourCollectionsContainer">
      <h4>Your Collections</h4>
      <div className="SortByOptions-YourCollections">
        <span>Sort By:</span>
        <button>Recently Added</button>
        <button>Title</button>
      </div>
      <div className="YourCollections">
        {yourCollectionsData.map((book, index) => (
          <div key={index} className="YourCollection">
            <img src={book.image} alt={book.title} />
            <div className="YourCollectionInfo">
              <h3 className="CollectionTitle">{book.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCollections;
