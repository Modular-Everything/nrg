import Link from "next/link";

import { Container } from "../../core/Container";
import { Copy } from "../../elements/Copy/Copy";
import { Image } from "../../elements/Image";
import { LinkToRef } from "../../elements/LinkToRef";
import * as S from "./MediaBodyCopy.styles";

export function MediaBodyCopy({ data }) {
  return (
    <S.MediaBodyCopy>
      <Container>
        <div className="mediaBody__copy">
          <Copy data={data?.copy?.content} />
          {data?.linkToRef?.link && (
            <Link href={data?.linkToRef?.link ?? "#"}>
              <a>
                <LinkToRef label={data?.linkToRef?.label || "Find out more"} />
              </a>
            </Link>
          )}
        </div>

        <div className="mediaBody__media">
          <Image src={data?.image} alt="" objectFit="cover" />
        </div>
      </Container>
    </S.MediaBodyCopy>
  );
}
