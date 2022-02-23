import * as S from "./BodyCopy.styles";
import { ListBodyCopy } from "./ListBodyCopy";
import { MediaBodyCopy } from "./MediaBodyCopy";
import { SimpleBodyCopy } from "./SimpleBodyCopy";

function getLayout(type, data, theme) {
  const layouts = {
    body: <SimpleBodyCopy data={data} theme={theme} />,
    list: <ListBodyCopy data={data} theme={theme} />,
    media: <MediaBodyCopy data={data} theme={theme} />,
  };
  return layouts[type] || layouts.body;
}

function getTheme(color) {
  const red = "var(--nrg-red)";
  const black = "var(--nrg-black)";
  const white = "var(--nrg-white)";

  const theme = {
    red: {
      background: red,
      numbers: black,
      bullets: {
        text: white,
        background: black,
      },
      copy: white,
      title: white,
      cta: black,
    },
    black: {
      background: black,
      numbers: red,
      bullets: {
        text: black,
        background: white,
      },
      copy: white,
      title: white,
      cta: red,
    },
    white: {
      background: white,
      numbers: red,
      bullets: {
        text: white,
        background: red,
      },
      copy: black,
      title: black,
      cta: red,
    },
  };

  return theme[color] || theme.white;
}

export function BodyCopy({ data }) {
  const themeColor = data.backgroundColor
    .replace("var(--nrg-", "")
    .replace(")", "");
  const theme = getTheme(themeColor);

  return (
    <S.BodyCopy columns={data?.columns} theme={theme}>
      {getLayout(data?.layoutType, data, theme)}
    </S.BodyCopy>
  );
}
