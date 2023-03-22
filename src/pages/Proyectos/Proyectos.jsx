import React, { useState } from "react";
import "./proyectos.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import proyectos from "../../utils/proyectos";

const Proyectos = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div className="proyectos">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="wrapper">
                {proyectos.map((proyecto, index) => (
                  <img src={proyecto} alt={`Image ${index}`} key={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
