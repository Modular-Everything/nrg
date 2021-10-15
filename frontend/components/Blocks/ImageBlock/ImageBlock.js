import React from "react";
import PropTypes from "prop-types";

import * as S from "./ImageBlock.styles";
import Copy from "../../Elements/Copy";
import Title from "../../Elements/Title";
import Image from "../../Elements/Image";
import BoltIcon from "../../../images/icons/Bolt";

// ---

const ImageBlock = ({ image, hasIcon, enlargeIcon, title, copy }) => (
  <S.ImageBlock>
    {(title || copy) && (
      <S.Copy>
        {title && <Title as="h3" title={title} />}
        {copy && <Copy copy={copy} />}
      </S.Copy>
    )}

    {hasIcon && (
      <S.Icon outline={enlargeIcon} enlarged={enlargeIcon}>
        <BoltIcon />
      </S.Icon>
    )}

    <S.Background>
      <Image image={image} />
    </S.Background>
  </S.ImageBlock>
);

ImageBlock.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  hasIcon: PropTypes.bool,
  enlargeIcon: PropTypes.bool,
  title: PropTypes.string,
  copy: PropTypes.string,
};

ImageBlock.defaultProps = {
  hasIcon: false,
  enlargeIcon: false,
  title: null,
  copy: null,
};

export default ImageBlock;