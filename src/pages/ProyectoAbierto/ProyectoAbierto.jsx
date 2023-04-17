import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion";

import "./proyectoabierto.css";
import { mockProject } from "../../constants";

const ProyectoAbierto = () => {
  const actualProject = mockProject;

  const [visible, setVisible] = useState(false);

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
              <h6 style={{ textAlign: "center", margin: "10px 0 40px 0" }}>
                {actualProject.categoria.toUpperCase()}
              </h6>
              <div className="project-info">
                <h4 style={{ color: "#3068B0" }}>
                  {actualProject.title.toLocaleUpperCase()}
                </h4>
                <h6>{actualProject.location}</h6>
                <button className="info" onClick={() => setVisible(!visible)}>
                  <span>{!visible ? "+ INFO" : " - INFO"}</span>
                </button>
                {visible && (
                  <div className="project-description">
                    {actualProject.description}
                    <div className="project-description-info">
                      <ul className="project-list">
                        <li className="project-link">
                          <span>AÑO: </span>
                          <span>{actualProject.año} </span>
                        </li>
                        <li className="project-link">
                          <span>SUPERFICIE:</span>
                          <span>{actualProject.superficie}</span>
                        </li>
                        <li className="project-link">
                          <span>EQUIPO:</span>
                          <span>{actualProject.equipo}</span>
                        </li>
                        <li className="project-link">
                          <span>COLABORADORES:</span>
                          <span>{actualProject.colaboradores}</span>
                        </li>
                        <li className="project-link">
                          <span>FOTOGRAFIA:</span>
                          <span>{actualProject.fotografia}</span>
                        </li>
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
                    src={actualProject.thumb}
                    alt={actualProject.title}
                    className="img-fluid"
                  />
                </div>
                <div className="images-section">
                  {actualProject.images.map((img, index) => (
                    <img
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
