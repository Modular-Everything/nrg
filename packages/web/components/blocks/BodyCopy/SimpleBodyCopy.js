import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { Container } from "../../core/Container";
import { Bolt } from "../../icons/BadgeBolt";
import * as S from "./SimpleBodyCopy.styles";

export function SimpleBodyCopy({ data, theme }) {
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
    <S.SimpleBodyCopy theme={theme}>
      <Container>
        <S.Wrapper
          textAlign={data?.copyPosition}
          position={data?.copyPosition}
          columns={data?.columns}
          style={
            data?.layoutType === "body" && data?.columns === 1
              ? { maxWidth: "68rem" }
              : {}
          }
        >
          {data?.bolt && (
            <div className="simpleBody__bolt">
              <Bolt />
            </div>
          )}

          <PortableText
            value={data?.copy?.content}
            components={copyComponents}
          />
        </S.Wrapper>
      </Container>
    </S.SimpleBodyCopy>
  );
}
