import styled from 'styled-components';

export const CopyWithImage = styled.div`
  display: grid;
  grid-gap: calc(var(--column) * 2);
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-gap: var(--column);
    grid-template-columns: 1fr 2fr;
  }

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 2fr;
  }

  img {
    width: 100%;
    border-radius: var(--rounded);
    box-shadow: var(--shadow);
  }

  p {
    max-width: 42.6rem;
  }
`;
