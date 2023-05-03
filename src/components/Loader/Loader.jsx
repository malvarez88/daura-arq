import React, { useEffect, useRef } from "react";
import gsap, { Power0 } from "gsap";
import "./loader.css";

const Loader = () => {
  const loaderLogoRef = useRef(null);
  const trazo1Ref = useRef(null);
  const trazo2Ref = useRef(null);
  const rect1Ref = useRef(null);

  useEffect(() => {
    const logo = loaderLogoRef.current;
    const trazo1 = trazo1Ref.current;
    const trazo2 = trazo2Ref.current;
    const rect1 = rect1Ref.current;

    gsap.set([trazo1, trazo2, rect1], { opacity: 0 });
    
    gsap.from(logo, { opacity: 0, duration: 1 });

    const tl = gsap.timeline({ delay: 1 });

    tl.to(logo, {opacity: 1, duration: 0.5, ease: Power0.easeInOut})
      .to(trazo2, { opacity: 1, duration: 0.5, ease: Power0.easeInOut })
      .to(trazo1, {opacity: 1, duration: 1, ease: Power0.easeInOut})
      .to(trazo1, {
        rotation: 90,
        transformOrigin: "50% 60%",
        duration: 1,
        ease: Power0.easeInOut,
      })
      .to(trazo1, { opacity: 1, duration: 1, x: 100 })
      .to(rect1, { opacity: 1, duration: 1, x: 20 });
  }, []);

  return (
    <div className="loader">
      <svg
        id="loader-logo"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 168.67 93.05"
        ref={loaderLogoRef}
      >
        <rect className="cls-10" x="68" width="16" height="16" ref={rect1Ref} />
        <path
          className="cls-20"
          d="m76,0v51.03-.5c0,19.06-15.22,34.52-34,34.52S8,69.59,8,50.53,23.22,16.01,42,16.01h0c18.78,0,34,15.49,34,34.56"
          ref={trazo1Ref}
        />
        <path
          className="cls-20"
          d="m76,0v51.03-.5c0,19.06-15.22,34.52-34,34.52S8,69.59,8,50.53,23.22,16.01,42,16.01h0c18.78,0,34,15.49,34,34.56"
          ref={trazo2Ref}
        />
      </svg>
    </div>
  );
};

export default Loader;
