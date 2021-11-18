/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import { BiRightArrowAlt as ArrowRight } from "react-icons/bi";

import * as S from "./SectionMarker.styles";
import Bolt from "../../../images/icons/Bolt";
import FadeIn from "../../Animations/FadeIn";

// ---

const SectionMarker = ({ block }) => {
  const {
    title,
    mainCopy,
    link,
    linkLabel,
    aside,
    backgroundColor,
    textColor,
    slug,
  } = block;

  return (
    <S.SectionMarker
      className="block__SectionMarker"
      sectionBgColor={backgroundColor}
      sectionColor={textColor}
    >
      <FadeIn>
        <S.SectionMarkerContainer extraPadding={backgroundColor === "black"}>
          <S.Title>
            <Bolt className="bolt" />
            {title && title}
          </S.Title>

          <S.Copy hasTitle={!!title}>
            <BlockContent blocks={mainCopy} />
            {link && (
              <Link href={`/${slug === "homepage" ? "" : slug}`}>
                <a>
                  {linkLabel || "Learn more"} <ArrowRight />
                </a>
              </Link>
            )}
          </S.Copy>

          <S.Aside hasTitle={!!title}>
            <BlockContent blocks={aside} />
          </S.Aside>
        </S.SectionMarkerContainer>
      </FadeIn>

      {backgroundColor === "black" && <S.Noise />}
    </S.SectionMarker>
  );
};

SectionMarker.propTypes = {
  block: PropTypes.objectOf({
    /** A string of copy */
    title: PropTypes.string,
    /** A string of markdown copy */
    mainCopy: PropTypes.string.isRequired,
    /** Another string of markdown copy used for smaller bits of copy or lists */
    aside: PropTypes.string,
    /** An optional background colour -- accepts a string referring to a CSS variable (black, white) */
    backgroundColor: PropTypes.string,
    /** An optional text colour -- accepts a string referring to a CSS variable (black, white) */
    textColor: PropTypes.string,
    /** An optional page link */
    link: PropTypes.object,
    /** The label for the link */
    linkLabel: PropTypes.string,
  }),
};

SectionMarker.defaultProps = {
  block: {
    title: null,
    // link: null,
    aside: null,
    backgroundColor: "var(--white)",
    textColor: "var(--black)",
    link: null,
    linkLabel: null,
  },
};

export default SectionMarker;
