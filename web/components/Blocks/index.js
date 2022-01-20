/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

import CopyBlock from "./CopyBlock";
import GriddedList from "./GriddedList";
import StyledImageBanner from "./StyledImageBanner";
import SectionMarker from "./SectionMarker";
import ImageBlock from "./ImageBlock";
import ScrollingGallery from "./ScrollingGallery";
import BoltBlock from "./BoltBlock";
import StyledBanner from "./StyledBanner";
import LogoMatrix from "./LogoMatrix";
import MarqueeBanner from "./MarqueeBanner";
import CardsGallery from "./CardsGallery";
import PrevNext from "./PrevNext";
import { IndexPageCards } from "./IndexPageCards/IndexPageCards";
import { MediaGallery } from "./MediaGallery/MediaGallery";
import { PortraitMediaGallery } from "./PortraitMediaGallery/PortraitMediaGallery";

// ---

const BlockBuilder = ({ blocks }) => {
  if (!blocks) return null;

  // eslint-disable-next-line no-console
  // console.log("BLOCKS:\n", blocks);

  const COMPONENTS = {
    bodyCopy: CopyBlock,
    griddedList: GriddedList,
    styledImageBanner: StyledImageBanner,
    styledBanner: StyledBanner,
    sectionMarker: SectionMarker,
    imageBlock: ImageBlock,
    scrollingGallery: ScrollingGallery,
    bolt: BoltBlock,
    logoMatrix: LogoMatrix,
    statement: MarqueeBanner,
    cardsGallery: CardsGallery,
    prevNext: PrevNext,
    indexPageCards: IndexPageCards,
    mediaGallery: MediaGallery,
    portraitMediaGallery: PortraitMediaGallery,
  };

  return (
    <>
      {blocks.map((block) => {
        if (typeof COMPONENTS[block._type] !== "undefined") {
          return React.createElement(COMPONENTS[block._type], {
            key: `${block._type}-${block._key}`,
            block,
          });
        }

        return React.createElement(
          () => (
            <div>
              The component{" "}
              <pre
                style={{
                  backgroundColor: "var(--red)",
                  color: "var(--white)",
                  display: "inline",
                }}
              >
                {block._type}
              </pre>{" "}
              has not been created yet.
            </div>
          ),
          { key: `${block._type}-${block._key}` }
        );
      })}
    </>
  );
};

BlockBuilder.propTypes = {
  blocks: PropTypes.array,
};

BlockBuilder.defaultProps = {
  blocks: null,
};

export default BlockBuilder;
