import styled from "styled-components";

export const ImageTiles = styled.section`
  padding: 2.4rem 0;

  .container {
    --min: 28ch;
    --gap: 1.4rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);

    @media (min-width: 768px) {
      --min: 32ch;
    }

    & > * {
      flex: 1 1 var(--min);
      display: flex;

      .tile__image span {
        border-radius: 0.8rem;
        overflow: hidden;
        box-shadow: var(--drop);
      }
    }
  }

  .tile__meta {
    margin-bottom: 1.6rem;

    @media (min-width: 673px) {
      margin-bottom: 0;
    }

    h2,
    h3 {
      margin: 0 0 1rem 0;
      padding: 0;
    }

    h2 {
      font-size: 2rem;
      line-height: 3.2rem;
      font-weight: 500;
    }

    h3 {
      font-family: var(--grotesque);
      font-size: 2.2rem;
      line-height: 2.4rem;
      margin-top: 0.8rem;
      text-transform: uppercase;
    }

    p {
      margin: 0 0 1.6rem 0;
      font-family: var(--simplonNorm);
      font-size: clamp(1.4rem, 3vw, 1.6rem);
      line-height: clamp(2rem, 4vw, 2.4rem);
      max-width: 42.6rem;

      &:last-of-type {
        margin: 0;
      }

      & + h2,
      & + h3 {
        margin-top: 4rem;
      }
    }
  }

  a {
    .tile__image {
      span {
        transition: 250ms var(--ease-in-out) box-shadow;
      }

      img {
        transition: 250ms var(--ease-in-out) transform;
      }
    }

    &:hover {
      .arrow {
        transform: translateX(0.8rem);
      }

      .tile__image {
        span {
          box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.2);
        }

        img {
          transform: scale(105%);
        }
      }
    }
  }
`;
