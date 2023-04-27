import React from "react";
import "./loader.css";

const Loader = () => {


  return (
    <div className="loader">
      <svg
        id="loader-logo"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 199.03 93.05"
      >
        <path
         id="trazo1"
          className="cls-2"
          d="m76,0v51.03-.5c0,19.06-15.22,34.52-34,34.52S8,69.59,8,50.53,23.22,16.01,42,16.01h0c18.78,0,34,15.49,34,34.56"
        />
        <path
        id="trazo2"
          className="cls-2"
          d="m199.03,85.05h-51.03.5c-19.06,0-34.52-15.22-34.52-34s15.45-34,34.52-34,34.52,15.22,34.52,34h0c0,18.78-15.49,34-34.56,34"
        />
        <rect id="rect1" className="cls-1" x="89.98" width="16" height="16" />
      </svg>
    </div>
  );
};

export default Loader;
