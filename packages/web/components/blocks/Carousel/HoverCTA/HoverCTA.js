import Link from "next/link";
import PropTypes from "prop-types";

import { Copy } from "../../../elements/Copy";
import { Image } from "../../../elements/Image";
import { LinkToRef } from "../../../elements/LinkToRef";
import * as S from "./HoverCTA.styles";

export function HoverCTA({ data }) {
  function Content() {
    return (
      <>
        <div className="hoverCopy__copy">
          <Copy data={data?.bodyCopy?.copy} />
          {data?.linkToRef?.link && (
            <LinkToRef label={data?.linkToRef?.label || "Find out more"} />
          )}
        </div>

        <Image src={data?.image} layout="fill" objectFit="cover" />
      </>
    );
  }

  return (
    <S.HoverCTA>
      {data?.linkToRef?.link ? (
        <Link href={data?.linkToRef?.link ?? "#"}>
          <a title={data?.subtitle}>
            <Content />
          </a>
        </Link>
      ) : (
        <Content />
      )}
    </S.HoverCTA>
  );
}

HoverCTA.propTypes = {
  data: PropTypes.object.isRequired,
};
