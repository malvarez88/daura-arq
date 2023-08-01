/* eslint-disable react/button-has-type */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, useLocation } from 'react-router';
import Categories from '../../Models/Categories';
import Projects from '../../Models/Projects';
import { dauraCategories } from '../../constants/dauraCategorires';
import { PROJECTS } from '../../constants/projects';
import { thousandSeparator } from '../../utils/numbers';
import './proyectoabierto.css';
import { axiosInstance } from '../../services/axiosInstance';

function ProyectoAbierto({ setLogoColor }) {
  const { t } = useTranslation('global');
  const location = useLocation();
  const { ref } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const isCategorySelected = queryParams.get('category');
  const projects = new Projects(PROJECTS);
  const selectedProject = projects?.getProjectByRef(ref);
  const categories = new Categories(dauraCategories);
  const selectedCategory = categories?.getCategory(selectedProject?.category);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const surfaceMts = thousandSeparator(Number(selectedProject?.surface));
  const surfaceFts = thousandSeparator(Number(selectedProject?.surface) * (10.7639).toFixed());

  const handleGoBack = () => {
    if (isCategorySelected) {
      const state = selectedCategory;
      return navigate('/proyectos', { state });
    }
    return navigate(-1);
  };
  useEffect(() => {
    setLogoColor(selectedCategory?.categoryColor);
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ ease: 'linear', duration: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="proyectos">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h6
                style={{
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                {t(`Projects.Categories.${selectedProject?.category}`).toUpperCase()}
              </h6>
              <div className="project-info">
                <div className="project-title">
                  <h4
                    style={{
                      color: selectedCategory?.categoryColor,
                    }}
                  >
                    {selectedProject.title.toUpperCase()}
                  </h4>
                  <button
                    className="btn btn-primary d-none d-sm-block"
                    type="primary"
                    style={{
                      background: selectedCategory?.categoryColor,
                      padding: '6px',
                      fontSize: '12px',
                      width: '80px',
                      color: selectedCategory?.categoryTextColor,
                      maxHeight: '35px',
                    }}
                    onClick={() => handleGoBack()}
                  >
                    {t('proyecto-abierto.volver')}
                  </button>
                </div>
                <h6>{selectedProject.location}</h6>
                <button className="info" onClick={() => setShowInfo(!showInfo)}>
                  <span
                    style={{
                      color: selectedCategory?.categoryColor,
                    }}
                  >
                    {!showInfo ? '+ INFO' : ' - INFO'}
                  </span>
                </button>
                {showInfo && (
                  <div className="project-description">
                    <p className="general-text">{t(`Projects.Description.${ref}`)}</p>
                    <div className="project-description-info">
                      <ul className="project-list">

                        {/* SE saco el Año! */}

                        {/* {selectedProject.year ? (
                          <li className="project-link">
                            <span>
                              {t("proyecto-abierto.year").toUpperCase()}:
                            </span>
                            <span>{selectedProject.year}</span>
                          </li>
                        ) : null} */}

                        {selectedProject.surface && (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.superficie')}
                              :
                            </span>
                            <span>{t('Projects.Surface', { surfaceMts, surfaceFts })}</span>
                          </li>
                        )}

                        {/* NO vi que ninguno tenga team o colaboradores */}
                        {(selectedProject.team && selectedProject.team.length > 0) && (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.equipo')}
                              :
                            </span>
                            <div className="double">
                              {selectedProject.team.map((nombre, index) => (
                                <span key={index}>{nombre}</span>
                              ))}
                            </div>
                          </li>
                        )}
                        {selectedProject.colaboradores && (
                          <li className="project-link">
                            <span>
                              {t(
                                'proyecto-abierto.colaboradores',
                              )}
                              :
                            </span>
                            <div className="double">
                              <span>{selectedProject.colaboradores}</span>
                            </div>
                          </li>
                        )}

                        {selectedProject.photographer ? (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.fotografia')}
                              :
                            </span>
                            <span>{selectedProject.photographer}</span>
                          </li>
                        ) : null}
                        {selectedProject.promoter ? (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.promotor')}
                              :
                            </span>
                            <span>{selectedProject.promoter}</span>
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
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="img-fluid"
                  />
                </div>
                <div className="images-section">
                  {selectedProject.images.map((img, index) => (
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
}

export default ProyectoAbierto;
