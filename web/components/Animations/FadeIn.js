import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// ---

const FadeIn = ({ children, vars, stagger }) => {
  gsap.registerPlugin(ScrollTrigger);

  const el = useRef();

  useEffect(() => {
    const { current } = el;
    let target = current.children;
    const firstElement = current.children[0];
    const firstClassName = firstElement.className;

    if (firstClassName.startsWith("Container")) {
      target = current.children[0].children;
    }

    if (firstClassName.includes("swiper-container")) {
      target = current.querySelector(".swiper-wrapper").children;
    }

    if (firstClassName.includes("grid")) {
      target = current.children[0].children;
    }

    if (firstElement.nodeName === "UL") {
      target = firstElement.children;
    }

    gsap.from(target, {
      scrollTrigger: { trigger: el.current, start: "top 80%" },
      opacity: 0,
      stagger,
      ...vars,
    });
  }, []);

  return <span ref={el}>{children}</span>;
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  vars: PropTypes.object,
  stagger: PropTypes.number,
};

FadeIn.defaultProps = {
  vars: null,
  stagger: 0.2,
};

export default FadeIn;
