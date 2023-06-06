import React, { useState } from "react";
import "./navbar.css";

import Logo from "../Logo/Logo";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ logoColor }) => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  var colorEstudio;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChangePath = (path) => {
    navigate(path)
    setIsOpen(false);
  }

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
                  <Link
                    to="/proyectos"
                    className="nav-link"
                    style={{
                      color: `${logoColor ? logoColor : "black"}`,
                    }}
                  >
                    <span>{t("navbar.proyectos")}</span>
                  </Link>
                </div>
                <div className="link-container logo-container">
                  <Link to="/" className="nav-link" />
                  <Logo logoColor={logoColor} />
                </div>
                <div className="link-container last">
                  <Link
                    to="/estudio"
                    className="nav-link"
                    style={{
                      color: `${colorEstudio ? colorEstudio : "black"}`,
                    }}
                  >
                    <span className="last">{t("navbar.estudio")}</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="mobile-navbar">
                <div className="logo">
                  <Link to="/" className="nav-link" />
                  <Logo logoColor={logoColor} />
                </div>
                <div className={`hamburger open}`} onClick={handleToggleMenu}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <div className={`menu ${isOpen ? "open" : ""}`}>
                <div className="col-12" style={{ background: "transparent" }}>
                  <div className="nav-open-container">
                    <div className="logo">
                      <Link to="/" className="nav-link" />
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
                  <li className="mobile-link" onClick={() => handleChangePath("/proyectos")}>
                    {t("navbar.proyectos")}
                  </li>
                  <li className="mobile-link" onClick={() => handleChangePath("/noticias")}>
                    {t("footer.noticias")}
                  </li>
                  <li className="mobile-link" onClick={() => handleChangePath("/estudio")}>
                    {t("navbar.estudio")}
                  </li>
                  <li className="mobile-link" onClick={() => handleChangePath("/contacto")}>
                    {t("footer.contacto")}
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