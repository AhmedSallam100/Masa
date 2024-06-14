import React from "react";
import "./loader.css";

const Loader = () => {
  document.body.style = "height: 100vh";
  setTimeout(() => {
    document.body.style = "height: auto";
    document.querySelector(".preloader").style =
      "opacity: 0; visibility: hidden;";
  }, 4000);

  return (
    <div className="preloader">
      <img
        src="https://i.pinimg.com/originals/22/25/26/222526bf56f3f081f3ccc9828878ea65.gif"
        alt=""
      />
    </div>
  );
};

export default Loader;
