import PropTypes from "prop-types";

import { Container } from "../../core/Container";
import * as S from "./List.styles";

function getTheme(color) {
  const red = "var(--nrg-red)";
  const black = "var(--nrg-black)";
  const white = "var(--nrg-white)";

  const theme = {
    red: {
      background: red,
      numbers: black,
      copy: white,
      border: black,
      title: black,
    },
    black: {
      background: black,
      numbers: red,
      copy: white,
      border: "var(--nrg-dk-grey)",
      title: white,
    },
    white: {
      background: white,
      numbers: red,
      copy: black,
      border: "var(--nrg-lt-grey)",
      title: black,
    },
  };

  return theme[color] || theme.white;
}

export function List({ data }) {
  const themeColor = data.backgroundColor
    .replace("var(--nrg-", "")
    .replace(")", "");
  const { background, title, border, numbers, copy } = getTheme(themeColor);

  return (
    <S.List style={{ backgroundColor: background }}>
      <Container>
        {data?.title && <h3 style={{ color: title }}>{data.title}</h3>}

        <ul className="grid">
          {data?.listItems?.map((item, index) => {
            const number = index + 1;
            return (
              <li key={number} style={{ borderColor: border }}>
                <span style={{ color: numbers }}>
                  {number < 10 ? `0${number}` : number}
                </span>
                <p style={{ color: copy }}>{item}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </S.List>
  );
}

List.propTypes = {
  data: PropTypes.object,
};

List.defaultProps = {
  data: null,
};
