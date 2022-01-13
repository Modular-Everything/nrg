import styled from "styled-components";
import Container from "../../Core/Container";

//

export const Wrapper = styled.div`
  &.wrapper__light {
    background-color: transparent;

    .number {
      color: var(--red);
      font-size: 1.2rem;
    }

    .title {
      color: var(--red);
      padding: var(--gutter) 0;

      @media (min-width: 640px) {
        padding: calc(var(--gutter) * 3) 0;
      }

      @media (min-width: 1080px) {
        padding: calc(var(--gutter) * 6) 0;
      }
    }

    .copy {
      color: var(--black);
    }
  }

  &.wrapper__dark {
    background-color: var(--black);

    .item {
      border-top: 1px solid var(--grey);
    }

    .number {
      font-size: 1.4rem;
      color: var(--grey);

      @media (min-width: 640px) {
        font-size: 1.8rem;
      }
    }

    .title {
      padding-bottom: var(--spacing);
      color: var(--white);
    }

    .copy {
      color: var(--white);
    }
  }
`;

export const GridContainer = styled(Container)`
  height: calc(100% - var(--spacing));
  padding: 0 0 var(--spacing) 0;

  @media (min-width: 640px) {
    height: calc(100% - (var(--spacing) * 2));
    padding: var(--spacing) 0;
  }

  &.grid__light {
    --spacing: 0;
  }

  &.grid__dark {
    --spacing: var(--gutter);

    @media (min-width: 640px) {
      --spacing: calc(var(--gutter) * 3);
    }

    @media (min-width: 1080px) {
      --spacing: calc(var(--gutter) * 6);
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Grid = styled.div`
  --min: 15ch;

  display: grid;
  grid-gap: calc(var(--gutter) * 1.5);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

  @media (min-width: 768px) {
    --min: 20ch;
  }
`;

export const Number = styled.p`
  margin-bottom: 0;
  font-family: var(--grotesque);
  font-weight: bold;
  line-height: 2.4rem;

  @media (min-width: 640px) {
    margin-bottom: var(--gutter);
  }
`;

export const Copy = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

export const Item = styled.article`
  padding: calc(var(--gutter) * 1.5) 0;
`;
