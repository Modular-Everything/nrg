import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import * as S from "./ImageBlock.styles";
import Title from "../../Elements/Title";
import Image from "../../Elements/Image";
import BoltIcon from "../../../images/icons/Bolt";

// ---

const ImageBlock = ({ block }) => {
  const { backgroundImage, icon, title, copy } = block;
  gsap.registerPlugin(ScrollTrigger);

  const bg = useRef(null);

  useEffect(() => {
    gsap.to(bg.current.querySelector(".imageblock__bg div"), {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: bg.current,
        start: "15%",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <S.ImageBlock ref={bg}>
      {(title || copy) && (
        <S.Copy>
          {title && <Title as="h3" title={title} />}
          {copy && <p>{copy}</p>}
        </S.Copy>
      )}

      {(!title || !copy) && icon && icon !== "hidden" && (
        <S.Icon outline={icon === "large"} size={icon}>
          <BoltIcon />
        </S.Icon>
      )}

      <S.Background className="imageblock__bg">
        <Image image={backgroundImage} layout="fill" />
      </S.Background>
    </S.ImageBlock>
  );
};

ImageBlock.propTypes = {
  block: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    backgroundImage: PropTypes.object.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    copy: PropTypes.string,
  }),
};

ImageBlock.defaultProps = {
  block: {
    icon: null,
    title: null,
    copy: null,
  },
};

export default ImageBlock;
