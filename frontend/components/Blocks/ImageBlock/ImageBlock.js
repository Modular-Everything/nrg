import React from "react";
import PropTypes from "prop-types";

import * as S from "./ImageBlock.styles";
import Copy from "../../Elements/Copy";
import Title from "../../Elements/Title";
import Image from "../../Elements/Image";
import BoltIcon from "../../../images/icons/Bolt";

// ---

const ImageBlock = ({ block }) => {
  const { background_image, icon, title, copy } = block;

  return (
    <S.ImageBlock>
      {(title || copy) && (
        <S.Copy>
          {title && <Title as="h3" title={title} />}
          {copy && <Copy copy={copy} />}
        </S.Copy>
      )}

      {(!title || !copy) && icon && (
        <S.Icon outline={icon === "large"} size={icon}>
          <BoltIcon />
        </S.Icon>
      )}

      <S.Background>
        <Image image={background_image} layout="fill" />
      </S.Background>
    </S.ImageBlock>
  );
};

ImageBlock.propTypes = {
  block: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    background_image: PropTypes.object.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    copy: PropTypes.string,
  }),
};

ImageBlock.defaultProps = {
  block: {
    icon: null,
    title: null,
    copy: null,
  },
};

export default ImageBlock;
