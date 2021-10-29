import React from "react";
import PropTypes from "prop-types";

import { imageBuilder } from '../../../lib/sanity'
import * as S from "./Image.styles";

// ---

const Image = ({ image, layout, ...rest }) => {
  if (!image) return null;

  return (
    <S.Image
      src={imageBuilder(image).url()}
      layout={layout ?? "responsive"}
      width={layout !== "fill" && 1920}
      height={layout !== "fill" && 1080}
      alt={image.alt}
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
    alt: PropTypes.string,
  }),
  layout: PropTypes.string,
};

Image.defaultProps = {
  image: {
    title: null,
    alt: null,
  },
  layout: null,
};

export default Image;
