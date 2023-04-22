import React from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { barcelona1, board1 } from "../../assets";
import translations from "../../utils/languages.json";

const Noticias = () => {

  const lang = useSelector((state) => state.language);

  const language = translations[lang];

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
            <div className="estudio" style={{marginTop: "30px"}}>
              <div className="noticias">
              <h6 className="title" style={{marginBottom: "30px"}}>{language.noticias.toUpperCase()}</h6>
                <h6 className="title" style={{marginBottom: "30px"}}>work in progress</h6>
                <div className="noticia">
                  <div className="noticias-img">
                    <img src={board1} alt="" className="img-fluid" />
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
                    <img src={barcelona1} alt="" className="img-fluid" />
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
