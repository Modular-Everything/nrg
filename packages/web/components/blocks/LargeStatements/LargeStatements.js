import { PortableText } from "@portabletext/react";
import PropTypes from "prop-types";
import { useEffect, useCallback, useState } from "react";

import { Container } from "../../core/Container";
import { Image } from "../../elements/Image";
import * as S from "./LargeStatements.styles";

function getTheme(color) {
  const red = "var(--nrg-red)";
  const black = "var(--nrg-black)";
  const white = "var(--nrg-white)";

  const theme = {
    red: {
      background: red,
      text: white,
    },
    black: {
      background: black,
      text: white,
    },
    white: {
      background: white,
      text: black,
    },
    image: {
      background: black,
      text: white,
    },
  };

  return theme[color] || theme.white;
}

export function LargeStatements({ data }) {
  const [image, setImage] = useState(null);
  const [windowY, setWindowY] = useState(0);
  const [containerOffset, setContainerOffset] = useState(0);

  let theme = getTheme("black");
  if (data.backgroundColor) {
    const themeColor = data.backgroundColor
      .replace("var(--nrg-", "")
      .replace(")", "");
    theme = getTheme(themeColor);
  }

  const imageRef = useCallback((node) => {
    if (node !== null) {
      setImage(node);
    }
  }, []);

  const containerRef = useCallback((node) => {
    if (node !== null) {
      setContainerOffset(node.offsetTop);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setWindowY(window.scrollY);
      const rate = (windowY - containerOffset) * 0.5;
      if (image) {
        image.style.transform = `scale(1.1) translate3d(0, ${rate}px, 0)`;
      }
    });
  }, [image, containerOffset, windowY]);

  return (
    <S.LargeStatements theme={theme} ref={containerRef}>
      <Container>
        <div className="statement">
          <PortableText value={data?.statement?.statement} />
        </div>
      </Container>

      <S.BGImage ref={imageRef}>
        <Image src={data.image} alt="" layout="fill" objectFit="cover" />
      </S.BGImage>
    </S.LargeStatements>
  );
}

LargeStatements.propTypes = {
  data: PropTypes.object,
};
