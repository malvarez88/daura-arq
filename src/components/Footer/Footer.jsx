import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { instagram } from "../../assets";
import "./footer.css";

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="footer-list">
                <li className="footer-li">
                  <div className="languages">
                    <button
                      onClick={() => handleLanguageChange("ca")}
                      style={{ color: i18n?.resolvedLanguage === "ca" ? "black" : "lightgray" }}
                    >
                      CA
                    </button>
                    <button
                      onClick={() => handleLanguageChange("es")}
                      style={{ color: i18n?.resolvedLanguage === "es" ? "black" : "lightgray" }}
                    >
                      ES
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      style={{ color: i18n?.resolvedLanguage === "en" ? "black" : "lightgray" }}
                    >
                      EN
                    </button>
                    <br />
                  </div>
                  <span className="daura-footer">@ d'aura arquitectura</span>
                </li>
                <li className="footer-li">
                  <a
                    href="/noticias"
                    className="footer-link"
                  >
                    <span>{t("footer.noticias")}</span>
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    href="/contacto"
                    className="footer-link"
                  >
                    <span>{t("footer.contacto")}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/daurastudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagram}
                      alt="instagram"
                      width="20px"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>


              <div className="mobile-footer">
                <div className="languages">
                  <button
                    onClick={() => handleLanguageChange("ca")}
                    style={{ color: i18n?.resolvedLanguage === "ca" ? "black" : "lightgray" }}
                  >
                    CA
                  </button>
                  <button
                    onClick={() => handleLanguageChange("es")}
                    style={{ color: i18n?.resolvedLanguage === "es" ? "black" : "lightgray" }}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    style={{ color: i18n?.resolvedLanguage === "en" ? "black" : "lightgray" }}
                  >
                    EN
                  </button>
                  <br />
                  <span className="daura-footer">@ d'aura arquitectura</span>
                  {/* <span className="daura-footer">@ d'aura arquitectura</span> */}
                </div>
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/daurastudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagram}
                      alt="instagram"
                      width="10px"
                      className="img-fluid"
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
