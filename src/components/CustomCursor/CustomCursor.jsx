import React, { useEffect } from 'react';
import './styles.css';

export default function CustomCursor({ showLoader }) {
  const cursorRef = React.useRef(null);

  useEffect(() => {
    if (showLoader) {
      cursorRef.current.style.display = 'none';
    } else {
      cursorRef.current.style.display = 'block';
    }
  }, [showLoader]);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - (cursorRef.current ? cursorRef.current.clientWidth / 2 : 0);
      const mouseY = clientY - (cursorRef.current ? cursorRef.current.clientHeight / 2 : 0);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    });

    const hoverElements = document.querySelectorAll('a, button, input, li, span, img');
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursorRef.current.classList.add('is-hovering');
      });
      element.addEventListener('mouseleave', () => {
        cursorRef.current.classList.remove('is-hovering');
      });
    });
  }, []);

  return <div className="app-cursor" ref={cursorRef} />;
}
