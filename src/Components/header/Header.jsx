import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Your Logo</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
