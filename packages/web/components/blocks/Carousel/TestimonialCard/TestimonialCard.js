import PropTypes from "prop-types";

import { Bolt } from "../../../icons/BadgeBolt";
import * as S from "./TestimonialCard.styles";

function getTheme(color) {
  const red = "var(--nrg-red)";
  const black = "var(--nrg-black)";
  const white = "var(--nrg-white)";

  const theme = {
    red: {
      background: red,
      copy: white,
      bolt: black,
    },
    black: {
      background: black,
      copy: white,
      bolt: red,
    },
    white: {
      background: white,
      copy: black,
      bolt: red,
    },
  };

  return theme[color] || theme.white;
}

export function TestimonialCard({ data }) {
  const themeColor = data.backgroundColor
    .replace("var(--nrg-", "")
    .replace(")", "");
  const theme = getTheme(themeColor);

  return (
    <S.TestimonialCard theme={theme}>
      {data?.content && <p>{data.content}</p>}

      <S.TestimonialCardAuthor theme={theme}>
        <Bolt />
        <p>
          <strong>
            {data?.sourcePerson && <span>{data.sourcePerson}</span>}
            {data?.sourceBusiness && <span>{data.sourceBusiness}</span>}
          </strong>
        </p>
      </S.TestimonialCardAuthor>
    </S.TestimonialCard>
  );
}

TestimonialCard.propTypes = {
  data: PropTypes.object.isRequired,
};
