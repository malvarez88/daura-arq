import React, { useState } from "react";
import "./contact.css";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import Swal from 'sweetalert'

import { useTranslation } from "react-i18next";

import { instagram, linkedin } from "../../assets";


const Contact = () => {
  const {t} = useTranslation("global")

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
    Swal({
      title: 'Email Sent!',
      text: 'Your email has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  };

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
            <div className="col-xl-5 col-sm-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="contact-direction">
                  <h6 className="title">{t("footer.contacto").toUpperCase()}</h6>
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
            <div className="col-xl-7 col-sm-12">
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
                    <span>{t("contact-page.nombre")}</span>
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
                    <span>{t("contact-page.email")}</span>
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
                    <span>{t("contact-page.mensaje")}</span>
                  </div>
                  <button className="btn btn-secondary" type="submit">
                    {t("contact-page.enviar")}
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
