import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const breakpoints = [375, 640, 768, 1024, 1200, 1280, 1440];

const Contained = styled.div`
  position: relative;
  width: calc(100% - calc(var(--gutter) * 2));
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--gutter);

  ${breakpoints.map(
    (bp) => `@media(min-width: ${bp}px) { max-width: ${bp}px; }`
  )}
`;

const Container = ({ children, className }) => (
  <Contained className={className}>{children}</Contained>
);

export default Container;

//

Container.defaultProps = {
  className: null,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
