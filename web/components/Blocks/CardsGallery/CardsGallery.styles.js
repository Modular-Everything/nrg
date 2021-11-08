import styled from "styled-components";
import CoreContainer from "../../Core/Container";

// ---

export const CardsGallery = styled.section`
  .swiper-container {
    height: 100%;
    overflow: visible;
    cursor: grab;
  }

  .swiper-wrapper {
    margin-bottom: calc(var(--gutter) * 2);

    @media (min-width: 768px) {
      margin-bottom: calc(var(--gutter) * 3);
    }
  }

  .swiper-scrollbar {
    bottom: 0;
    width: 100%;
    left: 0;
    height: 0.1rem;
    background-color: #adadad;

    .swiper-scrollbar-drag {
      background-color: var(--black);
      height: 0.3rem;
      top: -0.1rem;
    }
  }

  .img {
    display: flex;
    border-radius: var(--rounded);
    overflow: hidden;
    margin-bottom: var(--gutter);
    aspect-ratio: 3/4;
    position: relative;
  }

  .copy {
    color: var(--black);

    h5 {
      font-size: 2.2rem;
      line-height: 2.5rem;
      font-weight: bold;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
  }
`;

export const Container = styled(CoreContainer)`
  overflow-x: hidden;

  @media (min-width: 52rem) {
    overflow-x: visible;
  }
`;
