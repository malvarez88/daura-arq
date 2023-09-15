/* eslint-disable react/button-has-type */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useLocation, useNavigate, useParams } from 'react-router';
import Project from '../../Models/Project';
import { axiosInstance } from '../../services/axiosInstance';
import './proyectoabierto.css';

function ProyectoAbierto({ setLogoColor, categories }) {
  const { t } = useTranslation('global');
  const location = useLocation();
  const { id: projectId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const isCategorySelected = queryParams.get('category');
  const [project, setProject] = useState({});
  const selectedCategory = categories?.getCategory(project?.category);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (isCategorySelected) {
      const state = selectedCategory;
      return navigate('/proyectos', { state });
    }
    return navigate(-1);
  };

  const getProject = async () => {
    const { data } = await axiosInstance().get(`/proyectos/${projectId}?populate[imagenes][fields][0]=url&populate[imagenPrincipal][fields][0]=url&populate[categoria]=nombre`);
    if (data.attributes) setProject(new Project(data));
  };
  useEffect(() => {
    getProject();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLogoColor(selectedCategory?.categoryColor);
  }, [selectedCategory]);

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
                {project?.category?.toUpperCase()}
              </h6>
              <div className="project-info">
                <div className="project-title">
                  <h4
                    style={{
                      color: selectedCategory?.categoryColor,
                    }}
                  >
                    {project?.title}
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
                <h6>{project.location}</h6>
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
                    <ReactMarkdown className="general-text">{project.description}</ReactMarkdown>
                    <div className="project-description-info">
                      <ul className="project-list">

                        {project.surface && (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.superficie')}
                              :
                            </span>
                            <span>{t('Projects.Surface', { surfaceMts: project?.surface })}</span>
                          </li>
                        )}

                        {project.team && (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.equipo')}
                              :
                            </span>
                            <div className="double">
                              {project.team.split(',').map((nombre) => (
                                <div key={nombre}>{nombre}</div>
                              ))}
                            </div>
                          </li>
                        )}
                        {project.colaboradores && (
                          <li className="project-link">
                            <span>
                              {t(
                                'proyecto-abierto.colaboradores',
                              )}
                              :
                            </span>
                            <div className="double">
                              {project.colaboradores.split(',').map((colaborador) => (
                                <div key={colaborador}>{colaborador}</div>
                              ))}
                            </div>
                          </li>
                        )}

                        {project.photographer && (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.fotografia')}
                              :
                            </span>
                            <div className="double">
                              {project.photographer.split(',').map((photographer) => (
                                <div key={photographer}>{photographer}</div>
                              ))}
                            </div>
                          </li>
                        )}
                        {project.promoter && (
                          <li className="project-link">
                            <span>
                              {t('proyecto-abierto.promotor')}
                              :
                            </span>
                            <div className="double">
                              {project.promoter.split(',').map((promoter) => (
                                <div key={promoter}>{promoter}</div>
                              ))}
                            </div>
                          </li>
                        )}
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
                    src={project.mainImage}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                <div className="images-section">
                  {project?.images?.data && project?.images?.data.map((img) => (
                    <img
                      key={img?.attributes?.url}
                      src={img?.attributes?.url}
                      alt="fotos proyecto"
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
