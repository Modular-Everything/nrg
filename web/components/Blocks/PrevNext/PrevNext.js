import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { BiRightArrowAlt as ArrowRight } from "react-icons/bi";

import * as S from "./PrevNext.styles";
import FadeIn from "../../Animations/FadeIn";
import Image from "../../Elements/Image";

// ---

const PrevNextLink = ({ title, subtitle, label, bgImage }) => (
  <>
    <div className="content">
      {subtitle && <h4>{subtitle}</h4>}
      {title && <h3>{title}</h3>}
      <span className="label">
        {label || "View Project"} <ArrowRight />
      </span>
    </div>

    <div className="image">
      <div className="skrim" />
      <Image image={bgImage} priority layout="fill" quality={80} />
    </div>
  </>
);

PrevNextLink.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  bgImage: PropTypes.object.isRequired,
};

PrevNextLink.defaultProps = {
  title: null,
  subtitle: null,
  label: null,
};

// ---

const PrevNext = ({ block }) => {
  const { prevLink, prevTitle, prevSlug, nextLink, nextTitle, nextSlug } =
    block;

  return (
    <FadeIn>
      <S.PrevNext>
        <Link href={prevSlug === "homepage" ? "/" : `/projects/${prevSlug}`}>
          <a className="prevNext prev">
            <PrevNextLink
              title={prevTitle}
              subtitle={prevLink?.subtitle}
              label={prevLink?.linkLabel}
              bgImage={prevLink?.bgImage}
            />
          </a>
        </Link>
        <Link href={nextSlug === "homepage" ? "/" : `/projects/${nextSlug}`}>
          <a className="prevNext next">
            <PrevNextLink
              title={nextTitle}
              subtitle={nextLink?.subtitle}
              label={nextLink?.linkLabel}
              bgImage={nextLink?.bgImage}
            />
          </a>
        </Link>
      </S.PrevNext>
    </FadeIn>
  );
};

PrevNext.propTypes = {
  block: PropTypes.shape({
    prevTitle: PropTypes.string,
    prevLink: PropTypes.shape({
      subtitle: PropTypes.string,
      link: PropTypes.shape({}).isRequired,
      linkLabel: PropTypes.string,
      bgImage: PropTypes.object.isRequired,
    }),
    nextTitle: PropTypes.string,
    nextLink: PropTypes.shape({
      subtitle: PropTypes.string,
      link: PropTypes.shape({}).isRequired,
      linkLabel: PropTypes.string,
      bgImage: PropTypes.object.isRequired,
    }),
    nextSlug: PropTypes.string.isRequired,
    prevSlug: PropTypes.string.isRequired,
  }),
};

PrevNext.defaultProps = {
  block: {
    prevTitle: null,
    prevLink: {
      subtitle: null,
      linkLabel: null,
    },
    nextTitle: null,
    nextLink: {
      subtitle: null,
      linkLabel: null,
    },
  },
};

export default PrevNext;
