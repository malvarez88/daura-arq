import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./proyectos.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import { proyectos } from "../../constants";
import ProyectoAbierto from "../ProyectoAbierto/ProyectoAbierto";

const Proyectos = (setSelectedProject) => {
  const [isActive, setIsActive] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleProyect = (proyecto) => {
    setSelectedProject(proyecto)
  };

  return (
    <AnimatePresence>
      <div className="proyectos">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <ul className="proyect-list">
                  <li>
                    <a
                      href=""
                      onClick={handleClick}
                      className={isActive ? "active" : ""}
                    >
                      todo
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={handleClick}
                      className={isActive ? "active" : ""}
                    >
                      arquitectura y urbanismo
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={handleClick}
                      className={isActive ? "active" : ""}
                    >
                      deporte y ocio
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={handleClick}
                      className={isActive ? "active" : ""}
                    >
                      patrimonio
                    </a>
                  </li>
                </ul>
              </motion.div>
              <div className="wrapper">
                {proyectos.map((proyecto, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    // animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="proyect-thumb">
                      <a
                        href={`/proyectos/${proyecto.path}`}
                        className="proyect-anchor"
                        onClick={handleProyect}
                      >  
                      <img
                        src={proyecto.thumb}
                        alt={`Image ${index}`}
                        key={index}
                        width="300px"
                        height="300px"
                      />
                      <div className="proyect-description">
                        <p>
                          {proyecto.title.toUpperCase()}
                          {proyecto.description}
                        </p>
                      </div>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Proyectos;
