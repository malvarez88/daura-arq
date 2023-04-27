import React, {useState, useEffect} from "react";

import "./home.css";
// import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { motion } from "framer-motion";

import Loader from "../../components/Loader/Loader";

import heroImg1 from "../../assets/1.png";
import heroImg2 from "../../assets/2.png";
import heroImg3 from "../../assets/3.png";



const Home = () => {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  


  return (
    // <AnimatePresence>
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <motion.section
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            className="home-section"
          >
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid hero-img"
                    src={heroImg1}
                    alt="First slide"
                    width="1100px"
                    height="540px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid hero-img"
                    src={heroImg2}
                    alt="Third slide"
                    width="1100px"
                    height="540px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid hero-img"
                    src={heroImg3}
                    alt="Third slide"
                    width="1100px"
                    height="540px"
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
              <img
                src={heroImg1}
                alt=""
                className="img-fluid mobile-hero-img"
              />
              <img
                src={heroImg2}
                alt=""
                className="img-fluid mobile-hero-img"
              />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
    // </AnimatePresence>
  );
};

export default Home;
