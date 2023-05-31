import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { instagram } from "../../assets";
import "./footer.css";
import Grid from "@mui/system/Unstable_Grid/Grid";

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      {/* <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="footer-list">
                <li className="footer-li">
                  <div className="languages">
                    <button
                      onClick={() => handleLanguageChange("ca")}
                      style={{ color: i18n?.resolvedLanguage === "ca" ? "black" : "lightgray" }}
                    >
                      CA
                    </button>
                    <button
                      onClick={() => handleLanguageChange("es")}
                      style={{ color: i18n?.resolvedLanguage === "es" ? "black" : "lightgray" }}
                    >
                      ES
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      style={{ color: i18n?.resolvedLanguage === "en" ? "black" : "lightgray" }}
                    >
                      EN
                    </button>
                    <br />
                  </div>
                  <span className="daura-footer">@ d'aura arquitectura</span>
                </li>
                <li className="footer-li">
                  <a
                    href="/noticias"
                    className="footer-link"
                  >
                    <span>{t("footer.noticias")}</span>
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    href="/contacto"
                    className="footer-link"
                  >
                    <span>{t("footer.contacto")}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/daurastudio"
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
                </li>
              </ul>


              <div className="mobile-footer">
                <div className="languages">
                  <button
                    onClick={() => handleLanguageChange("ca")}
                    style={{ color: i18n?.resolvedLanguage === "ca" ? "black" : "lightgray" }}
                  >
                    CA
                  </button>
                  <button
                    onClick={() => handleLanguageChange("es")}
                    style={{ color: i18n?.resolvedLanguage === "es" ? "black" : "lightgray" }}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    style={{ color: i18n?.resolvedLanguage === "en" ? "black" : "lightgray" }}
                  >
                    EN
                  </button>
                  <br />
                  <span className="daura-footer">@ d'aura arquitectura</span>
                </div>
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/daurastudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagram}
                      alt="instagram"
                      width="10px"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <Grid container justifyContent={'space-between'} mt="24px">
        <Grid xs={2}>
          <Grid container flexDirection={'column'}>
            <Grid>
              <Grid container sx={{ height: '100%' }} alignItems={'center'}>
                <Grid mr="7px">
                  <button
                    className='languages'
                    onClick={() => handleLanguageChange("ca")}
                    style={{ color: i18n?.resolvedLanguage === "ca" ? "black" : "lightgray" }}
                  >
                    CA
                  </button>
                </Grid>
                <Grid sx={{ height: '100%' }} mr="7px">
                  <Grid container justifyContent={'center'} alignItems={'center'} sx={{ height: '100%' }}>
                    <div className="separator" />
                  </Grid>
                </Grid>
                <Grid mr="7px">
                  <button
                    className='languages'
                    onClick={() => handleLanguageChange("es")}
                    style={{ color: i18n?.resolvedLanguage === "es" ? "black" : "lightgray" }}
                  >
                    ES
                  </button>
                </Grid>
                <Grid sx={{ height: '100%' }} mr="7px">
                  <Grid container justifyContent={'center'} alignItems={'center'} sx={{ height: '100%' }}>
                    <div className="separator" />
                  </Grid>
                </Grid>
                <Grid mr="7px">
                  <button
                    className='languages'
                    onClick={() => handleLanguageChange("en")}
                    style={{ color: i18n?.resolvedLanguage === "en" ? "black" : "lightgray" }}
                  >
                    EN
                  </button>
                </Grid>
              </Grid>
            </Grid>
            <Grid><span className="daura-footer">@ d'aura arquitectura</span></Grid>
          </Grid>
        </Grid>
        <Grid xs={2}>
          <Grid container justifyContent={'center'}>
            <Grid>
              <a
                href="/noticias"
                className="footer-link"
              >
                <span>{t("footer.noticias")}</span>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2}>
          <Grid container flexDirection={'column'} justifyContent={'flex-end'}>
            <Grid>
              <Grid container justifyContent={'flex-end'}>
                <a
                  href="/contacto"
                  className="footer-link"
                >
                  <span>{t("footer.contacto")}</span>
                </a>
              </Grid>
            </Grid>
            <Grid>
              <Grid container justifyContent={'flex-end'}>
                <a
                  href="https://www.instagram.com/daurastudio"
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Footer;
