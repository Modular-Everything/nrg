import { PortableText } from "@portabletext/react";

import { Container } from "../../core/Container";
import * as S from "./ListBodyCopy.styles";

export function ListBodyCopy({ data }) {
  console.log(data);

  return (
    <S.ListBodyCopy>
      <Container>
        <div className="listBody__headline">
          {data?.headline && <h3>{data.headline}</h3>}
        </div>

        <div className="listBody__body">
          <PortableText value={data?.copyNoHeadlines?.content} />
        </div>

        <div className="listBody__list">
          <PortableText value={data?.aside?.content} />
        </div>
      </Container>
    </S.ListBodyCopy>
  );
}
