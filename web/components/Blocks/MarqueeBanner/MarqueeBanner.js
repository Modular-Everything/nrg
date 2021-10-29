import React from "react";
import PropTypes from "prop-types";

import * as S from "./MarqueeBanner.styles";
import Statement from "../../Elements/Statement";
import Container from "../../Core/Container";

// ---

const MarqueeBanner = ({ block }) => {
  const { statement } = block;

  return (
    <S.MarqueeBanner>
      <Container>
        <Statement copy={statement} />
      </Container>

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
