import React from "react";
import PropTypes from "prop-types";
import { useNextSanityImage } from "next-sanity-image";

import { config } from "../../../lib/config";
import * as S from "./Image.styles";

// ---

const Placeholder = () => (
  <div
    style={{ backgroundColor: "var(--grey)", width: "100%", height: "100%" }}
  />
);

// ---

const Image = ({ image, layout, ...rest }) => {
  if (!image?.asset) return <Placeholder />;

  const imageProps = useNextSanityImage(config, image);

  return (
    <S.Image
      {...imageProps}
      layout={layout ?? "responsive"}
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
