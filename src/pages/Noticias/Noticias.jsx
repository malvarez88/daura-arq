import React from "react";
import './noticias.css'

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { terrassa1, wbf1 } from "../../assets";

import en from "../../languages/en/global.json";
import es from "../../languages/es/global.json";
import ca from "../../languages/ca/global.json";

const Noticias = () => {
  const lang = useSelector((state) => state.language);

  var language;

  if (lang === "es") {
    language = es[lang];
  } else if (lang === "en") {
    language = en[lang];
  } else {
    language = ca[lang];
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="estudio" style={{ marginTop: "30px" }}>
              <div className="noticias">
                <h6 className="title" style={{ marginBottom: "30px" }}>
                  {language.noticias.toUpperCase()}
                </h6>
                <h6 className="title" style={{ marginBottom: "30px" }}>
                  work in progress
                </h6>
                <div className="noticia">
                  <div className="noticias-img">
                    <img src={terrassa1} alt="" className="img-fluid" />
                  </div>
                  <small>24/1/2023</small>
                  <h4>
                    El CN Terrassa rep el projecte bàsic per a la construcció
                    d’una piscina coberta de 34×25 metres
                  </h4>
                  <p className="general-text">
                    El CN Terrassa ha rebut el projecte bàsic per a la
                    construcció d’una nova piscina coberta de 34×25 metres de
                    mans de l’estudi D’Aura Arquitectura. Joan Ramon Rius i
                    Núria Ayala, especialistes en projectes esportius aquàtics,
                    han lliurat el document a la delegació del club, formada pel
                    president Jordi Martín, la vicepresidenta esportiva Cristina
                    Rey i el vicepresident de l’Àrea d’Instal·lacions Enrique
                    Lupiáñez.
                  </p>
                  <span>
                    <b>LEE MAS</b>
                  </span>
                  <hr />
                </div>

                <div className="noticia">
                  <div className="noticias-img">
                    <img src={wbf1} alt="" className="img-fluid" />
                  </div>
                  <small>06/09/2014</small>
                  <h4>Barcelona World Basketball Festival</h4>
                  <p className="general-text">
                    Más allá de la competición profesional de un Mundial de
                    Baloncesto, el deporte urbano es una actividad de ocio y
                    socialización. Esta instalación combina espacios de
                    actividad física y competición, con espectáculos deportivos,
                    musicales, y zonas de ocio. Pese a su breve duración
                    temporal, su impacto urbano ha atraído más de 30.000
                    visitantes. Todos los elementos de la instalación son de
                    construcción ligera y reutilizables para nuevos eventos.
                  </p>
                  <span>
                    <b>LEE MAS</b>
                  </span>
                  <hr />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
