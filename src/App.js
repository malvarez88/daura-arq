import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Loader from "./components/Loader/Loader";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";
import Grid from "@mui/system/Unstable_Grid/Grid";


function App() {
  const [logoColor, setLogoColor] = useState();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loaderShown = sessionStorage.getItem("loaderShown");

    if (!loaderShown) {
      setShowLoader(true);
      sessionStorage.setItem("loaderShown", true);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoader(false), 7000);
    document.body.classList.add("show-loader");
    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove("show-loader");
    };
  }, []);

  window.addEventListener("beforeunload", () => {
    document.body.classList.remove("show-loader");
  });

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <CustomCursor showLoader={showLoader} />
          <Grid container justifyContent={"center"}>
            <Grid xs={11} sm={11} md={9} lg={9} xl={6}>
              <Navbar logoColor={logoColor} />
              <AnimatedRoutes setLogoColor={setLogoColor} />
              <Footer />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default App;
