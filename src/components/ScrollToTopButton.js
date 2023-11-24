// ScrollToTopButton.js
import React from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top-button" onClick={scrollToTop}>
      &#9650;
    </div>
  );
};

export default ScrollToTopButton;
