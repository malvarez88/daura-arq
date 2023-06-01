import React, { useState, useEffect } from "react";

import "./home.css";

import { motion } from "framer-motion";

import heroImg1 from "../../assets/1.png";
import heroImg2 from "../../assets/2.png";
import heroImg3 from "../../assets/3.png";

import { gcz1, vts1, ccev1, iscola1, nova1, mina1 } from "../../assets";

const Home = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
      className="home-section"
      key="/"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid hero-img"
                    src={mina1}
                    alt="First slide"
                    width="1100px"
                    height="540px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid hero-img"
                    src={ccev1}
                    alt="Third slide"
                    width="1100px"
                    height="520px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid hero-img"
                    src={heroImg1}
                    alt="Third slide"
                    width="1100px"
                    height="520px"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="mobile-home">
              <img src={mina1} alt="" className="img-fluid mobile-hero-img" />
              <img src={ccev1} alt="" className="img-fluid mobile-hero-img" />
              <img
                src={heroImg1}
                alt=""
                className="img-fluid mobile-hero-img"
              />
              <img src={iscola1} alt="" className="img-fluid mobile-hero-img" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;