import styled from "styled-components";

export const Vimeo = styled.div`
  --video--width: 1920;
  --video--height: 1080;

  position: relative;
  padding-bottom: calc(var(--video--height) / var(--video--width) * 100%);
  overflow: hidden;
  max-width: 100%;
  background: var(--nrg-black);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
