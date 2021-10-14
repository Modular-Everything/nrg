import React from "react";
import PropTypes from "prop-types";
import { Cloudinary } from "@cloudinary/url-gen";
import { placeholder, responsive, lazyload } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

import * as S from "./Image.styles";

// ---

const Image = ({ image, ...rest }) => {
  if (!image) return null;

  const cld = new Cloudinary({
    cloud: {
      cloudName: "modular-everything",
    },
  });

  const src = cld.image(image.provider_metadata?.public_id);
  src.resize(fill().width(image.formats.large.width * 2));

  return (
    <S.Image
      cldImg={src}
      plugins={[
        placeholder("blur"),
        responsive([800, 1000, 1280, 1920]),
        lazyload("10px 20px 10px 30px", 0.25),
      ]}
      title={image?.title}
      alt={image?.alternativeText}
      {...rest}
    />
  );
};

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    formats: PropTypes.shape({
      large: PropTypes.shape({
        width: PropTypes.number.isRequired,
      }),
    }).isRequired,
    title: PropTypes.string,
    alternativeText: PropTypes.string,
    provider_metadata: PropTypes.shape({
      public_id: PropTypes.string,
    }),
  }),
};

Image.defaultProps = {
  image: {
    title: null,
    alternativeText: null,
    provider_metadata: {
      public_id: null,
    },
  },
};

export default Image;
