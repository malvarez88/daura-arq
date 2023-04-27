import React, { useState,useEffect } from "react";
import "./footer.css";

import { motion } from "framer-motion";
import { instagram } from "../../assets";

import { setNewLanguage } from "../../store/language";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router";

import { useTranslation } from "react-i18next";

import i18n from "i18next";

const Footer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const [active, setActive] = useState(lang);
  const location = useLocation();


  // useEffect(() => {
  //   i18n.changeLanguage(lang); 
  // },[]);

  const [t, i18n] = useTranslation("global");

  var colorNoticias;
  var colorContacto;

  if (location.pathname === "/noticias") {
    colorNoticias = "#DF6537";
  } else if (location.pathname === "/contacto") {
    colorContacto = "#DF6537";
  }

  const handleLanguageChange = (newLang) => {
    dispatch(setNewLanguage(newLang));
    setActive(newLang);
    i18n.changeLanguage(newLang)
  };


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
                <li className="footer-li">
                  <div className="languages">
                    <button
                      onClick={() => handleLanguageChange("ca")}
                      style={{ color: active === "ca" ? "black" : "lightgray" }}
                    >
                      CA
                    </button>
                    <button
                      onClick={() => handleLanguageChange("es", 1)}
                      style={{ color: active === "es" ? "black" : "lightgray" }}
                    >
                      ES
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en", 2)}
                      style={{ color: active === "en" ? "black" : "lightgray" }}
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
                    style={{
                      color: `${colorNoticias ? colorNoticias : "black"}`,
                    }}
                  >
                    {t("footer.noticias")}
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    href="/contacto"
                    className="footer-link"
                    style={{
                      color: `${colorContacto ? colorContacto : "black"}`,
                    }}
                  >
                    {t("footer.contacto")}
                  </a>
                  <a href="">
                    <img
                      src={instagram}
                      alt="instagram"
                      width="15px"
                      height="15px"
                    />
                  </a>
                </li>
              </ul>

              <div className="mobile-footer">
                <div className="languages">
                  <button
                    onClick={() => handleLanguageChange("ca")}
                    style={{ color: active === "ca" ? "black" : "lightgray" }}
                  >
                    CA
                  </button>
                  <button
                    onClick={() => handleLanguageChange("es", 1)}
                    style={{ color: active === "es" ? "black" : "lightgray" }}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en", 2)}
                    style={{ color: active === "en" ? "black" : "lightgray" }}
                  >
                    EN
                  </button>
                  <br />
                  <span className="daura-footer">@ d'aura arquitectura</span>
                  {/* <span className="daura-footer">@ d'aura arquitectura</span> */}
                </div>
                <div className="instagram">
                  <a href="">
                    <img
                      src={instagram}
                      alt="instagram"
                      width="15px"
                      height="15px"
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
