import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import * as S from "./MarqueeText.styles";

// ---

const MarqueeText = ({ markdown }) => (
  <S.MarqueeWrap>
    <ReactMarkdown>{markdown}</ReactMarkdown>
    <ReactMarkdown>{markdown}</ReactMarkdown>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </S.MarqueeWrap>
);

MarqueeText.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default MarqueeText;
