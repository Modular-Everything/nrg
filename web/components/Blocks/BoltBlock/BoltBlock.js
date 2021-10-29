import React from "react";
import PropTypes from "prop-types";

import * as S from "./BoltBlock.styles";
import BoltIcon from "../../../images/icons/Bolt";

// ---

const BoltBlock = ({ block }) => {
  const { background_color } = block;

  return (
    <S.BoltBlock backgroundColor={background_color}>
      <S.Icon>
        <BoltIcon />
      </S.Icon>

      <S.OutlineText text="Creators, Makers Builders" />
    </S.BoltBlock>
  );
};

BoltBlock.propTypes = {
  block: PropTypes.shape({
    background_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default BoltBlock;
