import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';

import { AnimatePresence } from 'framer-motion';

import Home from '../../pages/Home/Home';
import Proyectos from '../../pages/Proyectos/Proyectos';
import Contact from '../../pages/Contact/Contact';
import ProyectoAbierto from '../../pages/ProyectoAbierto/ProyectoAbierto';
import Estudio from '../../pages/Estudio/Estudio';
import Noticias from '../../pages/Noticias/Noticias';
import Categories from '../../Models/Categories';
import { axiosInstance } from '../../services/axiosInstance';

function AnimatedRoutes({ setLogoColor }) {
  const location = useLocation();
  const [categories, setCategories] = useState(new Categories());

  const getCategories = async () => {
    const query = '/categorias?fields[0]=nombre&fields[1]=color&fields[2]=colorLetra';
    const { data } = await axiosInstance().get(query);
    if (data) setCategories(new Categories(data));
  };

  useEffect(() => {
    console.log("animated routes");
    getCategories();
  }, []);
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
