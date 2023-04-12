import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import ProyectoAbierto from "./pages/ProyectoAbierto/ProyectoAbierto";
import Estudio from "./components/Estudio/Estudio";

import translations from './utils/languages.json';

function App() {
  const [language, setLanguage] = useState("en");

  const currentTranslations = translations[language];

  function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
  }

  return (
    <>
      <Navbar language={currentTranslations} />
      <Routes>
        <Route path="/" element={<Home language={currentTranslations}/>} />
        <Route path="/proyectos" element={<Proyectos language={currentTranslations}/>} />
        <Route path="/contacto" element={<Contact language={currentTranslations}/>} />
        <Route path="/proyectos/:path" element={<ProyectoAbierto language={currentTranslations}/>} />
        <Route path="/estudio" element={<Estudio language={currentTranslations} />} />
      </Routes>
      <Footer handleLanguageChange={handleLanguageChange} language={currentTranslations} />
    </>
  );
}

export default App;
