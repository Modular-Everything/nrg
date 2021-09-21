import styled from "styled-components";

// ---

export const ScrollingGallery = styled.section`
  cursor: grab;

  .swiper {
    overflow: visible;
  }
`;

export const Slide = styled.div`
  .index {
    margin-bottom: calc(var(--gutter) / 2);
    color: var(--red);
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const GalleryImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--rounded);
  box-shadow: var(--shadow);

  .caption {
    display: flex;
    position: relative;
    z-index: 10;
    align-items: center;
    justify-content: center;
    width: calc(100% - (var(--gutter) * 4));
    height: calc(100% - (var(--gutter) * 16));
    padding: calc(var(--gutter) * 8) calc(var(--gutter) * 2);
    color: var(--white);
    font-family: var(--avenue);
    font-size: clamp(2.4rem, 6vw, 4.8rem);
    text-align: center;
    text-transform: uppercase;
  }

  .background {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
