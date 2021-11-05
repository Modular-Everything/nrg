import styled from "styled-components";
import CoreContainer from "../../Core/Container";

// ---

export const Container = styled(CoreContainer)`
  overflow-x: hidden;

  @media (min-width: 52rem) {
    overflow-x: visible;
  }
`;

export const ScrollingGallery = styled.section`
  cursor: grab;

  &.standard {
    height: 32rem;

    .swiper-slide,
    .portrait,
    .landscape {
      width: 100%;
    }

    @media (min-width: 52rem) {
      .swiper-slide {
        width: auto;
      }

      .portrait {
        width: 24rem;
      }

      .landscape {
        width: 52rem;
      }
    }
  }

  &.tall {
    height: 60rem;

    .swiper-slide,
    .portrait,
    .landscape {
      width: 100%;
    }

    .landscape .caption {
      font-size: clamp(2.4rem, 10vw, 8.8rem);
    }

    @media (min-width: 42rem) {
      .swiper-slide {
        width: auto;
      }

      .portrait {
        width: 42rem;
      }

      .landscape {
        width: 88rem;
      }
    }
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-container {
    height: 100%;
    overflow: visible;
  }

  .caption {
    display: flex;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: calc(100% - (var(--gutter) * 4));
    height: calc(100% - (var(--gutter) * 16));
    padding: calc(var(--gutter) * 8) calc(var(--gutter) * 2);
    color: var(--white);
    font-family: var(--avenue);
    font-size: clamp(2.4rem, 6vw, 4.8rem);
    line-height: 1;
    text-align: center;
    text-transform: uppercase;

    h5 {
      text-shadow: 0 0 28px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Slide = styled.div`
  height: 100%;

  .index {
    display: flex;
    align-items: center;
    height: 1.6rem;
    margin-bottom: 0.8rem;
    color: var(--red);
    font-size: 1.1rem;
    font-weight: bold;
  }

  a:hover img {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 2.4rem); /* .index height + margin */
  overflow: hidden;
  border-radius: var(--rounded);
  box-shadow: var(--shadow);

  .background {
    width: 100%;
    height: 100%;
  }

  img {
    transition: 250ms ease transform;
  }
`;
