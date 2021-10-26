import React from "react";
import PropTypes from "prop-types";

import * as S from "./Image.styles";

// ---

const Image = ({ image, layout, ...rest }) => {
  if (!image) return null;
  return (
    <S.Image
      src={image.url}
      layout={layout ?? "responsive"}
      width={layout !== "fill" && image.width}
      height={layout !== "fill" && image.height}
      alt={image.alternativeText}
      {...rest}
    />
  );
};

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    alternativeText: PropTypes.string,
  }),
  layout: PropTypes.string,
};

Image.defaultProps = {
  image: {
    title: null,
    alternativeText: null,
  },
  layout: null,
};

export default Image;
