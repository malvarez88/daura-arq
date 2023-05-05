import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { motion } from "framer-motion";

import { proyectosES, coloresEs } from "../../constants/proyectos-es";
import { proyectosEN, colors } from "../../constants/proyectos-en";
import { proyectosCA, colorsCA } from "../../constants/proyectos-ca";

import "./proyectoabierto.css";

const ProyectoAbierto = ({ setLogoColor }) => {
  const { ref, categoria } = useParams();
  const [visible, setVisible] = useState(false);
  const lang = useSelector((state) => state.language);
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
    setLogoColor("#DF6537")
  };

  const langData = {
    es: {
      proyectos: proyectosES,
      color: coloresEs,
    },
    en: {
      proyectos: proyectosEN,
      color: colors,
    },
    ca: {
      proyectos: proyectosCA,
      color: colorsCA,
    },
  };
  
  const { proyectos, color } = langData[lang] || langData.es;

  const actualProject = proyectos.find((proyecto) => proyecto.ref === ref);

  var logoColor = color[actualProject.categoria];

  useEffect(() => {
    setLogoColor(logoColor);
  }, [actualProject]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="proyectos">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h6
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                {actualProject.categoria.toUpperCase()}
              </h6>

              <div className="project-info">
                <div className="project-title">
                  <h4
                    style={{
                      color: color[categoria],
                    }}
                  >
                    {actualProject.title.toUpperCase()}
                  </h4>
                  <button
                    className="btn btn-primary d-none d-sm-block"
                    style={{
                      background: color[categoria],
                      padding: "6px",
                      fontSize: "12px",
                      width: "80px",
                    }}
                    onClick={() => handleGoBack()}
                  >
                    {t('proyecto-abierto.volver')}
                  </button>
                </div>
                <h6>{actualProject.location}</h6>
                <button className="info" onClick={() => setVisible(!visible)}>
                  <span
                  style={{
                    color: color[categoria],
                  }}
                  >{!visible ? "+ INFO" : " - INFO"}</span>
                </button>
                {visible && (
                  <div className="project-description">
                    <p className="general-text">{actualProject.description}</p>
                    <div className="project-description-info">
                      <ul className="project-list">
                        {actualProject.año ? (
                          <li className="project-link">
                            <span>
                              {t("proyecto-abierto.año").toUpperCase()}:
                            </span>
                            <span>{actualProject.año}</span>
                          </li>
                        ) : null}
                        {actualProject.superficie ? (
                          <li className="project-link">
                            <span>
                              {t("proyecto-abierto.superficie").toUpperCase()}:
                            </span>
                            {lang === "es" || lang === "ca" ? (
                              <span>{actualProject.superficie}㎡</span>
                            ) : (
                              <span>
                                {actualProject.superficie *
                                  (10.7639).toFixed()}
                                sq ft
                              </span>
                            )}
                          </li>
                        ) : null}
                        {actualProject.equipo > 0 ? (
                          <li className="project-link">
                            <span>
                              {t("proyecto-abierto.equipo").toUpperCase()}:
                            </span>
                            <div className="double">
                              <span>{actualProject.equipo}</span>
                            </div>
                          </li>
                        ) : null}
                        {actualProject.colaboradores ? (
                          <li className="project-link">
                            <span>
                              {t(
                                "proyecto-abierto.colaboradores"
                              ).toUpperCase()}
                              :
                            </span>
                            <div className="double">
                              <span>{actualProject.colaboradores}</span>
                            </div>
                          </li>
                        ) : null}
                        {actualProject.fotografia ? (
                          <li className="project-link">
                            <span>
                              {t("proyecto-abierto.fotografia").toUpperCase()}:
                            </span>
                            <span>{actualProject.fotografia}</span>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-12">
              <div className="open-project-images">
                <div className="img-thumb">
                  <img
                    src={actualProject.images[0]}
                    alt={actualProject.title}
                    className="img-fluid"
                  />
                </div>
                <div className="images-section">
                  {actualProject.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={index}
                      className="open-thumb img-fluid"
                    />
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

export default ProyectoAbierto;
