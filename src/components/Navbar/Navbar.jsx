import React, { useEffect, useState } from "react";
import "./navbar.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import logo from "../../assets/dauralogo.png";
import menu from "../../assets/bars-solid.svg";

const Navbar = ({language}) => {  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
      >
        
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className={`navbar ${isScrolled && "header-scrolled"}`}>
                <div className="left-container">
                  <a href="/proyectos" className="nav-link">
                    {language.proyectos}
                  </a>
                </div>
                <div className="center-container">
                  <a href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="rigth-container">
                  <a href="/estudio" className="nav-link">
                    {language.estudio}
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
                <div
                  className={`hamburger ${isOpen ? "open" : ""}`}
                  onClick={handleToggleMenu}
                >
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className={`menu ${isOpen ? "open" : ""}`}>
                  <ul className="navbar-menu">
                    <li className="mobile-link">
                      <a href="/proyectos">{language.proyectos}</a>{" "}
                    </li>
                    <li className="mobile-link">
                      <a href="/espacios">{language.espacios}</a>{" "}
                    </li>
                    <li className="mobile-link">
                      <a href="/estudio">{language.estudio}</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </motion.div>
     </header>
  );
};

export default Navbar;
