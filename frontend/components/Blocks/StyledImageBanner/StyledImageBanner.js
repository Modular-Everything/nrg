import React from "react";
import PropTypes from "prop-types";
import { BiDownArrowAlt as ArrowDown } from "react-icons/bi";
import ReactMarkdown from "react-markdown";

import * as S from "./StyledImageBanner.styles";
import Image from "../../Elements/Image";

// ---

/**
 * A banner with an image and some cool looking text
 * Optionally this can sit at the top of the page and include a 'learn more' scroll button
 * If doing so, make sure you pass the "sits_below_menu" prop as true.
 * The banner image can be a static image URL (string) or a responsive image (object).
 */

const StyledImageBanner = ({ block }) => {
  const {
    descriptive_copy,
    scroll_copy,
    sits_below_menu,
    styled_copy,
    background_image,
  } = block;

  return (
    <S.StyledImageBanner makeSpaceForHeader={sits_below_menu}>
      <S.StyledText markdown={styled_copy} />

      <S.Inner>
        {descriptive_copy && (
          <S.DescriptiveCopy>
            <ReactMarkdown>{descriptive_copy}</ReactMarkdown>
          </S.DescriptiveCopy>
        )}

        {sits_below_menu && (
          <S.ScrollMore type="button">
            {scroll_copy || "Learn more"} <ArrowDown />
          </S.ScrollMore>
        )}
      </S.Inner>

      <S.BG>
        {(sits_below_menu || descriptive_copy) && <S.Skrim />}
        <Image image={background_image} layout="fill" />
      </S.BG>
    </S.StyledImageBanner>
  );
};

StyledImageBanner.propTypes = {
  block: PropTypes.shape({
    /** An object containing a direct URL to an image or a srcset */
    background_image: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
    /** A markdown string of copy, displays as a big block of styled copy */
    styled_copy: PropTypes.string.isRequired,
    /** A simple string of copy — it accepts markdown but should only really be used for linebreaks. */
    descriptive_copy: PropTypes.string,
    /** To indicate to the user they can scroll down; "learn more", "read more", etc. */
    scroll_copy: PropTypes.string,
    /** If set to true, you "learn more" scroll button is accessible and it adds some padding to the top */
    sits_below_menu: PropTypes.bool,
  }),
};

StyledImageBanner.defaultProps = {
  block: {
    background_image: {
      url: null,
    },
    descriptive_copy: null,
    scroll_copy: null,
    sits_below_menu: false,
  },
};

export default StyledImageBanner;
