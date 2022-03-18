import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { Container } from "../../core/Container";
import * as S from "./SimpleBodyCopy.styles";

export function SimpleBodyCopy({ data }) {
  const copyComponents = {
    marks: {
      internalLink: ({ children, value }) => {
        return (
          <Link href={`/${value?.slug?.current}`}>
            <a>{children}</a>
          </Link>
        );
      },
      link: ({ children, value }) => {
        return (
          <a
            href={value.href}
            rel="noreferrer noopener"
            target={value.blank ? "_blank" : "_self"}
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <S.SimpleBodyCopy columns={data?.columns}>
      <Container
        style={
          data?.layoutType === "body" && data?.columns === 1
            ? { maxWidth: "68rem" }
            : {}
        }
      >
        <PortableText value={data?.copy?.content} components={copyComponents} />
      </Container>
    </S.SimpleBodyCopy>
  );
}
