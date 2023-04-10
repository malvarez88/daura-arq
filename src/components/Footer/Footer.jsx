import React from "react";
import "./footer.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: 1 }}
      exit={{}}
    >
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="footer-list">
                <li>CA / EN / ES</li>
                <li>
                  <a href="/espacios" className="footer-link">
                    Espacios
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/contacto">
                    Contacto
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
