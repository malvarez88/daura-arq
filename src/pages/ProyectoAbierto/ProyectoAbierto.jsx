import React, { useState } from "react";
import "./proyectoabierto.css";
import { mockProject } from "../../constants";

const ProyectoAbierto = () => {
  const actualProject = mockProject;
  const images = actualProject.images;

const [visible, setVisible] = useState(false)

  return (
    <div className="proyectos">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="project-info">
              <h4>{actualProject.title.toLocaleUpperCase()}</h4>
              <h6>{actualProject.location}</h6>
              <button className="info"  onClick={() => setVisible(!visible)}>
                <span>+ INFO</span>
              </button>
              {visible && 
              <div className="project-description">
                {actualProject.description}
                <div className="project-description-info">
                  <ul className="project-list">
                    <li>
                      {actualProject.año}
                    </li>
                    <li>
                      {actualProject.superficie}
                    </li>
                    <li>
                      {actualProject.equipo}
                    </li>
                    <li>
                      {actualProject.colaboradores}
                    </li>
                    <li>
                      {actualProject.fotografia}
                    </li>
                  </ul>
                </div>
              </div>
}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="img-thumb">
              <img
                src={actualProject.thumb}
                alt={actualProject.title}
                className="img-fluid"
              />
            </div>
            <div className="images-section">
              {actualProject.images.map((img, index) => (
                <img src={img} alt={index} className="open-thumb img-fluid" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoAbierto;
