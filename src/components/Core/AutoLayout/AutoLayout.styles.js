import styled from "styled-components";

// ---

export const AutoLayout = styled.section`
  display: grid;
  grid-template-areas: "top" "blocks" "bottom";

  .blocks {
    display: grid;
    grid-area: blocks;
    grid-gap: calc(var(--gutter) * 4);
    margin: calc(var(--gutter) * 2) 0;
  }
`;
