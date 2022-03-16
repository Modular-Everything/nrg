import styled from "styled-components";

export const MediaBodyCopy = styled.div`
  .container {
    display: grid;
    grid-gap: 2.4rem;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .mediaBody__copy {
    max-width: 42.6rem;

    h2,
    h3 {
      margin-bottom: 1rem;
    }
  }

  .mediaBody__media span {
    position: relative;
    border-radius: 0.6rem;
    overflow: hidden;
    box-shadow: var(--drop);
  }
`;
