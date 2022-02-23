import styled from "styled-components";

export const ImageTiles = styled.section`
  padding: 2.4rem 0;

  .container {
    --min: 28ch;
    --gap: 1.4rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);

    @media (min-width: 768px) {
      --min: 32ch;
    }

    & > * {
      flex: 1 1 var(--min);
      position: relative;
      aspect-ratio: 512/324;
      border-radius: 0.6rem;
      overflow: hidden;
      box-shadow: var(--drop);
    }
  }
`;
