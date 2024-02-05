import styled from "styled-components";

export const Vimeo = styled.div`
  &.contained {
    border-radius: 0.8rem;
    overflow: hidden;
    box-shadow: var(--drop);

    iframe {
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
    }
  }

  &.full {
    background: var(--nrg-black);

    iframe {
      pointer-events: none;
      aspect-ratio: 16/9;
      width: 100%;
    }
  }
`;
