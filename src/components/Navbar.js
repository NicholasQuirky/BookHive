import React from "react";
import BookhiveLogo from "../images/BookhiveLogo.png";

const Navbar = () => {
  const navItems = [
    { text: "Home", link: "/Home" },
    { text: "Your Library", link: "/YourLibrary" },
  ];

  return (
    <div className="Navbar">
      <img src={BookhiveLogo} alt="BookHive Logo" className="Navbar-logo" />
      <div className="Navbar-Items">
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
