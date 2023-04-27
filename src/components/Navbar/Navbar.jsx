import React, { useEffect, useState } from "react";
import "./navbar.css";

import Logo from "../Logo/Logo";

import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = ({ logoColor }) => {
  const location = useLocation();

  const { t } = useTranslation("global");

  var colorProyecto;
  var colorEstudio;

  if (location.pathname === "/proyectos") {
    colorProyecto = "#DF6537";
  } else if (location.pathname === "/estudio") {
    colorEstudio = "#DF6537";
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const lang = useSelector((state) => state.language);

  // var language;

  // if (lang === "es") {
  //   language = es[lang];
  // } else if (lang === "en") {
  //   language = en[lang];
  // } else {
  //   language = ca[lang];
  // }

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
              <div className="navbar">
                <div className="link-container">
                  <a
                    href="/proyectos"
                    className="nav-link"
                    style={{
                      color: `${colorProyecto ? colorProyecto : "black"}`,
                    }}
                  >
                    <span>{t("navbar.proyectos")}</span>
                  </a>
                </div>
                <div className="link-container logo-container">
                  <a href="/" className="nav-link" />
                  <Logo logoColor={logoColor} />
                </div>
                <div className="link-container last">
                  <a
                    href="/estudio"
                    className="nav-link"
                    style={{
                      color: `${colorEstudio ? colorEstudio : "black"}`,
                    }}
                  >
                    <span className="last">{t("navbar.estudio")}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="mobile-navbar">
                <div className="logo">
                  <a href="/" className="nav-link" />
                  <Logo logoColor={logoColor} />
                </div>
                <div className={`hamburger open}`} onClick={handleToggleMenu}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <div className={`menu ${isOpen ? "open" : ""}`}>
                <div className="col-12" style={{background: "transparent"}}>
                  <div className="nav-open-container">
                    <div className="logo">
                      <a href="/" className="nav-link" />
                      <Logo logoColor={logoColor} />
                    </div>
                    <div
                      className={`hamburger ${isOpen ? "open" : ""} close-nav`}
                      onClick={handleToggleMenu}
                    >
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>

                <ul className="navbar-menu">
                  <li className="mobile-link">
                    <a href="/proyectos">{t("navbar.proyectos")}</a>
                  </li>
                  <li className="mobile-link">
                    <a href="/espacios">{t("navbar.espacios")}</a>
                  </li>
                  <li className="mobile-link">
                    <a href="/estudio">{t("navbar.estudio")}</a>
                  </li>
                  <li className="mobile-link">
                    <a href="/contacto">{t("footer.contacto")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
