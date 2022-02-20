import styled from "styled-components";

export const Cards = styled.section`
  padding: 1.6rem 0;

  .container {
    --min: 32rem;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  }
`;
