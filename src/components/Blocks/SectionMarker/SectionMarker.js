import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import { BiRightArrowAlt as ArrowRight } from "react-icons/bi";

import * as S from "./SectionMarker.styles";
import Bolt from "../../../images/icons/Bolt";

// ---

const SectionMarker = ({
  title,
  mainCopy,
  link,
  aside,
  sectionBgColor,
  sectionColor,
}) => (
  <S.SectionMarker
    sectionBgColor={sectionBgColor}
    sectionColor={sectionColor}
  >
    <S.SectionMarkerContainer>
      <S.Title>
        <Bolt />
        {title && title}
      </S.Title>

      <S.Copy hasTitle={!!title}>
        <ReactMarkdown>{mainCopy}</ReactMarkdown>
        {link && (
          <Link to={link.url}>
            {link.label} <ArrowRight />
          </Link>
        )}
      </S.Copy>

      <S.Aside hasTitle={!!title}>
        <ReactMarkdown>{aside}</ReactMarkdown>
      </S.Aside>
    </S.SectionMarkerContainer>
  </S.SectionMarker>
);

SectionMarker.propTypes = {
  /** A string of copy */
  title: PropTypes.string,
  /** A string of markdown copy */
  mainCopy: PropTypes.string.isRequired,
  /** An optional link */
  link: PropTypes.shape({
    /** The link URL */
    url: PropTypes.string.isRequired,
    /** The link URL */
    label: PropTypes.string.isRequired,
  }),
  /** Another string of markdown copy used for smaller bits of copy or lists */
  aside: PropTypes.string,
  /** An optional background colour -- accepts any CSS colour value including variables */
  sectionBgColor: PropTypes.string,
  /** An optional text colour -- accepts any CSS colour value including variables */
  sectionColor: PropTypes.string,
};

SectionMarker.defaultProps = {
  title: null,
  link: null,
  aside: null,
  sectionBgColor: "var(--white)",
  sectionColor: "var(--black)",
};

export default SectionMarker;
