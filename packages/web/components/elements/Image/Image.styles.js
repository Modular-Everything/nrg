import styled from "styled-components";

export const Image = styled.div`
  /* position: relative; */

  .apply-saturation,
  .apply-skrim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .apply-saturation {
    z-index: 10;
    background-color: #000;
    mix-blend-mode: saturation;
  }

  .apply-skrim {
    z-index: 20;
    background-color: var(--uefa-black);
    opacity: 0.9;
  }

  & > span {
    z-index: 0;
  }

  .image__caption {
    font-family: var(--simplonNorm);
    font-size: 1.2rem;
    line-height: 1.6rem;
    display: block;
    margin-bottom: 0.8rem;
    color: var(--nrg-lt-grey);
  }
`;
