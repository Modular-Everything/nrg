import Link from "next/link";
import PropTypes from "prop-types";

import { Copy } from "../../../elements/Copy";
import { Image } from "../../../elements/Image";
import { LinkToRef } from "../../../elements/LinkToRef";
import * as S from "./StandardCard.styles";

export function StandardCard({ data }) {
  function Content() {
    return (
      <>
        <p className="subtitle">{data?.subtitle}</p>
        <div className="standard__image">
          <Image src={data?.image} layout="fill" objectFit="cover" />
        </div>
        <Copy data={data?.bodyCopy?.copy} />
        {data?.linkToRef?.link && (
          <LinkToRef label={data?.linkToRef?.label || "Find out more"} />
        )}
      </>
    );
  }

  return (
    <S.StandardCard>
      {data?.linkToRef?.link ? (
        <Link href={data?.linkToRef?.link ?? "#"}>
          <a>
            <Content />
          </a>
        </Link>
      ) : (
        <Content />
      )}
    </S.StandardCard>
  );
}

StandardCard.propTypes = {
  data: PropTypes.object.isRequired,
};
