import styled from "styled-components";

export const HeroCarousel = styled.section`
  .swiper {
    .prev,
    .next {
      top: 50%;
      transform: translateY(-50%);
    }

    .prev {
      left: 2.4rem;
    }

    .next {
      right: 2.4rem;
    }
  }

  .swiper-slide {
    height: 50vh;
    position: relative;

    @media (min-width: 768px) {
      height: 75vh;
    }

    img {
      z-index: 0;
      position: relative;
    }
  }
`;

export const Copy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background: linear-gradient(black, 25%, rgba(0, 0, 0, 0));
  color: var(--white);
  padding: 5%;

  .copy {
    width: 90%;
    max-width: 42rem;
  }

  h1,
  h2 {
    margin: 0 0 0.4rem;
    font-family: var(--grotesque);
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
