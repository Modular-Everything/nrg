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

  let columns = 2;
  if (data?.aside?.content) {
    columns = 3;
  }

  return (
    <S.ListBodyCopy theme={theme} columns={columns}>
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
          <PortableText
            value={data?.copyNoHeadlines?.content}
            components={copyComponents}
          />
          {data?.linkToRef?.link && (
            <Link href={data?.linkToRef?.link ?? "#"}>
              <a>
                <LinkToRef label={data?.linkToRef?.label || "Find out more"} />
              </a>
            </Link>
          )}
        </div>

        {data?.aside?.content && (
          <div className="listBody__list">
            <PortableText
              value={data?.aside?.content}
              components={copyComponents}
            />
          </div>
        )}
      </Container>
    </S.ListBodyCopy>
  );
}
