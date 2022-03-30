import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { Container } from "../../core/Container";
import { LinkToRef } from "../../elements/LinkToRef";
import { Bolt } from "../../icons/BadgeBolt";
import * as S from "./ListBodyCopy.styles";

export function ListBodyCopy({ data, theme }) {
  const copyComponents = {
    marks: {
      internalLink: ({ children, value }) => {
        return (
          <Link href={`/${value?.slug?.current}`}>
            <a>{children}</a>
          </Link>
        );
      },
    },
  };

  return (
    <S.ListBodyCopy theme={theme}>
      <Container>
        {data?.bolt && (
          <div className="listBody__bolt">
            <Bolt />
          </div>
        )}

        <div className="listBody__headline">
          {data?.headline && <h3>{data.headline}</h3>}
        </div>

        <div className="listBody__body">
          <PortableText value={data?.copyNoHeadlines?.content} />
          {data?.linkToRef?.link && (
            <Link href={data?.linkToRef?.link ?? "#"}>
              <a>
                <LinkToRef label={data?.linkToRef?.label || "Find out more"} />
              </a>
            </Link>
          )}
        </div>

        <div className="listBody__list">
          <PortableText
            value={data?.aside?.content}
            components={copyComponents}
          />
        </div>
      </Container>
    </S.ListBodyCopy>
  );
}
