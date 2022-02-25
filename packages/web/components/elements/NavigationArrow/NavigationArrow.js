import { forwardRef } from "react";

import * as S from "./NavigationArrow.styles";

export const NavigationArrow = forwardRef((props, ref) => {
  return (
    <S.NavigationArrow
      type="button"
      className={props.direction === "prev" ? "prev" : "next"}
      ref={ref}
    >
      {props.direction === "prev" ? <>&larr;</> : <>&rarr;</>}
    </S.NavigationArrow>
  );
});
