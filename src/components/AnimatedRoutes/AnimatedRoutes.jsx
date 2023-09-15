import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes, useLocation } from 'react-router';
import Categories from '../../Models/Categories';
import Contact from '../../pages/Contact/Contact';
import Estudio from '../../pages/Estudio/Estudio';
import Home from '../../pages/Home/Home';
import Noticias from '../../pages/Noticias/Noticias';
import ProyectoAbierto from '../../pages/ProyectoAbierto/ProyectoAbierto';
import Proyectos from '../../pages/Proyectos/Proyectos';
import { axiosInstance } from '../../services/axiosInstance';

function AnimatedRoutes({ setLogoColor }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [categories, setCategories] = useState(new Categories());
  const locale = i18n?.language;

  const getCategories = async () => {
    const query = `/categorias?fields[0]=nombre&fields[1]=color&fields[2]=colorLetra&locale=${locale}`;
    const { data } = await axiosInstance().get(query);
    if (data) setCategories(new Categories(data));
  };

  useEffect(() => {
    getCategories();
  }, [locale]);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home setLogoColor={setLogoColor} />} />
        <Route
          path="/proyectos"
          element={<Proyectos setLogoColor={setLogoColor} categories={categories} />}
        />
        <Route path="/contacto" element={<Contact />} />
        <Route
          path="/proyectos/:id"
          element={<ProyectoAbierto setLogoColor={setLogoColor} categories={categories} />}
        />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
