import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./proyectos.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import { proyectos, categorias, colores } from "../../constants";
import ProyectoAbierto from "../ProyectoAbierto/ProyectoAbierto";

const Proyectos = (setSelectedProject) => {
  // const [isActive, setIsActive] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  function mostrarProyectos(categoria) {
    setCategoriaSeleccionada(categoria);
  }

  const categorias = Object.keys(colores);

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
                <ul className="categories-list">
                  {categorias.map((categoria) => (
                    <li
                      key={categoria}
                      onClick={() => mostrarProyectos(categoria)}
                      style={{
                        color:
                          categoria === categoriaSeleccionada ? colores[categoria] : "",
                      }}
                    >
                      {categoria}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="wrapper">
                {proyectos.map((proyecto, index) => {
                  if (
                    categoriaSeleccionada === "todos" ||
                    proyecto.categoria === categoriaSeleccionada
                  ) {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        key={index}
                      >
                        <a
                          href={`/proyectos/${proyecto.path}`}
                          // onClick={handleClick}
                          className="link-project"
                        >
                          <div
                            className="proyect-thumb"
                            data-categoria={proyecto.categoria}
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
                          </div>
                        </a>
                      </motion.div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Proyectos;
