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

// ---

const BlockBuilder = ({ blocks }) => {
  if (!blocks) return null;

  // eslint-disable-next-line no-console
  console.log("BLOCKS:\n", blocks);

  const COMPONENTS = {
    "blocks.gridded-list": GriddedList,
    "blocks.body-copy": CopyBlock,
    "blocks.styled-image-banner": StyledImageBanner,
    "blocks.section-marker": SectionMarker,
    "blocks.image-block": ImageBlock,
    "blocks.scrolling-gallery": ScrollingGallery,
    "blocks.bolt": BoltBlock,
  };

  return (
    <>
      {blocks.map((block) => {
        if (typeof COMPONENTS[block.__component] !== "undefined") {
          return React.createElement(COMPONENTS[block.__component], {
            key: `${block.__component}-${block.id}`,
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
                {block.__component}
              </pre>{" "}
              has not been created yet.
            </div>
          ),
          { key: `${block.__component}-${block.id}` }
        );
      })}
    </>
  );
};

BlockBuilder.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default BlockBuilder;
