/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { BiRightArrowAlt as ArrowRight } from "react-icons/bi";

import * as S from "./SectionMarker.styles";
import Bolt from "../../../images/icons/Bolt";

// ---

const SectionMarker = ({ block }) => {
  const {
    title,
    main_copy,
    main_copy_link,
    main_copy_link_label,
    aside,
    background_color,
    text_color,
  } = block;

  return (
    <S.SectionMarker
      sectionBgColor={background_color}
      sectionColor={text_color}
    >
      <S.SectionMarkerContainer>
        <S.Title>
          <Bolt className="bolt" />
          {title && title}
        </S.Title>

        <S.Copy hasTitle={!!title}>
          <ReactMarkdown>{main_copy}</ReactMarkdown>
          {main_copy_link && main_copy_link_label && (
            <Link href={`/${main_copy_link.slug}`}>
              <a>
                {main_copy_link_label} <ArrowRight />
              </a>
            </Link>
          )}
        </S.Copy>

        <S.Aside hasTitle={!!title}>
          <ReactMarkdown>{aside}</ReactMarkdown>
        </S.Aside>
      </S.SectionMarkerContainer>
    </S.SectionMarker>
  );
};

SectionMarker.propTypes = {
  block: PropTypes.objectOf({
    /** A string of copy */
    title: PropTypes.string,
    /** A string of markdown copy */
    main_copy: PropTypes.string.isRequired,
    /** Another string of markdown copy used for smaller bits of copy or lists */
    aside: PropTypes.string,
    /** An optional background colour -- accepts any CSS colour value including variables */
    background_color: PropTypes.string,
    /** An optional text colour -- accepts any CSS colour value including variables */
    text_color: PropTypes.string,
    /** An optional page link */
    main_copy_link: PropTypes.object,
    /** The label for the link */
    main_copy_link_label: PropTypes.string,
  }),
};

SectionMarker.defaultProps = {
  block: {
    title: null,
    // link: null,
    aside: null,
    background_color: "var(--white)",
    text_color: "var(--black)",
    main_copy_link: null,
    main_copy_link_label: null,
  },
};

export default SectionMarker;
