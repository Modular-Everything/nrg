import styled from 'styled-components';

//

export const BodyCopy = styled.section`
  border: 1px solid lime;
`;

//

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3.2rem;
`;

//

export const SingleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gutter);
`;

export const MultiColumn = styled.div`
  columns: ${({ columns }) => columns};
  column-gap: var(--gutter);
`;
