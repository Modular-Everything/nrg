import React from "react";
import PropTypes from "prop-types";

import * as S from "./StyledBanner.styles";

// ---

/**
 * A banner with a background colour and some cool looking text
 */

const StyledBanner = ({ block }) => {
  const { styledCopy, backgroundColor } = block;

  return (
    <S.StyledBanner backgroundColor={backgroundColor}>
      <S.StyledText text={styledCopy} />
      <S.Noise backgroundColor={backgroundColor} />
    </S.StyledBanner>
  );
};

StyledBanner.propTypes = {
  block: PropTypes.shape({
    /** A string containing a colour variable name (ie. red, black) */
    backgroundColor: PropTypes.string.isRequired,
    /** A markdown string of copy, displays as a big block of styled copy */
    styledCopy: PropTypes.string.isRequired,
  }).isRequired,
};

export default StyledBanner;
