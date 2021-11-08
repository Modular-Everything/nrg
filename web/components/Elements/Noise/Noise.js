import React from "react";
import PropTypes from "prop-types";

import * as S from "./Noise.styles";

// ---

const Noise = ({ className }) => <S.Noise className={className} />;

Noise.propTypes = {
  className: PropTypes.string,
};

Noise.defaultProps = {
  className: null,
};

export default Noise;
