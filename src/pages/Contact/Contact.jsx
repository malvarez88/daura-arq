import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
// import mailTest from './mailTest.html';
import "./contact.css";

import { motion } from "framer-motion";

import Swal from "sweetalert";

import { useTranslation } from "react-i18next";

import { instagram, linkedin } from "../../assets";
import { changeDocTitle } from "../../hooks/hooks";

import { axiosInstance } from "../../services/axiosInstance";

function Contact() {
  const { t, i18n } = useTranslation("global");
  const [contactData, setContactData] = useState(null);

  const locale = i18n.language;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const location = t("footer.contacto");
  useEffect(() => {
    changeDocTitle(location);
  }, [location]);

  const sendEmail = (HTML) => {
    emailjs
      .send("service_2lexg9f", "template_xvhtv32", HTML, "FAlAwX4dLhWkESlfj")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    Swal({
      title: "Email Sent!",
      text: "Your email has been sent successfully.",
      icon: "success",
      button: "OK",
    });
    sendEmail(formData);
  };

  const getContactData = async () => {
    const { data } = await axiosInstance().get("/contacto");
    setContactData(data.attributes);
  };

  useEffect(() => {
    getContactData();
  }, [locale]);

  return (
    <div className="contact-section">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        key="contacto"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100, transition: { duration: 0.2 } }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="contact-direction">
                  <h6 className="title">
                    {t("footer.contacto").toUpperCase()}
                  </h6>
                  <p>{contactData?.direccion1}</p>
                  <p>{contactData?.direccion2}</p>
                  <p>{contactData?.telefono}</p>
                  <p>{contactData?.email}</p>
                  <div className="contact-socials">
                    <a
                      href={contactData?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={instagram}
                        alt="instagram"
                        width="20px"
                        className="img-fluid"
                      />
                    </a>
                    <a
                      href={contactData?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedin}
                        alt="linkedin"
                        width="26px"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
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
                      placeholder={t("contact-page.mensaje")}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-secondary" type="submit">
                    {t("contact-page.enviar")}
                  </button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="mobile-contact-direction d-block d-lg-none">
                  <h6 className="title">
                    {t("footer.contacto").toUpperCase()}
                  </h6>
                  <p>C/ Francesc Carbonell 34, B-2 Barcelona 08034</p>
                  <p>C/ Nou, 17, 1-3a. 07701 Maó 07701- Baleares</p>
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
                      width="20px"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
