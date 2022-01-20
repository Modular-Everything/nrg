import styled from "styled-components";

export const PortraitMediaGallery = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gutter);
  margin: 0 5.6rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  article {
    position: relative;
    overflow: hidden;
    border-radius: 0.8rem;
    aspect-ratio: 3/4;

    .content {
      height: 100%;
      width: 100%;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
