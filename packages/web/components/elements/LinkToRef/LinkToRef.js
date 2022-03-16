import PropTypes from "prop-types";

import * as S from "./LinkToRef.styles";

export function LinkToRef({ label, fallback }) {
  return (
    <S.LinkToRef className="linkToRef">
      {label || "Find out more"} <span className="arrow">&rarr;</span>
    </S.LinkToRef>
  );
}

LinkToRef.propTypes = {
  label: PropTypes.string.isRequired,
};
