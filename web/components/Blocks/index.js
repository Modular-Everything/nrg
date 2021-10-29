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

// ---

const BlockBuilder = ({ blocks }) => {
  if (!blocks) return null;

  // eslint-disable-next-line no-console
  console.log("BLOCKS:\n", blocks);

  const COMPONENTS = {
    "bodyCopy": CopyBlock,
    "blocks.gridded-list": GriddedList,
    "blocks.styled-image-banner": StyledImageBanner,
    "blocks.styled-banner": StyledBanner,
    "blocks.section-marker": SectionMarker,
    "blocks.image-block": ImageBlock,
    "blocks.scrolling-gallery": ScrollingGallery,
    "blocks.bolt": BoltBlock,
    "blocks.logo-matrix": LogoMatrix,
  };

  return (
    <>
      {blocks.map((block) => {
        if (typeof COMPONENTS[block._type] !== "undefined") {
          return React.createElement(COMPONENTS[block._type], {
            key: `${block._type}-${block._key}`,
            block
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
  blocks: PropTypes.array.isRequired,
};

export default BlockBuilder;
