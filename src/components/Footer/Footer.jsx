import React, { useState } from "react";
import "./footer.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import { instagram } from "../../assets";

const Footer = ({handleLanguageChange, language}) => {

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
                <li>
                  <div className="languages">
                    <button
                      className="change-lang"
                      onClick={() => handleLanguageChange("ca")}
                    >
                      CA
                    </button>
                    <button
                      className="change-lang"
                      onClick={() => handleLanguageChange("es")}
                    >
                      ES
                    </button>
                    <button
                      className="change-lang"
                      onClick={() => handleLanguageChange("en")}
                    >
                      EN
                    </button>
                  </div>
                </li>
                <li>
                  <a href="/espacios" className="footer-link">
                    {language.espacios}
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/contacto">
                    {language.contacto}
                  </a>
                </li>
              </ul>

              <div className="mobile-footer">
                <div className="languages">
                  <button
                    className="change-lang"
                    onClick={() => handleLanguageChange("ca")}
                  >
                    CA
                  </button>
                  <button
                    className="change-lang"
                    onClick={() => handleLanguageChange("es")}
                  >
                    ES
                  </button>
                  <button
                    className="change-lang"
                    onClick={() => handleLanguageChange("en")}
                    
                  >
                    EN
                  </button>
                </div>
                <div className="instagram">
                  <a href="">
                    <img
                      src={instagram}
                      alt="instagram"
                      width="20px"
                      height="20px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
