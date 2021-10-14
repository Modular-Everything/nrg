import styled from "styled-components";

// ---

export const ImageBlock = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  text-align: center;
`;

export const Background = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Copy = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  max-width: 41rem;
  color: var(--white);
  gap: calc(var(--gutter) * 1.5);
`;

export const Icon = styled.div`
  position: relative;
  z-index: 10;
  width: ${({ enlarged }) => (enlarged ? "100%" : "20%")};
  max-width: ${({ enlarged }) => (enlarged ? "unset" : "9.6rem")};
  height: ${({ enlarged }) => (enlarged ? "135vh" : "unset")};
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${({ outline }) => (outline ? "var(--white)" : "transparent")};
    color: ${({ outline }) => (!outline ? "var(--white)" : "transparent")};
  }
`;
