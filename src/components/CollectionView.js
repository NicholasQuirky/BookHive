import React from "react";

const CollectionView = ({ collection, onClose, onDelete }) => {
  const handleDeleteCollection = () => {
    onDelete(collection.id); // Assuming collection has an id
  };

  return (
    <div className="CollectionView">
      <div className="PopupDialog-CollectionView">
        <span className="CloseButton-CollectionView" onClick={onClose}>
          X
        </span>
        <h2>{collection.name}</h2>
        <div className="CollectionBooks">
          {collection.books.length > 0 ? (
            collection.books.map((book, index) => (
              <div key={index} className="CollectionBook">
                <img src={book.cover} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            ))
          ) : (
            <p>There is no book added in this collection.</p>
          )}
        </div>
        <div className="DeleteCollection">
        <button onClick={handleDeleteCollection}>Delete Collection</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionView;