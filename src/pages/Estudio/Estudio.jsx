import React, { useEffect, useState } from "react";
import "./estudio.css";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import { espacies, espacios, spaces } from "../../constants";
import {
  about1,
  about2,
  about3,
  wbf1,
  victoriaBassaGarrido,
  robertRusega,
  gemmaPous,
  marinaRuis,
  omarMasoud,
  miguelGarcia,
  juanRamon,
  nuriaAyala,
} from "../../assets";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { changeDocTitle } from "../../hooks/hooks";

const Estudio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const TABS = {
    US: "Us",
    TEAM: "Team",
  };
  const [activeTab, setActiveTab] = useState(TABS.US);

  const { t } = useTranslation("global");



  const language = useSelector((state) => state.language);

  const location = t('navbar.estudio')
 

  useEffect(()=> {
    changeDocTitle(location)
  },[location])

  const spacesByLanguage = {
    ca: espacies,
    en: spaces,
    default: espacios,
  };

  const lista = spacesByLanguage[language] || spacesByLanguage.default;

  function handleClick(index) {
    setActiveTab(index);
    setActiveIndex(index);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200, transition: { duration: 0.2 } }}
      transition={{ duration: 1, delay: 1 }}
      key="estudio"
    >
      <Grid container justifyContent={"center"}>
        {/* <Grid container> */}
        <Grid>
          <h5 className="title">d'aura arquitectura</h5>
        </Grid>
        {/* <Grid></Grid> */}
      </Grid>
      {/* </Grid> */}
      {/* SOBRE NOSOTROS */}
      <Grid container>
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
          <Grid xs={11}>
            <Grid container>
              {Object.keys(TABS).map((tab) => (
                <Grid
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? "active" : ""}
                  mr="7px"
                >
                  <span>{TABS[tab].toUpperCase()}</span>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* SOBRE NOSOTROS */}
          <div
            className="sobre-nosotros"
            style={{ display: activeTab === 0 ? "block" : "none" }}
          >
            <h5 className="title">d'aura arquitectura</h5>
            <p className="general-text">{t("estudio-page.sobre-nosotros-1")}</p>

            <div className="sobre-nosotros-img">
              <img src={about1} alt="about" className="img-fluid" />
              <img src={about2} alt="about" className="img-fluid" />
              <img src={about3} alt="about" className="img-fluid" />
            </div>

            <p className="general-text">{t("estudio-page.sobre-nosotros-2")}</p>
            <div>
              <img src={wbf1} alt="" className="img-fluid" />
            </div>
          </div>

          {/* EQUIPO */}
          <div
            className="equipo"
            style={{ display: activeTab === 1 ? "block" : "none" }}
          >
            <p className="general-text">{t("estudio-page.equipo")}</p>
            <div className="equipo-profile">
              <div className="profile">
                <img
                  src={victoriaBassaGarrido}
                  alt="Victoria Bassa Garrido"
                  className="img-fluid profile-img"
                />
                <p>Victoria Bassa Garrido</p>
              </div>
              <div className="profile">
                <img
                  src={robertRusega}
                  alt="Robert Rusega"
                  className="img-fluid profile-img"
                />
                <p>Robert Rusega</p>
              </div>
              <div className="profile">
                <img
                  src={gemmaPous}
                  alt="Gemma Pous"
                  className="img-fluid profile-img"
                />
                <p>Gemma Pous</p>
              </div>
              <div className="profile">
                <img
                  src={marinaRuis}
                  alt="Marina Ruis"
                  className="img-fluid profile-img"
                />
                <p>Marina Ruis</p>
              </div>
              <div className="profile">
                <img
                  src={omarMasoud}
                  alt="Omar Masoud"
                  className="img-fluid profile-img"
                />
                <p>Omar Masoud</p>
              </div>
              <div className="profile">
                <img
                  src={nuriaAyala}
                  alt="Nuria Ayala i Mitjavila"
                  className="img-fluid profile-img"
                />
                <p>Núria Ayala i Mitjavila</p>
              </div>
              <div className="profile">
                <img
                  src={juanRamon}
                  alt="Joan Ramon Rius"
                  className="img-fluid profile-img"
                />
                <p>Joan Ramon Rius</p>
              </div>
              <div className="profile">
                <img
                  src={miguelGarcia}
                  alt="Miquel Garcia Soler"
                  className="img-fluid profile-img"
                />
                <p>Miquel García Soler</p>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </motion.div>
  );
};

export default Estudio;
