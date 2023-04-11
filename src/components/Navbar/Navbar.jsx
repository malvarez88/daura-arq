import React, { useEffect, useState } from "react";
import "./navbar.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import logo from "../../assets/dauralogo.png";
import menu from "../../assets/bars-solid.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: 1 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="navbar">
              <div className="left-container">
                <a href="/proyectos" className="nav-link">
                  Proyectos
                </a>
              </div>
              <div className="center-container">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="rigth-container">
                <a href="/estudio" className="nav-link">
                  Estudio
                </a>
              </div>
            </div>
            </div>
            <div className="col-xl-12">
            <div className="mobile-navbar">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" width="70px" />
                </a>
              </div>
              <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className={`menu ${isOpen ? "open" : ""}`}>
                <ul className="navbar-menu">
                  <li className="mobile-link"><a href="/proyectos">Proyectos</a> </li>
                  <li className="mobile-link"><a href="/espacios">Espacios</a> </li>
                  <li className="mobile-link"><a href="/estudio">Estudio</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
