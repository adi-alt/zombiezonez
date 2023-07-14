import React, { useState } from "react";
import "./scroll.css";
import up from "../images/up.png";
import { useWindowScroll } from "react-use";
import { useEffect } from "react";
function Scroll() {
  const { y: pageYOffet } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (pageYOffet > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffet]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
  return visible ? (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <img className="icon" src={up} alt="up" />
    </div>
  ) : null;
}

export default Scroll;
