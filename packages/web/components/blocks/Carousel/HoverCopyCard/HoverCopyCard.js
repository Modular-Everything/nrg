import Link from "next/link";
import PropTypes from "prop-types";

import { Copy } from "../../../elements/Copy";
import { Image } from "../../../elements/Image";
import * as S from "./HoverCopyCard.styles";

export function HoverCopyCard({ data }) {
  function Content() {
    return (
      <>
        <p className="subtitle">{data?.subtitle}</p>

        <div className="hoverCopy__copy">
          <Copy data={data?.bodyCopy?.copy} />
        </div>

        <Image src={data?.image} layout="fill" objectFit="cover" />
      </>
    );
  }

  return (
    <S.HoverCopyCard>
      {data?.linkToRef?.link ? (
        <Link href={data?.linkToRef?.link ?? "#"}>
          <a>
            <Content />
          </a>
        </Link>
      ) : (
        <Content />
      )}
    </S.HoverCopyCard>
  );
}

HoverCopyCard.propTypes = {
  data: PropTypes.object.isRequired,
};
