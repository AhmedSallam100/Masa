import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="preloader">
      <div className="preloader-container">
        <div className="roller">
          <div className="handle"></div>
        </div>
        <div className="paint"></div>
      </div>
    </div>
  );
};

export default Loader;
