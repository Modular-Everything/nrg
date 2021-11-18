import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { BiDownArrowAlt as ArrowDown } from "react-icons/bi";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import getVideoId from "get-video-id";

import * as S from "./StyledImageBanner.styles";
import Image from "../../Elements/Image";

// ---

/**
 * A banner with an image and some cool looking text
 * Optionally this can sit at the top of the page and include a 'learn more' scroll button
 * If doing so, make sure you pass the "sitsBelowMenu" prop as true.
 * The banner image can be a static image URL (string) or a responsive image (object).
 */

const StyledImageBanner = ({ block }) => {
  gsap.registerPlugin(ScrollTrigger);

  const {
    descriptiveCopy,
    scrollLabel,
    sitsBelowMenu,
    styledCopy,
    backgroundType,
    backgroundImage,
    backgroundVideo,
  } = block;

  console.log(getVideoId(backgroundVideo));

  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    setBannerHeight(bannerRef.current.clientHeight);

    gsap.from(bannerRef.current, {
      scrollTrigger: { trigger: bannerRef.current, start: "top 80%" },
      opacity: 0,
      stagger: 0.5,
    });
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
        {backgroundType === "image" && backgroundImage && (
          <Image image={backgroundImage} priority layout="fill" quality={100} />
        )}
        {backgroundType === "video" && backgroundVideo && (
          <div clasName="videowrap">
            <iframe
              src={`https://player.vimeo.com/video/${
                getVideoId(backgroundVideo).id
              }?h=0f405f633e&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963`}
              title="Vimeo"
              width="1920"
              height="1080"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </S.BG>
    </S.StyledImageBanner>
  );
};

StyledImageBanner.propTypes = {
  block: PropTypes.shape({
    /** A string containing a background type, controlling which media this component uses */
    backgroundType: PropTypes.string.isRequired,
    /** A string containing a background type, controlling which media this component uses */
    backgroundVideo: PropTypes.string,
    /** An object containing a direct URL to an image or a srcset */
    backgroundImage: PropTypes.shape({
      url: PropTypes.string,
    }),
    /** A markdown string of copy, displays as a big block of styled copy */
    styledCopy: PropTypes.string.isRequired,
    /** A simple string of copy — it accepts markdown but should only really be used for linebreaks. */
    descriptiveCopy: PropTypes.string,
    /** To indicate to the user they can scroll down; "learn more", "read more", etc. */
    scrollLabel: PropTypes.string,
    /** If set to true, you "learn more" scroll button is accessible and it adds some padding to the top */
    sitsBelowMenu: PropTypes.bool,
  }),
};

StyledImageBanner.defaultProps = {
  block: {
    backgroundVideo: null,
    backgroundImage: {
      url: null,
    },
    descriptiveCopy: null,
    scrollLabel: null,
    sitsBelowMenu: false,
  },
};

export default StyledImageBanner;
