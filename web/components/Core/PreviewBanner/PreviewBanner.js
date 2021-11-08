import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import * as S from "./PreviewBanner.styles";

// ---

const PreviewBanner = ({ slug }) => (
  <S.PreviewBanner>
    <Link href={`/api/exit-preview?slug=/${slug}`}>
      <a>Preview Mode Activated!</a>
    </Link>
  </S.PreviewBanner>
);

PreviewBanner.propTypes = {
  slug: PropTypes.string,
};

PreviewBanner.defaultProps = {
  slug: null,
};

export default PreviewBanner;
