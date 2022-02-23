import { PortableText } from "@portabletext/react";

import { Container } from "../../core/Container";


export function SimpleBodyCopy({ data }) {
  return (
    <Container
      style={
        data?.layoutType === "body" && data?.columns === 1
          ? { maxWidth: "68rem" }
          : {}
      }
    >
      <PortableText value={data?.copy?.content} />
    </Container>
  );
}
