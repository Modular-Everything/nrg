import styled from "styled-components";

export const Card = styled.article`
  &.landscape {
    .card__image {
      aspect-ratio: 512/315;
    }
  }

  &.portrait {
    @media (min-width: 697px) {
      &:first-of-type {
        margin-left: 15%;
      }

      &:last-of-type {
        margin-right: 15%;
      }
    }

    .card__image {
      aspect-ratio: 424/600;
    }
  }

  .card__image {
    position: relative;
    overflow: hidden;
    border-radius: 0.8rem;
    box-shadow: var(--drop);
    transition: 250ms var(--ease-in-out) box-shadow;
    z-index: 0;
  }

  .card__meta {
    margin-top: 1.2rem;
    position: relative;
    z-index: 10;

    h4,
    h5 {
      margin: 0;
      padding: 0;
    }

    h5 {
      font-family: var(--grotesque);
      font-size: 1.6rem;
      line-height: 2rem;
      color: var(--nrg-lt-grey);
      text-transform: uppercase;
    }

    h4 {
      font-family: var(--simplon);
      font-style: normal;
      font-weight: normal;
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      line-height: clamp(2rem, 3vw, 3rem);
      margin-top: 0.4rem;
    }
  }

  a {
    .card__image img {
      transition: 250ms var(--ease-in-out) transform;
    }

    &:hover {
      .arrow {
        transform: translateX(0.8rem);
      }

      .card__image {
        box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.2);

        img {
          transform: scale(105%);
        }
      }
    }
  }
`;
