import React from "react";
import "./footer.css";

import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <motion.div
              initial={{opacity:0, y:100}}
              animate={{opacity: 1, y: 0}}
              transition={{ ease: "linear",duration: 1 }}
              exit={{}}
            >
            <ul className="footer-list">
              <li>CA / EN / ES</li>
              <li>ESPACIOS</li>
              <li><a href="/contact">CONTACTE</a> </li>
            </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
