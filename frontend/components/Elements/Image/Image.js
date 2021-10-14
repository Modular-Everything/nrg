import React from "react";
import PropTypes from "prop-types";

import * as S from "./Image.styles";

// ---

const Image = ({ image, ...rest }) => {
  if (!image) return null;

  console.log(image);

  return <S.Image src={image} layout="fill" {...rest} />;
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
