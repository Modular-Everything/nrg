import React from "react";

import * as S from "./PreviewBanner.styles";

// ---

const PreviewBanner = () => {
  const exitURL = `/api/exit-preview`;

  return (
    <S.PreviewBanner>
      You are in preview mode, viewing draft documents.{" "}
      <a href={exitURL}>Exit</a>?
    </S.PreviewBanner>
  );
};

export default PreviewBanner;
