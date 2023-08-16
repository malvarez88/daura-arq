/* eslint-disable jsx-a11y/click-events-have-key-events */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './estudio.module.css';
import { changeDocTitle } from '../../hooks/hooks';
import { axiosInstance } from '../../services/axiosInstance';

function Estudio() {
  const [about, setAbout] = useState(null);
  const [team, setTeam] = useState(null);

  const TABS = {
    US: 'Us',
    TEAM: 'Team',
  };
  const [activeTab, setActiveTab] = useState(TABS.US);

  const { t, i18n } = useTranslation('global');

  const locale = i18n.language;

  const location = t('navbar.estudio');

  useEffect(() => {
    changeDocTitle(location);
  }, [location]);

  function handleClick(tab) {
    setActiveTab(tab);
  }

  const getAboutUs = async () => {
    const { data } = await axiosInstance().get(
      `/nosotro?populate[nosotrosBanner][fields][0]=url&populate[nosotrosImagenes][fields]=url&locale=${locale}`,
    );
    setAbout(data.attributes);
  };
  // nosotro?locale=${locale}

  const getTeam = async () => {
    const { data } = await axiosInstance().get(
      '/arquitectos?populate[imagen][fields][0]=url',
    );
    setTeam(data);
  };

  useEffect(() => {
    getAboutUs();
    getTeam();
  }, [locale]);

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
          <div className="col-12">
            <div className={s.estudio}>
              <ul className={s.estudioList}>
                {Object.keys(TABS).map((tab, index) => (
                  <li
                    key={tab}
                    onClick={() => handleClick(TABS[tab])}
                    className={activeTab === TABS[tab] ? s.active : ''}
                  >
                    {t(`estudio-page.${TABS[tab]}`)}
                  </li>
                ))}
              </ul>
              {/* SOBRE NOSOTROS */}
              <div
                style={{ display: activeTab === TABS.US ? 'block' : 'none' }}
              >
                <h5 className="title">d'aura arquitectura</h5>
                <p className="general-text">
                  {/* {t('estudio-page.sobre-nosotros-1')} */}
                  {about?.nosotros1}
                </p>

                <div className={s.sobreNosotrosImg}>
                  {about?.nosotrosImagenes?.data?.map((image) => (
                    <img
                      key={image.id}
                      src={image?.attributes?.url}
                      alt="about"
                      className={`img-fluid img-team ${s.mobileFullWidth}`}
                    />
                  ))}
                </div>

                <p className="general-text">{about?.nosotros2}</p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={about?.nosotrosBanner?.data?.attributes?.url}
                    alt=""
                    className={`img-fluid img-team ${s.mobileFullWidth}`}
                  />
                </div>
              </div>

              {/* EQUIPO */}
              <div
                className="eqiupo"
                style={{ display: activeTab === TABS.TEAM ? 'block' : 'none' }}
              >
                <p className="general-text">{about?.equipo}</p>
                <div className={s.equipoProfile}>
                  {team?.map((member) => (
                    <div
                      className={s.profile}
                      key={member}
                    >
                      <img
                        src={member?.attributes?.imagen?.data?.attributes?.url}
                        alt={member?.attributes?.Nombre}
                        className={`img-fluid img-team ${s.mobileFullWidth}`}
                      />
                      <p>{member?.attributes?.Nombre}</p>
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
}

export default Estudio;
