import React from "react";
import PropTypes from "prop-types";

import * as S from "./FixedBgText.styles";

// ---

const FixedBgText = ({ text }) => <S.FixedBgText text={text} />;

FixedBgText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FixedBgText;
