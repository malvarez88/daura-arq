import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { motion } from "framer-motion";

import { proyectosES, coloresEs } from "../../constants/proyectos-es";
import { proyectosEN, colors } from "../../constants/proyectos-en";
import { proyectosCA, colorsCA } from "../../constants/proyectos-ca";

import "./proyectoabierto.css";
import { useSelector } from "react-redux";

const ProyectoAbierto = ({ setLogoColor }) => {
  const { ref, categoria } = useParams();
  const [visible, setVisible] = useState(false);
  const lang = useSelector((state) => state.language);

  var proyectos;
  var color;

  if (lang === "es") {
    proyectos = proyectosES;
    color = coloresEs;
  } else if (lang === "en") {
    proyectos = proyectosEN;
    color = colors;
  } else {
    proyectos = proyectosCA;
    color = colorsCA;
  }

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
                  // margin: "0 66px",
                  padding: "20px",
                }}
              >
                {actualProject.categoria.toUpperCase()}
              </h6>
              <div className="project-info">
                <h4
                  style={{
                    color: coloresEs[categoria],
                  }}
                >
                  {actualProject.title.toUpperCase()}
                </h4>
                <h6>{actualProject.location}</h6>
                <button className="info" onClick={() => setVisible(!visible)}>
                  <span>{!visible ? "+ INFO" : " - INFO"}</span>
                </button>
                {visible && (
                  <div className="project-description">
                    <p className="general-text">{actualProject.description}</p>
                    <div className="project-description-info">
                      <ul className="project-list">
                        {actualProject.año ? (
                          <li className="project-link">
                            <span>AÑO: </span>
                            <span>{actualProject.año} </span>
                          </li>
                        ) : null}
                        {actualProject.superficie ? (
                          <li className="project-link">
                            <span>SUPERFICIE:</span>
                            {lang === "es" || lang === "ca" ? (
                              <span>{actualProject.superficie}㎡</span>
                            ) : (
                              <span>
                                {actualProject.superficie *
                                  (10.7639).toFixed(2)}{" "}
                                sq ft
                              </span>
                            )}
                          </li>
                        ) : null}
                        {actualProject.equipo ? (
                          <li className="project-link">
                            <span>EQUIPO:</span>
                            <div className="double">
                            <span>{actualProject.equipo}</span>
                            </div>
                          </li>
                        ) : null}
                        {actualProject.colaboradores ? (
                          <li className="project-link">
                            <span>COLABORADORES:</span>
                            <div className="double">
                              <span>{actualProject.colaboradores}</span>
                            </div>
                          </li>
                        ) : null}
                        {actualProject.fotografia ? (
                          <li className="project-link">
                            <span>FOTOGRAFIA: </span>
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
