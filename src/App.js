import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import ProyectoAbierto from "./pages/ProyectoAbierto/ProyectoAbierto";
import Estudio from "./pages/Estudio/Estudio";
import Noticias from "./pages/Noticias/Noticias";
import Loader from "./components/Loader/Loader";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";

function App() {
  const [logoColor, setLogoColor] = useState();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loaderShown = sessionStorage.getItem("loaderShown");

    if (!loaderShown) {
      setShowLoader(true);
      sessionStorage.setItem("loaderShown", true);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoader(false), 7000);
    document.body.classList.add("show-loader");
    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove("show-loader");
    };
  }, []);

  window.addEventListener("beforeunload", () => {
    document.body.classList.remove("show-loader");
  });

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <CustomCursor showLoader={showLoader} />
          <Navbar logoColor={logoColor} />
          <Routes>
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
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
