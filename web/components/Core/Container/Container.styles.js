import styled from "styled-components";

// ---

const breakpoints = [375, 640, 768, 1024, 1080];

export const Container = styled.div`
  position: relative;
  width: calc(100% - (var(--gutter) * 2));
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--gutter);
  overflow-x: hidden;

  ${breakpoints.map(
    (bp) => `@media(min-width: ${bp}px) { max-width: ${bp}px; }`
  )}
`;

export const Clamp = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 1080px) {
    width: 75%;
  }
`;
