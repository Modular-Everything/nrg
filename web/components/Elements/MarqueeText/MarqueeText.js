import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import * as S from "./MarqueeText.styles";

// ---

const MarqueeText = ({ markdown, className }) => (
  <S.MarqueeWrap className={className}>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </S.MarqueeWrap>
);

MarqueeText.propTypes = {
  markdown: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MarqueeText.defaultProps = {
  className: null,
};

export default MarqueeText;
