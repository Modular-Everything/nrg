import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { BiDownArrowAlt as ArrowDown } from "react-icons/bi";

import * as S from "./StyledImageBanner.styles";
import Image from "../../Elements/Image";
import FadeIn from "../../Animations/FadeIn";

// ---

/**
 * A banner with an image and some cool looking text
 * Optionally this can sit at the top of the page and include a 'learn more' scroll button
 * If doing so, make sure you pass the "sitsBelowMenu" prop as true.
 * The banner image can be a static image URL (string) or a responsive image (object).
 */

const StyledImageBanner = ({ block, animate }) => {
  const {
    descriptiveCopy,
    scrollLabel,
    sitsBelowMenu,
    styledCopy,
    backgroundImage,
  } = block;

  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    setBannerHeight(bannerRef.current.clientHeight);
  }, []);

  function handleReadMore() {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "resize",
        setBannerHeight(bannerRef.current.clientHeight)
      );

      window.scroll({
        top: bannerHeight - 32,
        behavior: "smooth",
      });
    }
  }

  return (
    <S.StyledImageBanner makeSpaceForHeader={sitsBelowMenu} ref={bannerRef}>
      <FadeIn animate={animate}>
        <S.StyledText text={styledCopy} />

        <S.Inner>
          {descriptiveCopy && (
            <S.DescriptiveCopy>
              <p>{descriptiveCopy}</p>
            </S.DescriptiveCopy>
          )}

          {sitsBelowMenu && (
            <S.ScrollMore type="button" onClick={() => handleReadMore()}>
              {scrollLabel || "Learn more"} <ArrowDown />
            </S.ScrollMore>
          )}
        </S.Inner>

        <S.BG>
          {(sitsBelowMenu || descriptiveCopy) && <S.Skrim />}
          <Image image={backgroundImage} priority layout="fill" quality={100} />
        </S.BG>
      </FadeIn>
    </S.StyledImageBanner>
  );
};

StyledImageBanner.propTypes = {
  block: PropTypes.shape({
    /** An object containing a direct URL to an image or a srcset */
    backgroundImage: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
    /** A markdown string of copy, displays as a big block of styled copy */
    styledCopy: PropTypes.string.isRequired,
    /** A simple string of copy — it accepts markdown but should only really be used for linebreaks. */
    descriptiveCopy: PropTypes.string,
    /** To indicate to the user they can scroll down; "learn more", "read more", etc. */
    scrollLabel: PropTypes.string,
    /** If set to true, you "learn more" scroll button is accessible and it adds some padding to the top */
    sitsBelowMenu: PropTypes.bool,
  }),
  animate: PropTypes.bool,
};

StyledImageBanner.defaultProps = {
  block: {
    backgroundImage: {
      url: null,
    },
    descriptiveCopy: null,
    scrollLabel: null,
    sitsBelowMenu: false,
  },
  animate: true,
};

export default StyledImageBanner;
