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



function App() {
const [logoColor, setLogoColor] = useState()
const [isLoading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 5000);
}, []);

  return (
    <>
    {isLoading ? (
      <Loader /> 
    ) : (
      <>
      <Navbar logoColor={logoColor} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos setLogoColor={setLogoColor} />} />
        <Route path="/contacto" element={<Contact />} />
        <Route
          path="/proyectos/:categoria/:ref"
          element={<ProyectoAbierto />}
        />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
      <Footer />
      </>
    )
    }
    </>

  );
}

export default App;
