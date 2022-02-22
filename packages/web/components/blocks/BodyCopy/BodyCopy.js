import { PortableText } from "@portabletext/react";

import { Container } from "../../core/Container";
import * as S from "./BodyCopy.styles";

export function BodyCopy({ data }) {
  return (
    <S.BodyCopy columns={data?.columns}>
      <Container style={data?.columns === 1 ? { maxWidth: "68rem" } : {}}>
        <PortableText value={data.bodyCopy.copy} />
      </Container>
    </S.BodyCopy>
  );
}
