import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const breakpoints = [375, 640, 768, 1024, 1080];

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

const Clamp = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 1080px) {
    width: 75%;
  }
`;

const Container = ({ children, className, clamp }) => (
  <Contained className={className}>
    {clamp ? <Clamp>{children}</Clamp> : <>{children}</>}
  </Contained>
);

export default Container;

//

Container.defaultProps = {
  className: null,
  clamp: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clamp: PropTypes.bool,
};
