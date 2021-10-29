import React from "react";
import PropTypes from "prop-types";

import Image from "../../Elements/Image";
import * as S from "./LogoMatrix.styles";

// ---

const LogoMatrix = ({ block }) => (
  <S.LogoMatrix>
    <ul>
      {block.logos.map(({ image }) => (
        <li>
          <Image image={image} layout="fixed" />
        </li>
      ))}
    </ul>
  </S.LogoMatrix>
);

LogoMatrix.propTypes = {
  block: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    logos: PropTypes.object.isRequired,
  }).isRequired,
};

export default LogoMatrix;
