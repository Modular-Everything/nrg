import styled from "styled-components";

export const Vimeo = styled.div`
  --video-width: 1920;
  --video-height: 1080;

  iframe {
    width: 100%;
    height: 100%;
    aspect-ratio: var(--video-width) / var(--video-height);
  }

  &.contained {
    border-radius: 0.8rem;
    overflow: hidden;
    box-shadow: var(--drop);
  }

  &.full {
    overflow: hidden;
    max-width: 100%;
    background: var(--nrg-black);

    iframe {
      background: var(--nrg-black);
      position: absolute;
      top: 0;
      pointer-events: none;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
