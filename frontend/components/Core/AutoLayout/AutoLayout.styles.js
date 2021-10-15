import styled from "styled-components";

// ---

export const AutoLayout = styled.section`
  display: grid;
  grid-template-areas: "top" "blocks" "bottom";

  .top {
    max-width: 100vw;
    min-height: var(--header);
  }

  .blocks {
    display: grid;
    grid-area: blocks;
    grid-gap: calc(var(--gutter) * 4);
    margin: calc(var(--gutter) * 4) 0;
  }
`;
