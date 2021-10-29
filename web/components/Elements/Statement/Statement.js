import React from "react";
import PropTypes from "prop-types";
import BlockContent from '@sanity/block-content-to-react';

import * as S from "./Statement.styles";

// ---

const Statement = ({ copy }) => (
  <S.Copy>
    <BlockContent blocks={copy} />
  </S.Copy>
);

Statement.propTypes = {
  copy: PropTypes.string.isRequired,
};

export default Statement;
