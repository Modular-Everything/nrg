import styled from "styled-components";

export const StandardCard = styled.article`
  .imageElement {
    aspect-ratio: 512 / 320;
    position: relative;
    margin-bottom: 2.4rem;

    span {
      border-radius: 0.8rem;
      overflow: hidden;
      box-shadow: var(--drop);
    }
  }

  .subtitle {
    font-family: var(--simplonNorm);
    margin: 0 0 1.2rem;
    height: 1.3rem;
    font-size: 1.1rem;
    color: var(--nrg-red);
  }

  .copy {
    margin-bottom: 0.2rem;
  }

  a:hover .arrow {
    transform: translateX(0.8rem);
  }
`;
