import React from "react";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";

import { AnimatePresence } from "framer-motion";

import Home from "../../pages/Home/Home";
import Proyectos from "../../pages/Proyectos/Proyectos";
import Contact from "../../pages/Contact/Contact";
import ProyectoAbierto from "../../pages/ProyectoAbierto/ProyectoAbierto";
import Estudio from "../../pages/Estudio/Estudio";
import Noticias from "../../pages/Noticias/Noticias";

const AnimatedRoutes = ({ setLogoColor }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route
        path="/proyectos"
        element={<Proyectos setLogoColor={setLogoColor} />}
      />
      <Route path="/contacto" element={<Contact />} />
      <Route
        path="/proyectos/:categoria/:ref"
        element={<ProyectoAbierto setLogoColor={setLogoColor} />}
      />
      <Route path="/estudio" element={<Estudio />} />
      <Route path="/noticias" element={<Noticias />} />
    </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
