import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./estudio.module.css";

import {
  about1,
  about2,
  about3,
  wbf1,
} from "../../assets";
import { equipo } from "../../constants";
import { changeDocTitle } from "../../hooks/hooks";

const Estudio = () => {
  const TABS = {
    US: "Us",
    TEAM: "Team"
  };
  const [activeTab, setActiveTab] = useState(TABS.US);

  const { t } = useTranslation("global");

  const location = t('navbar.estudio')

  useEffect(() => {
    changeDocTitle(location)
  }, [location])

  function handleClick(tab) {
    setActiveTab(tab);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200, transition: { duration: 0.2 } }}
      transition={{ duration: 1, delay: 1 }}
      key="estudio"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={s.estudio}>
              <ul className={s.estudioList}>
                {Object.keys(TABS).map((tab, index) => (
                  <li
                    key={tab}
                    onClick={() => handleClick(TABS[tab])}
                    className={activeTab === TABS[tab] ? s.active : ""}
                  >
                    {t(`estudio-page.${TABS[tab]}`)}
                  </li>
                ))}
              </ul>
              {/* SOBRE NOSOTROS */}
              <div

                style={{ display: activeTab === TABS.US ? "block" : "none" }}
              >
                <h5 className="title">d'aura arquitectura</h5>
                <p className="general-text">
                  {t("estudio-page.sobre-nosotros-1")}
                </p>

                <div className={s.sobreNosotrosImg}>
                  <img src={about1} alt="about" className={`img-fluid img-team ${s.mobileFullWidth}`} />
                  <img src={about2} alt="about" className={`img-fluid img-team ${s.mobileFullWidth}`} />
                  <img src={about3} alt="about" className={`img-fluid img-team ${s.mobileFullWidth}`} />
                </div>

                <p className="general-text">
                  {t("estudio-page.sobre-nosotros-2")}
                </p>
                <div>
                  <img src={wbf1} alt="" className={`img-fluid img-team ${s.mobileFullWidth}`} />
                </div>
              </div>

              {/* EQUIPO */}
              <div
                className="eqiupo"
                style={{ display: activeTab === TABS.TEAM ? "block" : "none" }}
              >
                <p className="general-text">{t("estudio-page.equipo")}</p>
                <div className={s.equipoProfile}>
                  {equipo.map((member, index) => (
                    <div className={s.profile} key={index}>
                      <img src={member.image} alt={member.name} className={`img-fluid img-team ${s.mobileFullWidth}`} />
                      <p>{member.name}</p>
                    </div>
                  ))}
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
