import React from "react";
import Navbar from "../components/Navbar";
import SuggestedBooks from "../components/SuggestedBooks";
import PopularBooks from "../components/PopularBooks";

function Home() {
    return (
      <div>
        <Navbar />
        <SuggestedBooks />
        <PopularBooks />
      </div>
    );
  }
  
  export default Home;