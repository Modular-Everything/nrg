import styled from "styled-components";

export const BodyCopy = styled.section`
  padding: 8rem 0;

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

  p {
    margin: 0 0 1.6rem 0;
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    line-height: clamp(2rem, 4vw, 2.4rem);

    &:last-of-type {
      margin: 0;
    }

    & + h2,
    & + h3 {
      margin-top: 4rem;
    }
  }
`;
