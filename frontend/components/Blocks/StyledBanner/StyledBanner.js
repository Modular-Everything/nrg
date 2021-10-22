import React from "react";
import PropTypes from "prop-types";

import * as S from "./StyledBanner.styles";
import Noise from "../../Elements/Noise";

// ---

/**
 * A banner with a background colour and some cool looking text
 */

const StyledBanner = ({ block }) => {
  const { styled_copy, background_color } = block;

  return (
    <S.StyledBanner backgroundColor={background_color}>
      <S.StyledText markdown={styled_copy} />
      <Noise />
    </S.StyledBanner>
  );
};

StyledBanner.propTypes = {
  block: PropTypes.shape({
    /** A string containing a colour variable name (ie. red, black) */
    background_color: PropTypes.string.isRequired,
    /** A markdown string of copy, displays as a big block of styled copy */
    styled_copy: PropTypes.string.isRequired,
  }).isRequired,
};

export default StyledBanner;
