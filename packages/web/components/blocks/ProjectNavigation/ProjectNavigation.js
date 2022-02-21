import Link from "next/link";
import PropTypes from "prop-types";

import { Image } from "../../elements/Image";
import * as S from "./ProjectNavigation.styles";

export function ProjectNavigation({ data }) {
  return (
    <S.ProjectNavigation>
      {data?.items?.map((item) => (
        <Link key={item._key} href={item?.linkToRef?.link?.slug?.current}>
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
              <span>{item?.linkToRef?.label || "View Project"} &rarr;</span>
            </div>
          </a>
        </Link>
      ))}
    </S.ProjectNavigation>
  );
}

ProjectNavigation.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.object.isRequired,
    linkToRef: PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.object.isRequired,
    }),
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

ProjectNavigation.defaultProps = {
  data: {
    linkToRef: {
      label: null,
      link: null,
    },
    subtitle: null,
    title: null,
  },
};
