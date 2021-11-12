import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { BiRightArrowAlt as ArrowRight } from "react-icons/bi";

import * as S from "./PrevNext.styles";

// ---

const PrevNextLink = ({ subtitle, label }) => (
  <>
    {subtitle && <h4>{subtitle}</h4>}
    <h3>NBA 2K20: Welcome to the Next</h3>
    <span className="label">
      {label || "View Project"} <ArrowRight />
    </span>
    <S.Noise />
  </>
);

PrevNextLink.propTypes = {
  subtitle: PropTypes.string,
  label: PropTypes.string,
};

PrevNextLink.defaultProps = {
  subtitle: null,
  label: null,
};

// ---

const PrevNext = ({ block }) => {
  const { prevLink, nextLink } = block;

  return (
    <S.PrevNext>
      <Link href="/">
        <a className="prevNext prev">
          <PrevNextLink
            subtitle={prevLink.subtitle}
            label={prevLink.linkLabel}
          />
        </a>
      </Link>
      <Link href="/">
        <a className="prevNext next">
          <PrevNextLink
            subtitle={nextLink.subtitle}
            label={nextLink.linkLabel}
          />
        </a>
      </Link>

      <S.OutlineText text="Creators, Makers, Builders" />
    </S.PrevNext>
  );
};

PrevNext.propTypes = {
  block: PropTypes.shape({
    prevLink: PropTypes.shape({
      subtitle: PropTypes.string,
      link: PropTypes.shape({}).isRequired,
      linkLabel: PropTypes.string,
    }),
    nextLink: PropTypes.shape({
      subtitle: PropTypes.string,
      link: PropTypes.shape({}).isRequired,
      linkLabel: PropTypes.string,
    }),
  }),
};

PrevNext.defaultProps = {
  block: {
    prevLink: {
      subtitle: null,
      linkLabel: null,
    },
    nextLink: {
      subtitle: null,
      linkLabel: null,
    },
  },
};

export default PrevNext;
