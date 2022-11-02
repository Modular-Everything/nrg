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
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background: var(--nrg-black);

    iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 100vh;
      transform: translate(-50%, -50%);

      @media (min-aspect-ratio: 16/9) {
        /* height = 100 * (9 / 16) = 56.25 */
        height: 56.25vw;
      }

      @media (max-aspect-ratio: 16/9) {
        /* width = 100 / (9 / 16) = 177.777777 */
        width: 177.78vh;
      }
    }
  }
`;
