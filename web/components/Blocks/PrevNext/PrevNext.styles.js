import styled from "styled-components";
import OutlineTextElement from "../../Elements/OutlineText";
import NoiseElement from "../../Elements/Noise";

// ---

export const PrevNext = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .prevNext {
    overflow: hidden;
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 7rem var(--gutter);
    text-decoration: none;
    opacity: 1;
    transition: 250ms ease opacity;

    @media (min-width: 768px) {
      padding: 14rem var(--gutter);
    }

    h4,
    h3,
    .label {
      position: relative;
      z-index: 150;
    }

    h4 {
      margin-bottom: var(--gutter);
      font-family: var(--grotesque);
      font-size: 1.6rem;
      line-height: 2.4rem;
      text-transform: uppercase;
    }

    h3 {
      font-size: 2.6rem;
      line-height: 3.2rem;
    }

    .label {
      margin-top: var(--gutter);
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      line-height: 2.4rem;

      svg {
        margin: 0 0 0.4rem 0.8rem;
        transition: 250ms ease transform;
      }
    }

    &:hover svg {
      transform: translateX(0.4rem);
    }
  }

  .prev {
    background-color: var(--red);
    color: var(--white);
  }

  .next {
    background-color: var(--lt-grey);
    color: var(--black);
  }
`;

export const OutlineText = styled(OutlineTextElement)`
  position: absolute;
  top: -50%;
  left: -25%;
  z-index: 150;
  width: 150%;
  -webkit-text-stroke: 1px var(--white);
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Noise = styled(NoiseElement)`
  opacity: 0.15;
`;
