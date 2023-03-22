import React, { useState } from "react";
import "./proyectos.css";

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
            <div>
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
            </div>
            <div className="wrapper">
              {proyectos.map((proyecto, index) => (
                <img src={proyecto} alt={`Image ${index}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
