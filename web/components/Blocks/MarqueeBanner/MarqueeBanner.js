import React from "react";
import PropTypes from "prop-types";

import * as S from "./MarqueeBanner.styles";
import Statement from "../../Elements/Statement";
import Container from "../../Core/Container";

// ---

const MarqueeBanner = ({ block }) => {
  const { text } = block;

  return (
    <S.MarqueeBanner>
      <Container>
        <Statement copy={text} />
      </Container>

      <S.Noise />
    </S.MarqueeBanner>
  );
};

MarqueeBanner.propTypes = {
  block: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default MarqueeBanner;
