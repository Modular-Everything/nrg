import React from "react";
import PropTypes from "prop-types";
import * as S from "./Image.styles";

// ---

const Image = ({ src, alt, ...rest }) => (
  <S.Img src={src} alt={alt} {...rest} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
