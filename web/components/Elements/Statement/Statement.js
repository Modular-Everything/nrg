import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import * as S from "./Statement.styles";

// ---

const Statement = ({ copy }) => (
  <S.Copy>
    <ReactMarkdown>{copy}</ReactMarkdown>
  </S.Copy>
);

Statement.propTypes = {
  copy: PropTypes.string.isRequired,
};

export default Statement;
