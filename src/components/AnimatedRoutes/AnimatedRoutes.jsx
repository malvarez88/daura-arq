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
import NotFound from "../../pages/404/NotFound"

const AnimatedRoutes = ({ setLogoColor }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home setLogoColor={setLogoColor} />} />
        <Route
          path="/proyectos"
          element={<Proyectos setLogoColor={setLogoColor} />}
        />
        <Route path="/contacto" element={<Contact />} />
        <Route
          path="/proyectos/:ref"
          element={<ProyectoAbierto setLogoColor={setLogoColor} />}
        />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
