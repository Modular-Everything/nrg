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
