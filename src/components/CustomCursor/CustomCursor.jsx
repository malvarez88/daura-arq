import React from "react";
import "./styles.css";

export const CustomCursor = () => {
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    const hoverElements = document.querySelectorAll("a, button, input, li, span");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursorRef.current.classList.add("is-hovering");
      });
      element.addEventListener("mouseleave", () => {
        cursorRef.current.classList.remove("is-hovering");
      });
    });
  }, []);

  return <div className="app-cursor" ref={cursorRef} />;
};
