import React from "react";
import PropTypes from "prop-types";

import { imageBuilder } from '../../../lib/sanity'
import * as S from "./Image.styles";

// ---

const Image = ({ image, layout, ...rest }) => {
  if (!image) return null;

  // eslint-disable-next-line no-unused-vars
  const [assetType, _id, dimensions, filetype] = image.asset._ref.split('-');
  const [width, height] = dimensions.split('x');

  return (
    <S.Image
      src={imageBuilder(image).url()}
      layout={layout ?? "responsive"}
      width={layout !== "fill" && width}
      height={layout !== "fill" && height}
      alt={image.alt}
      {...rest}
    />
  );
};

Image.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string.isRequired,
    }).isRequired,
    alt: PropTypes.string,
  }),
  layout: PropTypes.string,
};

Image.defaultProps = {
  image: {
    alt: null,
  },
  layout: null,
};

export default Image;
