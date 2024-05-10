import React from "react";
import Navbar from "../components/Navbar";
import YourCollections from "../components/YourCollections";
import FavouriteBooks from "../components/FavouriteBooks";

function YourLibrary() {
    return (
      <div>
        <Navbar /> 
        <YourCollections />
        <FavouriteBooks />
      </div>
    );
  }
  
  export default YourLibrary;