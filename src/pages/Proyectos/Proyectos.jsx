import React, { useState } from "react";

import "./proyectos.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { proyectos, colores } from "../../constants";

import translations from "../../utils/languages.json";

const Proyectos = () => {
  const lang = useSelector((state) => state.language);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");


  const categorias = Object.keys(colores);

  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  function mostrarProyectos(categoria) {
    setCategoriaSeleccionada(categoria);
    setIsOpen(!isOpen);
  }

  const language = translations[lang];

  return (
    // <AnimatePresence>
    <div className="proyectos">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <ul className="categories-list">
                {language.listaproyectos.map((categoria, index) => (
                  <li
                    key={index}
                    onClick={() => mostrarProyectos(categoria)}
                    style={{
                      color:
                        categoria === categoriaSeleccionada
                          ? colores[categoria]
                          : "",
                    }}
                  >
                    {categoria}
                  </li>
                ))}
              </ul>

              <div className="dropdown">
                <h5
                  className="mobile-title"
                  style={{
                    color:
                      categorias === categoriaSeleccionada
                        ? colores[categorias]
                        : "",
                  }}
                >
                  {language.proyectos}
                </h5>
                <button
                  className="dropdown-toggle"
                  onClick={handleToggle}
                  style={{
                    color:
                      categorias === categoriaSeleccionada
                        ? colores[categorias]
                        : "",
                  }}
                >
                  {categoriaSeleccionada.toLocaleUpperCase()}
                </button>
                {isOpen && (
                  <ul className="dropdown-menu">
                    {language.listaproyectos.map((categoria, index) => (
                      <li
                        key={index}
                        onClick={() => mostrarProyectos(categoria)}
                        style={{
                          color:
                            categoria === categoriaSeleccionada
                              ? colores[categoria]
                              : "",
                        }}
                      >
                        {categoria}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
            <div className="grid-container">
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
                        transition={{ duration: 1, delay: 0.5 }}
                        key={index}
                      >
                        <Link
                          to={`/proyectos/${proyecto.categoria}/${proyecto.path}`}
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
                        </Link>
                      </motion.div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </AnimatePresence>
  );
};

export default Proyectos;
