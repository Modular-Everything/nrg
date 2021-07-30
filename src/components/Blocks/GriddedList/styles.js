import styled from 'styled-components';

//

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  color: var(--white);

  @media (min-width: 640px) {
    padding: 8rem 0;
  }

  @media (min-width: 1080px) {
    padding: 16rem 0;
  }
`;

export const Grid = styled.div`
  --min: 20ch;

  display: grid;
  grid-gap: calc(var(--gutter) * 1.5);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
`;

export const Number = styled.p`
  margin-bottom: var(--gutter);
  color: var(--grey);
  font-family: var(--grotesque);
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.4rem;
`;

export const Copy = styled.p`
  color: var(--white);
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

export const Item = styled.article`
  padding: calc(var(--gutter) * 1.5) 0;
  border-top: 1px solid var(--grey);
`;
