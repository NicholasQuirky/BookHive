import React from "react";
import { IoSearch } from 'react-icons/io5';
import BookhiveLogo from "../images/BookhiveLogo.png";

const Navbar = () => {
  const navItems = [
    { text: "Home", link: "/Home" },
    { text: "Your Library", link: "/YourLibrary" },
  ];

  return (
    <div className="Navbar-Items">
      <nav className="Navbar">
        <div className="search">
          <IoSearch className="nav-icon" />
          <input type="text" placeholder="Enter Book Name" />
        </div>
        <div>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <img src={BookhiveLogo} alt="BookHive Logo" className="Navbar-logo" />
      </nav>
    </div>
  );
};

export default Navbar;
