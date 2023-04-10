import React, { useEffect } from "react";
import "./navbar.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import logo from "../../assets/dauralogo.png";
import menu from "../../assets/bars-solid.svg";

const Navbar = () => {
  // useEffect(() => {
  //   const navbarToggle = document.querySelector(".navbar-toggle");
  //   const navbarNav = document.querySelector(".navbar-nav");
  //   console.log("🚀 ~ file: Navbar.jsx:16 ~ useEffect ~ navbarNav:", navbarNav);

  //   navbarToggle.addEventListener("click", () => {
  //     navbarNav.classList.toggle("active");
  //   });
  // }, []);

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
              <a href="/proyectos" className="nav-link">Proyectos</a>
            </div>
            <div className="center-container">
              <a href="/">
                <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="rigth-container">
              <a href="/estudio" className="nav-link">Estudio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </motion.div>
  );
};

export default Navbar;
