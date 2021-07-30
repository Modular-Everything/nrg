import styled from 'styled-components';

export const CopyWithImage = styled.div`
  display: grid;
  grid-gap: var(--column);
  grid-template-columns: 1fr 2fr;

  img {
    width: 100%;
    border-radius: var(--rounded);
    box-shadow: var(--shadow);
  }

  p {
    max-width: 42.6rem;
  }
`;
