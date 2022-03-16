import { PortableText } from "@portabletext/react";

import { Container } from "../../core/Container";
import * as S from "./SimpleBodyCopy.styles";

export function SimpleBodyCopy({ data }) {
  return (
    <S.SimpleBodyCopy columns={data?.columns}>
      <Container
        style={
          data?.layoutType === "body" && data?.columns === 1
            ? { maxWidth: "68rem" }
            : {}
        }
      >
        <PortableText value={data?.copy?.content} />
      </Container>
    </S.SimpleBodyCopy>
  );
}
