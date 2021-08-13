import React from 'react';
import PropTypes from 'prop-types';

import CopyBlock from './CopyBlock';

// ---

const BlockBuilder = ({ blocks }) => {
  if (!blocks) return null;

  const COMPONENTS = {
    'blocks.column-copy': CopyBlock,
  };

  return blocks.map((block) => {
    if (typeof COMPONENTS[block.strapi_component] !== 'undefined') {
      return React.createElement(COMPONENTS[block.strapi_component], {
        key: block.id,
        block,
      });
    }

    return React.createElement(
      () => (
        <div>
          The component {block.strapi_component} has not been created yet.
        </div>
      ),
      { key: block.id }
    );
  });
};

BlockBuilder.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default BlockBuilder;
