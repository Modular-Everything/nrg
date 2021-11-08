import React from "react";
import PropTypes from "prop-types";

import * as S from "./MarqueeBanner.styles";
import Statement from "../../Elements/Statement";

// ---

const MarqueeBanner = ({ block }) => {
  const { statement } = block;

  return (
    <S.MarqueeBanner>
      <S.Container>
        <Statement copy={statement} />
      </S.Container>

      <S.Noise />
    </S.MarqueeBanner>
  );
};

MarqueeBanner.propTypes = {
  block: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    statement: PropTypes.array.isRequired,
  }).isRequired,
};

export default MarqueeBanner;
