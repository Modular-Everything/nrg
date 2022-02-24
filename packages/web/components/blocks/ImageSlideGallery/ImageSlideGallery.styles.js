import styled from "styled-components";

export const ImageSlideGallery = styled.section`
  padding: 2.4rem 0;
  overflow: hidden;
  position: relative;

  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
  }

  .imageSlide__image {
    position: relative;

    span {
      border-radius: 0.6rem;
      box-shadow: var(--drop);
    }
  }

  .imageSlide__meta {
    margin-top: 1.6rem;
  }
`;

export const NavigationArrow = styled.button`
  display: none;

  @media (min-width: 640px) {
    border: 0;
    background: var(--white);
    box-shadow: var(--drop);
    color: var(--nrg-red);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100rem;
    width: 3.6rem;
    height: 3.6rem;
    position: absolute;
    font-family: var(--simplon);
    font-size: 2rem;
    bottom: 40%;
    left: 0.8rem;
    z-index: 50;

    &.next {
      left: unset;
      right: 0.8rem;
    }

    &:disabled {
      color: var(--nrg-lt-grey);
    }
  }
`;
