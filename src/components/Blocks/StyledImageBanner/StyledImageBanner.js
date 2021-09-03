import React from "react";
import PropTypes from "prop-types";
import { BiDownArrowAlt as ArrowDown } from "react-icons/bi";
import ReactMarkdown from "react-markdown";

import * as S from "./StyledImageBanner.styles";
import Image from '../../Elements/Image'

// ---

/**
 * A banner with an image and some cool looking text
 * Optionally this can sit at the top of the page and include a 'learn more' scroll button
 * If doing so, make sure you pass the "sitsBelowMenu" prop as true.
 */

const StyledImageBanner = ({
  backgroundImage,
  styledCopy,
  descriptiveCopy,
  scrollCopy,
  sitsBelowMenu,
}) => (
  <S.StyledImageBanner makeSpaceForHeader={sitsBelowMenu}>
    <S.StyledText markdown={styledCopy} />

    <S.Inner>
      {descriptiveCopy && (
        <S.DescriptiveCopy>
          <ReactMarkdown>{descriptiveCopy}</ReactMarkdown>
        </S.DescriptiveCopy>
      )}

      {sitsBelowMenu && (
        <S.ScrollMore type="button">
          {scrollCopy} <ArrowDown />
        </S.ScrollMore>
      )}
    </S.Inner>

    <S.BG>
      {(sitsBelowMenu || descriptiveCopy) && <S.Skrim />}
      <Image src={backgroundImage} alt="" />
    </S.BG>
  </S.StyledImageBanner>
);

StyledImageBanner.propTypes = {
  /** A URL to an image */
  backgroundImage: PropTypes.string.isRequired,
  /** A markdown string of copy, displays as a big block of styled copy */
  styledCopy: PropTypes.string.isRequired,
  /** A simple string of copy — it accepts markdown but should only really be used for linebreaks. */
  descriptiveCopy: PropTypes.string,
  /** To indicate to the user they can scroll down; "learn more", "read more", etc. */
  scrollCopy: PropTypes.string,
  /** If set to true, you "learn more" scroll button is accessible and it adds some padding to the top */
  sitsBelowMenu: PropTypes.bool,
};

StyledImageBanner.defaultProps = {
  descriptiveCopy: null,
  scrollCopy: "Learn more",
  sitsBelowMenu: false,
};

export default StyledImageBanner;
