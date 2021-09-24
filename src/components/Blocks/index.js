import React from "react";
import PropTypes from "prop-types";

import CopyBlock from "./CopyBlock";
import GriddedList from "./GriddedList";
import StyledImageBanner from "./StyledImageBanner";

// ---

const BlockBuilder = ({ blocks }) => {
  if (!blocks) return null;

  // eslint-disable-next-line no-console
  console.log("ALL BLOCKS:\n", blocks);

  const COMPONENTS = {
    "blocks.gridded-list": GriddedList,
    "blocks.body-copy": CopyBlock,
    "blocks.styled-image-banner": StyledImageBanner,
  };

  return blocks.map((block) => {
    if (typeof COMPONENTS[block.strapi_component] !== "undefined") {
      return React.createElement(COMPONENTS[block.strapi_component], {
        key: `${block.strapi_component}-${block.id}`,
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
            {block.strapi_component}
          </pre>{" "}
          has not been created yet.
        </div>
      ),
      { key: `${block.strapi_component}-${block.id}` }
    );
  });
};

BlockBuilder.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blocks: PropTypes.array.isRequired,
};

export default BlockBuilder;
