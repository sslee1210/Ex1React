import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <h1>We are Creative Agency</h1>
      <p>Working with brands all over the world</p>
      <div className="pic1">
        <img
          src="./images/SplashColor.png"
          alt="맥북디자인"
          className="macbg "
        />
        <img src="./images/CartoonMac.png" alt="맥북" className="mac" />
      </div>
      <p>
        Leading digital agency with solid design and development expertise. We
        focus on building Webflow websites.
      </p>
      <div className="pic2">
        <img
          src="./images/SplashColor.png"
          alt="맥북디자인"
          className="macbg2 "
        />
        <img src="./images/CartoonMac.png" alt="맥북" className="mac2" />
      </div>
      <p>
        Leading digital agency with solid design and development expertise. We
        focus on building Webflow websites.
      </p>
    </div>
  );
};

export default Main;
