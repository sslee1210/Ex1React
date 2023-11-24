// Header.js

import React, { useState } from "react";
import "./Header.css"; // CSS 파일 import
import Main from "./Main";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="header-wrap">
      <div className="header-container">
        <h2 className="logo">로고</h2>
        <div className="menu-icon" onClick={toggleSidebar}>
          <span className={`bar ${isSidebarOpen ? "open" : ""}`}></span>
          <span
            className={`bar ${
              isSidebarOpen ? "open shorter" : "shorter"
            }`}></span>
          <span
            className={`bar ${
              isSidebarOpen ? "open shorterr" : "shorterr"
            }`}></span>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <p className="menu-item" onClick={toggleSidebar}>
          Home
        </p>
        <p className="menu-item" onClick={toggleSidebar}>
          About
        </p>
        <p className="menu-item" onClick={toggleSidebar}>
          Products
        </p>
        <p className="menu-item" onClick={toggleSidebar}>
          Contact
        </p>
      </div>
      <Main />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Header;
