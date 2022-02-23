import styled from "styled-components";

export const BodyCopy = styled.section`
  padding: 2.4rem 0;
  background-color: ${({ theme }) => theme.background};

  .container {
    @media (min-width: 640px) {
      columns: ${({ columns }) => columns};
      column-gap: 2.4rem;
    }
  }

  h2,
  h3 {
    column-span: all;
    margin: 0 0 4rem 0;
    padding: 0;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  h3 {
    font-family: var(--grotesque);
    font-size: 2.2rem;
    line-height: 2.4rem;
    text-transform: uppercase;
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

    & + h2,
    & + h3 {
      margin-top: 4rem;
    }
  }

  .linkToRef {
    margin-top: 1.6rem;
    padding: 0.4rem 0.8rem 0.4rem 0;
    color: ${({ theme }) => theme.cta};
  }

  a:hover .arrow {
    transform: translateX(0.8rem);
  }
`;
