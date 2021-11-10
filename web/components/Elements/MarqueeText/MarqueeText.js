import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import * as S from "./MarqueeText.styles";

// ---

const MarqueeText = ({ text, className }) => (
  <S.MarqueeWrap className={className}>
    <BlockContent blocks={text} />
  </S.MarqueeWrap>
);

MarqueeText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MarqueeText.defaultProps = {
  className: null,
};

export default MarqueeText;
