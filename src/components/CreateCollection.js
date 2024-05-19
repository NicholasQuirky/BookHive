import React, { useState } from "react";

const CreateCollection = ({ isOpen, onClose, onCreateCollection }) => {
  const [newCollectionName, setNewCollectionName] = useState("");

  const handleCreateCollection = () => {
    if (newCollectionName.trim() !== "") {
      onCreateCollection(newCollectionName);
      setNewCollectionName(""); // Reset new collection name
      onClose(); // Close the popup
    }
  };

  return (
    isOpen && (
      <div className="PopupDialog-CreateCollection">
        <span className="CloseButton-CreateCollection" onClick={onClose}>
          X
        </span>
        <input
          type="text"
          placeholder="Enter collection name"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <button onClick={handleCreateCollection}>Done</button>
      </div>
    )
  );
};

export default CreateCollection;
