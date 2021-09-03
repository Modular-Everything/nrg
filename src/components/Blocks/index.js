import React from "react";
import PropTypes from "prop-types";

import CopyBlock from "./CopyBlock";
import GriddedList from "./GriddedList";

// ---

const BlockBuilder = ({ blocks }) => {
  if (!blocks) return null;

  // eslint-disable-next-line no-console
  console.log("ALL BLOCKS:\n", blocks);

  const COMPONENTS = {
    "blocks.column-copy": CopyBlock,
    "blocks.gridded-list": GriddedList,
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
          The component {block.strapi_component} has not been created yet.
        </div>
      ),
      { key: `${block.strapi_component}-${block.id}` }
    );
  });
};

BlockBuilder.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default BlockBuilder;
