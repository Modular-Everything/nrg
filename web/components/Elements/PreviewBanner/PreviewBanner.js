import React from "react";
import { useRouter } from "next/router";

import * as S from "./PreviewBanner.styles";

// ---

const PreviewBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <S.PreviewBanner>
      You are in preview mode, viewing draft documents.{" "}
      <a href={exitURL}>Exit</a>?
    </S.PreviewBanner>
  );
};

export default PreviewBanner;
