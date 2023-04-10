import React, { useState } from "react";
import "./contact.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <motion.div
             initial={{ opacity: 0, x:-100 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }}
            >
            <div className="contact-section">
              <h1>Contacto</h1>
              <form onSubmit={handleSubmit} className="contact-form" action="">
                <div className="input-box">
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span>Nombre</span>
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
                  <span>Email</span>
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
                  <span>Mensaje</span>
                </div>
                <button className="btn btn-secondary" type="submit">Send</button>
              </form>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
