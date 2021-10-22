import React from "react";
import PropTypes from "prop-types";

import * as S from "./OutlineText.styles";

// ---

const OutlineText = ({ text, className }) => (
  <S.OutlineText className={className}>
    <p>{text}</p>
  </S.OutlineText>
);

OutlineText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

OutlineText.defaultProps = {
  className: null,
};

export default OutlineText;
