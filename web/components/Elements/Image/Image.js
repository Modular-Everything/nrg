import React from "react";
import PropTypes from "prop-types";
import { useNextSanityImage } from "next-sanity-image";

import { config } from "../../../lib/config";
import * as S from "./Image.styles";

// ---

const Image = ({ image, layout, ...rest }) => {
  if (!image?.asset) return null;

  const imageProps = useNextSanityImage(config, image);

  return (
    <S.Image
      src={imageProps.src}
      blurDataURL={imageProps.blurDataURL}
      layout={layout ?? "responsive"}
      width={layout !== "fill" && imageProps.width}
      height={layout !== "fill" && imageProps.height}
      // placeholder="blur"
      alt={image?.alt}
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
