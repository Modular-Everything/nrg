import styled from "styled-components";

export const ProjectNavigation = styled.section`
  --min: 32rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  position: relative;
  height: 37.2rem;

  a {
    position: relative;

    .projectNav__image img {
      transition: 250ms var(--ease-in-out) transform;
    }

    &:hover {
      .projectNav__image img {
        transform: scale(105%);
      }
    }
  }

  .projectNav__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .projectNav__meta {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.4rem;
    color: var(--white);
    text-align: center;
    padding: 1.6rem;

    @media (min-width: 655px) {
      padding-bottom: 4.8rem;
      justify-content: flex-end;
    }

    h4,
    h5 {
      margin: 0;
      padding: 0;
    }

    h5 {
      font-family: var(--grotesque);
      font-size: 1.6rem;
      line-height: 2rem;
      text-transform: uppercase;
    }

    h4 {
      font-family: var(--simplon);
      font-style: normal;
      font-weight: 600;
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      line-height: clamp(2rem, 3vw, 3rem);
    }

    span {
      font-family: var(--simplon);
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.4rem;
      display: block;
      color: var(--nrg-red);
    }
  }
`;

export const Skrim = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 100%);
`;
