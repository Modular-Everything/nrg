import React from "react";
import PropTypes from "prop-types";

import * as S from "./BoltBlock.styles";
import BoltIcon from "../../../images/icons/Bolt";
import FadeIn from "../../Animations/FadeIn";

// ---

const BoltBlock = ({ block }) => {
  const { backgroundColor, boltCopy } = block;

  return (
    <S.BoltBlock backgroundColor={backgroundColor}>
      <FadeIn>
        <S.Icon>
          <BoltIcon className="boltIcon" />
        </S.Icon>

        <S.OutlineText text={boltCopy || "Creators, Makers Builders"} />
      </FadeIn>
    </S.BoltBlock>
  );
};

BoltBlock.propTypes = {
  block: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    boltCopy: PropTypes.string,
  }),
};

BoltBlock.defaultProps = {
  block: {
    boltCopy: null,
  },
};

export default BoltBlock;
