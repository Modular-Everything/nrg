import React from "react";
import PropTypes from "prop-types";
import * as S from "./Image.styles";

// ---

const Image = ({ source }) => <S.Img src={source.url} alt={source.alt} />;

Image.propTypes = {
  source: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Image;
