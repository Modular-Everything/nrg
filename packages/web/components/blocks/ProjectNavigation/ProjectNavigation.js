import Link from "next/link";
import PropTypes from "prop-types";

import { Image } from "../../elements/Image";
import { LinkToRef } from "../../elements/LinkToRef";
import * as S from "./ProjectNavigation.styles";

export function ProjectNavigation({ data }) {
  return (
    <S.ProjectNavigation>
      {data?.items?.map((item) => (
        <Link key={item._key} href={item?.linkToRef?.link ?? "#"}>
          <a>
            <div className="projectNav__image">
              <S.Skrim />
              <Image
                src={item?.image}
                alt={item?.title || ""}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="projectNav__meta">
              {item?.subtitle && <h5>{item.subtitle}</h5>}
              {item?.title && <h4>{item.title}</h4>}
              <LinkToRef label={item?.linkToRef?.label || "Find out more"} />
            </div>
          </a>
        </Link>
      ))}
    </S.ProjectNavigation>
  );
}

ProjectNavigation.propTypes = {
  data: PropTypes.object,
};
