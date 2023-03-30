import styled from "styled-components";

export const HoverCTA = styled.article`
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: var(--drop);
  position: relative;

  a:hover {
    .hoverCopy__copy {
      opacity: 1;
    }
  }

  .hoverCopy__copy {
    transition: 250ms linear opacity;
    opacity: 0;
    background: rgba(25, 25, 25, 0.9);
    color: var(--nrg-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    padding: 3.2rem;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;

    h1 {
      font-family: var(--simplon);
      font-style: normal;
      font-weight: 600;
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      line-height: clamp(2rem, 3vw, 3rem);
      margin-bottom: 0;
    }

    h2 {
      font-family: var(--grotesque);
      font-size: 1.6rem;
      line-height: 2rem;
      text-transform: uppercase;
      margin-top: 0;
    }

    p {
      margin-top: 1rem;
    }
  }

  .linkToRef {
    margin-top: 2.4rem;
  }
`;
