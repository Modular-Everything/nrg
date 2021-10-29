import React from "react";
import PropTypes from "prop-types";
import BlockContent from '@sanity/block-content-to-react';

import * as S from "./Copy.styles";

// ---

const Copy = ({ title, copy, columns }) => {
  if (!copy) return null;

  const RenderedCopy = () => <BlockContent blocks={copy} />;

  return (
    <S.Copy>
      {/* An optional title */}
      {title && <S.Title as="h2">{title}</S.Title>}

      {/* Either returns a single column or multi columns */}
      {columns === 1 ? (
        <S.SingleColumn>
          <RenderedCopy />
        </S.SingleColumn>
      ) : (
        <S.MultiColumn columns={columns}>
          <RenderedCopy />
        </S.MultiColumn>
      )}
    </S.Copy>
  );
};

Copy.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string.isRequired,
  columns: PropTypes.number,
};

Copy.defaultProps = {
  title: null,
  columns: 1,
};

export default Copy;
