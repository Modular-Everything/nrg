import styled from "styled-components";

// ---

export const Title = styled.h2`
  font-family: var(--avenue);
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.1ch;
  line-height: 4rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 5.6rem;
    line-height: 5.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 7rem;
    line-height: 7rem;
  }
`;
