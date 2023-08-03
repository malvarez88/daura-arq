/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Categories from '../../Models/Categories';
import Projects from '../../Models/Projects';
import './proyectos.css';
import { changeDocTitle } from '../../hooks/hooks';
import { axiosInstance } from '../../services/axiosInstance';

function Proyectos({ setLogoColor }) {
  const { t } = useTranslation('global');
  const [projects, setProjects] = useState({});
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedProjects, setSelectedProjects] = useState([]);
  const location = useLocation();
  const categorySelected = location?.state;

  const getCategories = async () => {
    const query = '/categorias?fields[0]=nombre&fields[1]=color&fields[2]=colorLetra';
    const { data } = await axiosInstance().get(query);
    if (data) setCategories(new Categories(data));
  };

  const getProjects = async () => {
    const query = '/proyectos?fields[0]=nombre&fields[1]=referencia&fields[2]=orden&populate[imagenPrincipal][fields][0]=url&populate[categoria][fields]=nombre';
    const { data } = await axiosInstance().get(query);
    if (data) setProjects(new Projects(data));
  };

  const filterProjects = () => {
    if (projects.length > 0) {
      if (selectedCategory?.category !== 'all') return setSelectedProjects(projects.getCategoryProjects(selectedCategory?.category));
      return setSelectedProjects(projects);
    }
    return '';
  };

  const pathLocation = t('navbar.proyectos');
  useEffect(() => {
    changeDocTitle(pathLocation);
  }, [location, pathLocation]);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const getSelectedColor = (category) => {
    if (category === selectedCategory?.category) return selectedCategory?.categoryColor
    return '';
  };

  function selectCategory(category) {
    const cat = categories.getCategory(category);
    setSelectedCategory(cat);
    setIsOpen(!isOpen);
    setLogoColor(cat?.categoryColor);
  }

  useEffect(() => {
    if (categorySelected) {
      setSelectedCategory(categorySelected);
      setLogoColor(categorySelected?.categoryColor);
    }
    getCategories();
    getProjects();
    return setLogoColor(selectedCategory?.categoryColor);
  }, []);

  useEffect(() => {
    if (categories.length > 0) setSelectedCategory(categories.getCategory('all'));
  }, [categories]);

  useEffect(() => {
    filterProjects();
  }, [selectedCategory, projects]);

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
                {categories.length > 0 && categories.map((category) => (
                  <li
                    key={category?.category}
                    onClick={() => selectCategory(category?.category)}
                    style={{
                      color: getSelectedColor(category?.category), cursor: 'none',
                    }}
                  >
                    {category.category}
                  </li>
                ))}
              </ul>

              <div className="dropdown">
                <h5
                  className="mobile-title"
                  style={{
                    color: selectedCategory?.categoryColor,
                  }}
                >
                  {t('navbar.proyectos').toUpperCase()}
                </h5>
                <button
                  type="button"
                  className="dropdown-toggle"
                  onClick={handleToggle}
                  style={{
                    color: selectedCategory?.categoryColor,
                  }}
                >
                  {selectedCategory?.category?.toUpperCase()}
                </button>
                {isOpen && (
                  <ul className="dropdown-menu">
                    {categories.length > 0 && categories.map((category) => (
                      <li
                        key={category?.category}
                        onClick={() => selectCategory(category?.category)}
                        style={{
                          color: getSelectedColor(category?.category),
                        }}
                      >
                        {category?.category}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
            <div className="grid-container">
              {!projects
                && (
                  <div>
                    Loading...
                  </div>
                )}
              {selectedProjects?.length > 1
                && (
                  <div className="wrapper">
                    {projects?.projects.map((project) => (
                      <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        key={project.ref}
                      >
                        <Link
                          to={`/proyectos/${project.ref}${selectedCategory.category === 'all' ? '' : `?category=${project?.category}`}`}
                          className="link-project"
                        >
                          <div
                            className="proyect-thumb"
                            data-categoria={project.category}
                          >
                            <img
                              src={project.mainImage}
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
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
