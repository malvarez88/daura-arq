/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import './home.css';

import { motion } from 'framer-motion';
import { changeDocTitle } from '../../hooks/hooks';

import { axiosInstance } from '../../services/axiosInstance';

function Home({ setLogoColor }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setLogoColor();
  }, []);

  const location = 'Home';

  const getHomeImages = async () => {
    const imageArray = [];
    const { data } = await axiosInstance().get('/banner?populate[imagen1][fields][0]=url&populate[imagen2][fields][0]=url&populate[imagen3][fields][0]=url');
    if (data?.attributes?.imagen1?.data?.attributes?.url) imageArray.push(data?.attributes?.imagen1?.data?.attributes?.url);
    if (data?.attributes?.imagen2?.data?.attributes?.url) imageArray.push(data?.attributes?.imagen2?.data?.attributes?.url);
    if (data?.attributes?.imagen3?.data?.attributes?.url) imageArray.push(data?.attributes?.imagen3?.data?.attributes?.url);
    setImages(imageArray);
  };

  useEffect(() => {
    changeDocTitle(location);
  }, [location]);

  useEffect(() => {
    getHomeImages();
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
          <div className="col-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {images.length > 0 && images.map((image, idx) => (
                  <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={image}>
                    <img
                      className="d-block img-fluid hero-img"
                      src={image}
                      alt="Home slide"
                      width="1100px"
                      height="540px"
                    />
                  </div>
                ))}
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
                />
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
                />
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="mobile-home">
              {images.length > 0 && images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={image}
                  className="img-fluid mobile-hero-img"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
