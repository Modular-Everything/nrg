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
