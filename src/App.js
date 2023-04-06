import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import ProyectoAbierto from "./pages/ProyectoAbierto/ProyectoAbierto";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos setSelectedProject={setSelectedProject}/>} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/proyectos/:path" element={<ProyectoAbierto proyect={selectedProject}/>} />
      </Routes>
    </>
  );
}

export default App;
