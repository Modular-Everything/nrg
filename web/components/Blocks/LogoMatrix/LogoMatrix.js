import React from "react";
import PropTypes from "prop-types";

import Image from "../../Elements/Image";
import * as S from "./LogoMatrix.styles";
import FadeIn from "../../Animations/FadeIn";

// ---

const LogoMatrix = ({ block }) => (
  <S.LogoMatrix>
    <FadeIn stagger={0.1}>
      <ul>
        {block.logos.map((logo) => (
          <li>
            <Image image={logo} layout="fixed" />
          </li>
        ))}
      </ul>
    </FadeIn>
  </S.LogoMatrix>
);

LogoMatrix.propTypes = {
  block: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    logos: PropTypes.object.isRequired,
  }).isRequired,
};

export default LogoMatrix;
