import PropTypes from "prop-types";

import * as S from "./TestimonialCard.styles";

function getTheme(color) {
  const red = "var(--nrg-red)";
  const black = "var(--nrg-black)";
  const white = "var(--nrg-white)";

  const theme = {
    red: {
      background: red,
      copy: white,
    },
    black: {
      background: black,
      copy: white,
    },
    white: {
      background: white,
      copy: black,
    },
  };

  return theme[color] || theme.white;
}

export function TestimonialCard({ data }) {
  const themeColor = data.backgroundColor
    .replace("var(--nrg-", "")
    .replace(")", "");
  const theme = getTheme(themeColor);

  console.log(data);

  return (
    <S.TestimonialCard theme={theme}>
      {data?.content && <p>{data.content}</p>}
      {data?.source && <strong>{data.source}</strong>}
    </S.TestimonialCard>
  );
}

TestimonialCard.propTypes = {
  data: PropTypes.object.isRequired,
};
