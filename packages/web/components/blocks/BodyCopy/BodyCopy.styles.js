import styled from "styled-components";

export const BodyCopy = styled.section`
  padding: 2.4rem 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.copy};

  a {
    color: var(--nrg-red);
    transition: 250ms ease color;

    &:hover {
      color: var(--nrg-black);

      .arrow {
        transform: translateX(0.8rem);
        color: inherit;
      }
    }
  }

  h1,
  h2,
  h3,
  h4 {
    column-span: all;
    margin: 0 0 1.6rem 0;
    padding: 0;
    font-family: var(--grotesque);
    font-size: 2.4rem;
    line-height: 2.6rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.2rem;
    line-height: 2.4rem;
  }

  h3 {
    font-size: 1.9rem;
    line-height: 2.1rem;
  }

  h4 {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }

  p,
  ul,
  ol {
    margin: 0 0 1.6rem 0;
    font-family: var(--simplonNorm);
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    line-height: clamp(2rem, 4vw, 2.4rem);

    &:last-of-type {
      margin: 0;
    }

    & + h1,
    & + h2,
    & + h3,
    & + h4 {
      margin-top: 4rem;
    }
  }

  .linkToRef {
    margin-top: 1.6rem;
    padding: 0.4rem 0.8rem 0.4rem 0;
    color: ${({ theme }) => theme.cta};
  }
`;
