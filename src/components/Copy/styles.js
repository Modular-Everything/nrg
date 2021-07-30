import styled from 'styled-components';

//

export const Copy = styled.section`
  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

//

export const Title = styled.h2`
  margin-bottom: calc(var(--gutter) * 2);
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3.2rem;
`;

//

export const SingleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--gutter) * 1.5);
`;

export const MultiColumn = styled.div`
  columns: ${({ columns }) => columns};
  column-gap: calc(var(--gutter) * 1.5);
`;
