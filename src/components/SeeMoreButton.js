import React from 'react';
import axios from 'axios';

const SeeMoreButton = ({ query, page, setBooks, setPage }) => {
  const fetchMoreBooks = async () => {
    try {
      const startIndex = (page + 1) * 10;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBrg6gyOZTUx2lC9Tb03C4wrNN7JL-nsPw&maxResults=10&startIndex=${startIndex}`
      );
      setBooks((prevBooks) => [...prevBooks, ...response.data.items]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching more books:', error);
    }
  };

  return (
    <button onClick={fetchMoreBooks} className="SeeMoreButton">
      See More
    </button>
  );
};

export default SeeMoreButton;
