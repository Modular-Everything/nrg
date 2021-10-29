import React from "react";
import PropTypes from "prop-types";

import * as S from "./BoltBlock.styles";
import BoltIcon from "../../../images/icons/Bolt";

// ---

const BoltBlock = ({ block }) => {
  const { backgroundColor } = block;

  return (
    <S.BoltBlock backgroundColor={backgroundColor}>
      <S.Icon>
        <BoltIcon />
      </S.Icon>

      <S.OutlineText text="Creators, Makers Builders" />
    </S.BoltBlock>
  );
};

BoltBlock.propTypes = {
  block: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default BoltBlock;
