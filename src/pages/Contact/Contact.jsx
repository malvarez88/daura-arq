import React, { useState } from "react";
import "./contact.css";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import translations from "../../utils/languages.json";

import { instagram, linkedin } from "../../assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("Mensaje enviado correctamente");
  };

  const lang = useSelector((state) => state.language);

  const language = translations[lang];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="contact-direction">
                  <h6 className="title">{language.contacto.toUpperCase()}</h6>
                  <p>C/ Francesc Carbonell 34, B-2 Barcelona 08034</p>
                  <p>
                    C/ Nou, 17, 1-3a. 07701 <br />
                    Maó 07701- Baleares
                  </p>
                  <p>(34) 93 203 2018</p>
                  <p>info@daurastudio.com</p>
                  <div className="contact-socials">
                    <img
                      src={instagram}
                      alt="instagram"
                      width="20px"
                      className="img-fluid"
                    />
                    <img
                      src={linkedin}
                      alt="linkedin"
                      width="26px"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-xl-7">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                  action=""
                >
                  <div className="input-box">
                    <input
                      type="text"
                      required
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <span>{language.nombre}</span>
                  </div>
                  <div className="input-box">
                    <input
                      type="email"
                      required
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <span>{language.email}</span>
                  </div>
                  <div className="input-box">
                    <textarea
                      type="textarea"
                      required
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <span>{language.mensaje}</span>
                  </div>
                  <button className="btn btn-secondary" type="submit">
                    {language.enviar}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
