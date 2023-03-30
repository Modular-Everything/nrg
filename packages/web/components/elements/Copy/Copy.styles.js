import styled from "styled-components";

export const Copy = styled.div`
  h2 {
    margin: 0 0 1rem 0;
    padding: 0;
  }

  h2,
  h3 {
    font-family: var(--grotesque);
    font-size: 2.2rem;
    line-height: 2.4rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
  }

  p {
    margin: 0 0 1.6rem 0;
    font-family: var(--simplonNorm);
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    line-height: clamp(2rem, 4vw, 2.4rem);
    max-width: 42.6rem;

    &:last-of-type {
      margin: 0;
    }

    & + h2,
    & + h3 {
      margin-top: 4rem;
    }
  }
`;
