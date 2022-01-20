import styled from "styled-components";

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
    padding: 7rem var(--gutter);
    text-decoration: none;
    opacity: 1;
    transition: 250ms ease opacity;
    color: var(--white);

    &:hover .image {
      transform: scale(1.05);
    }

    @media (min-width: 768px) {
      padding: 22rem var(--gutter) 4.8rem var(--gutter);
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      z-index: 10;
      position: relative;
    }

    .image {
      transition: 250ms ease transform;
    }

    .skrim,
    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .skrim {
      z-index: 5;
      background-image: linear-gradient(
        1.02deg,
        rgba(0, 0, 0, 0.8) 2.54%,
        rgba(0, 0, 0, 0) 99.12%
      );
    }

    .image {
      z-index: 0;
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
      color: var(--red);

      svg {
        margin: 0 0 0.4rem 0.8rem;
        transition: 250ms ease transform;
      }
    }

    &:hover svg {
      transform: translateX(0.4rem);
    }
  }
`;
