import React, { useState } from "react";
import "./estudio.css";

import { useSelector } from "react-redux";

// import { motion } from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion";

import { partners } from "../../constants";
import {
  about1,
  about2,
  about3,
  barcelona1,
  board1,
  profile,
} from "../../assets";

import translations from "../../utils/languages.json";

const Estudio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const lang = useSelector((state) => state.language)

  const language = translations[lang]

  function handleClick(index) {
    setActiveTab(index);
    setActiveIndex(index);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="estudio">
              <ul className="estudio-list">
                {language.listaestudio.map((espacio, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
                    className={activeIndex === index ? "active" : ""}
                  >
                    {espacio}
                  </li>
                ))}
              </ul>
              {/* SOBRE NOSOTROS */}
              <div
                className="sobre-nosotros"
                style={{ display: activeTab === 0 ? "block" : "none" }}
              >
                <h5 className="title">d'aura arquitectura</h5>
                <p className="general-text">
                  Fundado en el año 2000, es una red de personas y espacios;
                  apasionados por la arquitectura, la investigación y la
                  experimentación. <br /> <br /> Un "studio" más que una
                  oficina, dónde la investigación está siempre presente
                  favoreciendo el cambio de paradigmas; un espacio más que un
                  lugar, para la búsqueda de oportunidades a través de un flujo
                  de recursos, colaboraciones y tiempo. Un proceso de trabajo
                  más que una forma de trabajar, basado en la formulación de
                  estrategias, observación, yuxtaposición de información,
                  práctica y conocimiento.
                  <br /> <br /> Preguntar, diseñar, materializar, y comprobar
                  como actitud.
                </p>

                <div className="sobre-nosotros-img">
                  <img src={about1} alt="about" className="img-fluid" />
                  <img src={about2} alt="about" className="img-fluid" />
                  <img src={about3} alt="about" className="img-fluid" />
                </div>

                <p className="general-text">
                  La investigación e innovación estan presente en nuestro
                  estudio, participando en proyectos que buscan nuevas
                  soluciones para aplicarlas en casos reales. Creemos en las
                  redes de profesionales transdisciplinares orientada a obtener
                  el mejor resultado para un proyecto; y por ello apostamos por
                  la innovación abierta, la colaboración y compartir
                  conocimientos. Algunos de nuestros partners y amigos son:
                </p>
                <ul className="partner-list">
                  {partners.map((partner) => (
                    <li>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {partner.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div>
                  <img src={barcelona1} alt="" className="img-fluid" />
                </div>
              </div>

              {/* NOTICIAS */}
              <div
                className="noticias"
                style={{ display: activeTab === 1 ? "block" : "none" }}
              >
                <h5 className="title">work in progress</h5>
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
                </div>
              </div>

              {/* EQUIPO */}
              <div
                className="eqiupo"
                style={{ display: activeTab === 2 ? "block" : "none" }}
              >
                <p className="general-text">
                  Somos arquitectos, urbanistas y diseñadores, con experiencia
                  internacional, y participación en la docencia y la
                  investigación. Trabajamos en las áreas de arquitectura, diseño
                  de interiores, las intervenciones en sitios históricos, el
                  diseño urbano y planificación, paisaje, exposiciones efímeras,
                  la teoría y la crítica. Con sede en Barcelona, hemos ido
                  ampliando nuestro campo de acción, estando ya involucrado en
                  algunos proyectos internacionales.
                </p>
                <div className="equipo-profile">
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Joan Ramon Rius</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Miquel García Soler</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                  <div className="profile">
                    <img src={profile} alt="" className="img-fluid" />
                    <p>Núria Ayala i Mitjavila</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Estudio;
