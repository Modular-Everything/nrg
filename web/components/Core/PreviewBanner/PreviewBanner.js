import React from "react";
import Link from "next/link";

import * as S from "./PreviewBanner.styles";

// ---

const PreviewBanner = () => (
  <S.PreviewBanner>
    <Link href="/api/exit-preview">
      <a>Preview Mode Activated!</a>
    </Link>
  </S.PreviewBanner>
);

export default PreviewBanner;
