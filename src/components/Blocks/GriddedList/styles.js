import styled from 'styled-components';
import Container from '../../Container';

//

export const Wrapper = styled.div`
  background-color: var(--black);
`;

export const GridContainer = styled(Container)`
  --spacing: var(--gutter);
  padding: 0 0 var(--spacing) 0;

  @media (min-width: 640px) {
    padding: var(--spacing) 0;
    --spacing: calc(var(--gutter) * 3);
  }

  @media (min-width: 1080px) {
    --spacing: calc(var(--gutter) * 6);
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: var(--spacing);
  color: var(--white);
`;

export const Grid = styled.div`
  --min: 20ch;

  display: grid;
  grid-gap: calc(var(--gutter) * 1.5);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
`;

export const Number = styled.p`
  margin-bottom: 0;
  color: var(--grey);
  font-family: var(--grotesque);
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2.4rem;

  @media (min-width: 640px) {
    margin-bottom: var(--gutter);
    font-size: 1.8rem;
  }
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
