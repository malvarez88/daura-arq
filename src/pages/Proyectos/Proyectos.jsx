import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Categories from '../../Models/Categories';
import Projects from "../../Models/Projects";
import { dauraCategories } from "../../constants/dauraCategorires";
import { PROJECTS } from "../../constants/projects";
import "./proyectos.css";

const Proyectos = ({ setLogoColor }) => {
  const { t } = useTranslation("global");
  const categories = new Categories(dauraCategories);
  const projects = new Projects(PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState(categories.getCategory("all"));
  const selectedProjects = projects.getCategoryProjects(selectedCategory.category);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const getSelectedColor = (category) => category === selectedCategory.category ? selectedCategory?.categoryColor : '';

  function selectCategory(category) {
    const cat = categories.getCategory(category);
    setSelectedCategory(cat);
    setIsOpen(!isOpen);
    setLogoColor(cat?.categoryColor);
  }

  return (
    <div className="proyectos">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200, transition: { duration: 0.2 } }}
              transition={{ duration: 1, delay: 0.5 }}
              key="proyectos"
            >
              <ul className="categories-list">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => selectCategory(category?.category)}
                    style={{
                      color: getSelectedColor(category?.category), cursor: 'none'
                    }}
                  >
                    {t(`Projects.Categories.${category?.category}`)}
                  </li>
                ))}
              </ul>

              <div className="dropdown">
                <h5
                  className="mobile-title"
                  style={{
                    color: selectedCategory?.categoryColor
                  }}
                >
                  {t("navbar.proyectos").toUpperCase()}
                </h5>
                <button
                  className="dropdown-toggle"
                  onClick={handleToggle}
                  style={{
                    color: selectedCategory?.categoryColor
                  }}
                >
                  {selectedCategory?.category.toUpperCase()}
                </button>
                {isOpen && (
                  <ul className="dropdown-menu">
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => selectCategory(category?.category)}
                        style={{
                          color: getSelectedColor(category?.category)
                        }}
                      >
                        {t(`Projects.Categories.${category?.category}`)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
            <div className="grid-container">
              {!projects &&
                (<div>
                  Loading...
                </div>)}
              {projects &&
                <div className="wrapper">
                  {selectedProjects.map((project) => (
                    <motion.div
                      initial={{ opacity: 0, x: 200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      key={project.ref}
                    >
                      <Link
                        to={`/proyectos/${project.category}/${project.ref}`}
                        className="link-project"
                      >
                        <div
                          className="proyect-thumb"
                          data-categoria={project.category}
                        >
                          <img
                            src={project.images[0]}
                            alt={project.ref}
                            key={project.ref}
                            width="300px"
                            height="300px"
                            className="img-fluid proyect-img"
                          />
                          <div className="proyect-description">
                            <p>
                              {project.short
                                ? project.short.toUpperCase()
                                : project.ref}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;