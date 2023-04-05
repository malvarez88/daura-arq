
import React from "react";
import {Routes, Route} from 'react-router';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos"
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import ProyectoAbierto from "./pages/ProyectoAbierto/ProyectoAbierto";

function App() {
  return (
<>
<Navbar />
<Footer />
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/proyectos" element={ <Proyectos />}/>
    <Route path="/contacto" element={ <Contact />}/>
    <Route path='/proyecto/:titulo' element={<ProyectoAbierto />}/>
</Routes>
</>
 
  );
}

export default App;
