import styled from "styled-components";

export const Vimeo = styled.div`
  --video-width: 1920;
  --video-height: 1080;

  overflow: hidden;
  max-width: 100%;
  background: var(--nrg-black);

  iframe {
    aspect-ratio: var(--video-width) / var(--video-height);
    background: var(--nrg-black);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
