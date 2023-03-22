import React from "react";
import "./navbar.css";

import logo from "../../assets/dauralogo.png";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <ul className="nav-links">
              <li>
                <a href="/">Estudi</a>{" "}
              </li>
              <li>
                <img src={logo} alt="logo" width="100px" />
              </li>
              <li>
                <a href="/proyectos">Proyectes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
