import styled from "styled-components";

// ---

export const AutoLayout = styled.section`
  display: grid;
  grid-template-areas: "top" "blocks" "bottom";
  /* justify-content: center; */

  .blocks {
    display: grid;
    grid-area: blocks;
    grid-gap: calc(var(--gutter) * 2);
    margin: calc(var(--gutter) * 2) 0;
    position: relative;

    @media (min-width: 768px) {
      grid-gap: calc(var(--gutter) * 4);
      margin: calc(var(--gutter) * 4) 0;
    }
  }
`;
