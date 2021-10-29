import styled from "styled-components";

// ---

export const Copy = styled.section`
  p {
    color: var(--black);
    font-size: 1.6rem;
    line-height: 2.4rem;

    @media (min-width: 1080px) {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }

    a {
      color: var(--black);
    }
  }
`;

//

export const Title = styled.h2`
  margin-bottom: calc(var(--gutter) * 2);
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.4rem;

  @media (min-width: 1080px) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

//

export const SingleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--gutter) * 1.5);
`;

export const MultiColumn = styled.div`
  columns: 1;
  column-gap: calc(var(--gutter) * 1.5);

  @media (min-width: 768px) {
    columns: ${({ columns }) => columns};
  }

  p {
    margin-bottom: calc(var(--gutter) * 1.5);

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
