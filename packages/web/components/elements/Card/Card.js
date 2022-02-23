/* eslint-disable no-unused-vars */
import Link from "next/link";
import PropTypes from "prop-types";

import { Image } from "../Image";
import { LinkToRef } from "../LinkToRef";
import * as S from "./Card.styles";

export function Card({ data }) {
  if (!data?.image || !data?.linkToRef?.link) {
    return <pre>Error: Missing required image</pre>;
  }

  const [assetType, _id, dimensions, filetype] =
    data.image.asset._ref.split("-");
  const [width, height] = dimensions.split("x");
  const isLandscape = Number(width) > Number(height);

  function Content() {
    return (
      <>
        <div className="card__image">
          <Image
            src={data?.image}
            alt={data?.title || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="card__meta">
          {data?.subtitle && <h5>{data.subtitle}</h5>}
          {data?.title && <h4>{data.title}</h4>}
          <LinkToRef label={data?.linkToRef?.label || "Find out more"} />
        </div>
      </>
    );
  }

  return (
    <S.Card className={isLandscape ? "landscape" : "portrait"}>
      {data?.linkToRef?.link?.slug ? (
        <Link href={data?.linkToRef?.link?.slug?.current ?? '#'}>
          <a>
            <Content />
          </a>
        </Link>
      ) : (
        <Content />
      )}
    </S.Card>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    copy: PropTypes.string,
    image: PropTypes.object.isRequired,
    linkToRef: PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.object.isRequired,
    }),
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

Card.defaultProps = {
  data: {
    copy: null,
    linkToRef: {
      label: null,
      link: null,
    },
    subtitle: null,
    title: null,
  },
};
