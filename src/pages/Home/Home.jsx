import React from "react";

import "./home.css";

import heroImg1 from "../../assets/1.png";
import heroImg2 from "../../assets/2.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <section className="home-section">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    class="d-block"
                    src={heroImg1}
                    alt="First slide"
                    width="1100px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block"
                    src={heroImg2}
                    alt="Third slide"
                    width="1100px"
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
