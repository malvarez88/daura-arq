import React, { useState } from "react";
import "./estudio.css";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import { partners, espacies, espacios, spaces } from "../../constants";
import {
  about1,
  about2,
  about3,
  wbf1,
  profile,
  gemmaPous,
  juanRamon,
  marinaRuis,
  miguelGarcia,
  nuriaAyala,
  omarMasoud,
  robertRusega,
  equipo,
} from "../../assets";

const Estudio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useTranslation("global");

  const language = useSelector((state) => state.language);

  const team = [gemmaPous, juanRamon, marinaRuis, miguelGarcia, nuriaAyala, omarMasoud, robertRusega]

  var lista;
  if (language === "es") {
    lista = espacios;
  } else if (language === "en") {
    lista = spaces;
  } else {
    lista = espacies;
  }

  function handleClick(index) {
    setActiveTab(index);
    setActiveIndex(index);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200, transition: { duration: 0.1 } }}
      transition={{ duration: 1, delay: 1 }}
      key="estudio"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="estudio">
              <ul className="estudio-list">
                {lista.map((espacio, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
                    className={activeIndex === index ? "active" : ""}
                  >
                    {espacio}
                  </li>
                ))}
              </ul>
              {/* SOBRE NOSOTROS */}
              <div
                className="sobre-nosotros"
                style={{ display: activeTab === 0 ? "block" : "none" }}
              >
                <h5 className="title">d'aura arquitectura</h5>
                <p className="general-text">
                  {t("estudio-page.sobre-nosotros-1")}
                </p>

                <div className="sobre-nosotros-img">
                  <img src={about1} alt="about" className="img-fluid" />
                  <img src={about2} alt="about" className="img-fluid" />
                  <img src={about3} alt="about" className="img-fluid" />
                </div>

                <p className="general-text">
                  {t("estudio-page.sobre-nosotros-2")}
                </p>
                <ul className="partner-list">
                  {partners.map((partner, index) => (
                    <li key={index}>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {partner.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div>
                  <img src={wbf1} alt="" className="img-fluid" />
                </div>
              </div>

              {/* EQUIPO */}
              <div
                className="eqiupo"
                style={{ display: activeTab === 1 ? "block" : "none" }}
              >
                <p className="general-text">{t("estudio-page.equipo")}</p>
                <div className="equipo-profile">
                  <div className="profile">
                    <img src={nuriaAyala} alt="Nuria Ayala i Mitjavila" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                  <div className="profile">
                    <img src={juanRamon} alt="Joan Ramon Rius" className="img-fluid" />
                    <p>Joan Ramon Rius</p>
                  </div>
                  <div className="profile">
                    <img src={miguelGarcia} alt="Miquel Garcia Soler" className="img-fluid" />
                    <p>Miquel García Soler</p>
                  </div>
                  <div className="profile">
                    <img src={gemmaPous} alt="Gemma Pous" className="img-fluid" />
                    <p>Gemma Pous</p>
                  </div>
                  <div className="profile">
                    <img src={omarMasoud} alt="Omar Masoud" className="img-fluid" />
                    <p>Omar Masoud</p>
                  </div>
                  <div className="profile">
                    <img src={robertRusega} alt="Robert Rusega" className="img-fluid" />
                    <p>Robert Rusega</p>
                  </div>
                  <div className="profile">
                    <img src={marinaRuis} alt="Marina Ruis" className="img-fluid" />
                    <p>Marina Ruis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Estudio;
