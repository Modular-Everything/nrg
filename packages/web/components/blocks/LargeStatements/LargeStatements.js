import PropTypes from "prop-types";

import { Container } from "../../core/Container";
import { Image } from "../../elements/Image";
import * as S from "./LargeStatements.styles";

export function LargeStatements({ data }) {
  return (
    <S.LargeStatements>
      <Container>
        {data?.images.length >= 1 && (
          <div className="statement__image statement__image--1">
            <Image
              src={data.images[0]}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}

        <div
          className="statement"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data?.svgSnippet }}
        />

        {data?.images.length >= 2 && (
          <div className="statement__image statement__image--2">
            <Image
              src={data.images[1]}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </Container>
    </S.LargeStatements>
  );
}

LargeStatements.propTypes = {
  data: PropTypes.object,
};
