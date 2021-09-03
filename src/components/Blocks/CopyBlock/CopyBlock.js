import React from "react";
import PropTypes from "prop-types";

import * as S from "./CopyBlock.styles";
import Container from "../../Core/Container";
import Copy from "../../Elements/Copy";
import Image from "../../Elements/Image";

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
            <Image src={image.url} alt={image.alt} />
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
