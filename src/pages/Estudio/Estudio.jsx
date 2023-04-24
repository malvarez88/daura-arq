import React, { useState } from "react";
import "./estudio.css";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { partners } from "../../constants";
import {
  about1,
  about2,
  about3,
  barcelona1,
  profile,
} from "../../assets";

import en from "../../languages/en.json";
import es from "../../languages/es.json";
import ca from "../../languages/ca.json";

const Estudio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const lang = useSelector((state) => state.language);

  let language;

  if (lang === "es") {
    language = es[lang];
  } else if (lang === "en") {
    language = en[lang];
  } else {
    language = ca[lang];
  }

  function handleClick(index) {
    setActiveTab(index);
    setActiveIndex(index);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="estudio">
              <ul className="estudio-list">
                {language.listaestudio.map((espacio, index) => (
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
                <p className="general-text">{language.sobrenosotros}</p>
 
                  <div className="sobre-nosotros-img">
                    <img src={about1} alt="about" className="img-fluid" />
                    <img src={about2} alt="about" className="img-fluid" />
                    <img src={about3} alt="about" className="img-fluid" />
                  </div>

                <p className="general-text">
                 {language.sobrenosotros2}
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
                  <img src={barcelona1} alt="" className="img-fluid" />
                </div>
              </div>

              {/* EQUIPO */}
              <div
                className="eqiupo"
                style={{ display: activeTab === 1 ? "block" : "none" }}
              >
                <p className="general-text">
                 {language.equipo}
                </p>
                <div className="equipo-profile">
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Joan Ramon Rius</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Miquel García Soler</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Estudio;
