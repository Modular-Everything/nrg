import React from "react";
import PropTypes from "prop-types";
import * as S from "./CopyBlock.styles";
import Copy from "../../Copy";
import Container from "../../Container";
import Image from "../../Image";

// ---

const CopyBlock = ({ block }) => {
  const { title, copy, columns, image } = block;

  return (
    <Container clamp={!image}>
      {image ? (
        <S.CopyWithImage>
          <div>
            <Copy title={title} copy={copy} columns={columns} />
          </div>
          <div>
            <Image source={{ url: image.url, alt: image.alt }} />
          </div>
        </S.CopyWithImage>
      ) : (
        <Copy title={title} copy={copy} columns={columns} />
      )}
    </Container>
  );
};

CopyBlock.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    copy: PropTypes.string.isRequired,
    columns: PropTypes.number,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  }),
};

CopyBlock.defaultProps = {
  block: {
    title: null,
    columns: 1,
    image: null,
  },
};

export default CopyBlock;
