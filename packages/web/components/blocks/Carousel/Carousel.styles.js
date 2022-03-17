import styled from "styled-components";

export const Carousel = styled.section`
  padding: 2.4rem 0;
  overflow: hidden;

  .swiper {
    overflow: visible;
  }

  .landscape,
  .portrait {
    width: 100%;

    .imageElement {
      aspect-ratio: 3/4;
    }
  }

  @media (min-width: 550px) {
    .landscape {
      width: 51.2rem;

      .imageElement {
        aspect-ratio: 512 / 320;
      }
    }

    .portrait {
      width: 24.7rem;

      .imageElement {
        aspect-ratio: 247 / 320;
      }
    }
  }
`;
