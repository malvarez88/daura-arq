import React from "react";
import "./navbar.css";

import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

import logo from "../../assets/dauralogo.png";

const Navbar = () => {
  return (
    <header>
      <motion.div 
      initial={{opacity:0, y: -100}}
      animate={{opacity: 1, y:0}}
      transition={{ ease: "linear",duration: 1 }}
      exit={{}}
      className="container">
        <div className="row">
          <div className="col-xl-12">
            <ul className="nav-links">
              <li>
                
                <a href="/proyectos">Proyectes</a>
              </li>
              <li>
                <img src={logo} alt="logo" width="100px" />
              </li>
              <li>
              <a href="/">Estudi</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
