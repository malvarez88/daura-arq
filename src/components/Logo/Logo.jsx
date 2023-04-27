import React from "react";
import { useLocation } from "react-router";

import "./logo.css";

const Logo = ({...logoColor}) => {

var color = Object.values(logoColor)

  const location = useLocation();

  if(!logoColor && 
    location.pathname === "/proyectos" ||
    location.pathname === "/estudio" ||
    location.pathname === "/contacto"
  ) {
    color = "#DF6537";
  }

  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 199.08 93.05"
      style={{background: "transparent"}}
    >
      <g>
        <ellipse className="cls-2" cx="42" cy="50.53" rx="34" ry="34.52" />
        <line className="cls-2" x1="76" y1="51.03" x2="76" />
      </g>
      <g>
        <ellipse
          className="cls-2"
          cx="148.55"
          cy="51.22"
          rx="34.52"
          ry="33.83"
        />
        <line
          className="cls-2"
          x1="148.05"
          y1="85.05"
          x2="199.08"
          y2="85.05"
          stroke="#1d1d1b"
          strokeWidth="16px"
          strokeMiterlimit="10"
        />
      </g>
      <rect className="cls-1" x="92.2" width="16" height="16" fill={color} />
    </svg>
  );
};

export default Logo;
