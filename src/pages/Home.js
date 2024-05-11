import React from "react";
import Navbar from "../components/Navbar";
import SuggestedBooks from "../components/SuggestedBooks";
import PopularBooks from "../components/PopularBooks";
import SearchComponent from "../components/SearchContainer";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <SearchComponent />
      <main>
        <SuggestedBooks />
        <PopularBooks /> 
      </main>
    </div>
  );
}

export default Home;