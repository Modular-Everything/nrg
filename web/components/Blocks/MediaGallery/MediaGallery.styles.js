import styled from "styled-components";

export const MediaGallery = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gutter);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  article {
    position: relative;
    overflow: hidden;
    border-radius: 0.8rem;

    .content {
      height: 100%;
      width: 100%;
    }

    &.MediaGallery__full {
      aspect-ratio: 3/2;

      @media (min-width: 640px) {
        aspect-ratio: 8/5;
        grid-column: 1 / span 2;
      }
    }

    &.MediaGallery__landscape {
      aspect-ratio: 3/2;
    }

    &.MediaGallery__portrait {
      aspect-ratio: 3/4;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
