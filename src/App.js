
import React from "react";
import {Routes, Route} from 'react-router';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos"
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
<>
<Navbar />

<Footer />
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/proyectos" element={ <Proyectos />}/>
    <Route path="/contact" element={ <Contact />}/>
</Routes>
</>
 
  );
}

export default App;
