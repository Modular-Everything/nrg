import styled from "styled-components";

export const IndexPageCards = styled.section`
  --cardRatio: ${({ orientation }) =>
    orientation === "portrait" ? "3/4" : "3/2"};

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0
      ${({ orientation }) => (orientation === "portrait" ? "5.6rem" : "0")};
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      .media .content {
        transform: scale(1.05);
      }

      svg {
        transform: translateX(0.4rem);
      }
    }
  }

  article {
    overflow: hidden;

    .media {
      position: relative;
      aspect-ratio: var(--cardRatio);
      border-radius: 0.8rem;
      overflow: hidden;
      margin-bottom: var(--gutter);

      .content {
        transition: 250ms ease transform;
        transform: scale(1);
        height: 100%;
        width: 100%;
      }

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .meta {
      margin-bottom: var(--gutter);

      h4 {
        margin-bottom: var(--gutter);
        font-family: var(--grotesque);
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: uppercase;
        color: #b8b8b8;
        font-weight: normal;
      }
    }

    .label {
      display: flex;
      align-items: center;
      color: var(--red);
      font-size: 1.8rem;

      svg {
        margin: 0 0 0.4rem 0.8rem;
        transition: 250ms ease transform;
      }
    }
  }
`;
