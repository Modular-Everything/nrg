import styled from "styled-components";

export const HoverCopyCard = styled.article`
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: var(--drop);
  position: relative;

  a:hover {
    .hoverCopy__copy {
      opacity: 1;
    }

    .subtitle {
      @supports (-webkit-text-stroke: 1px black) {
        transition-delay: 50ms;
        -webkit-text-stroke: 1px var(--nrg-black);
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .hoverCopy__copy {
    transition: 250ms linear opacity;
    opacity: 0;
    background: rgba(25, 25, 25, 0.9);
    color: var(--nrg-white);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    padding: 3.2rem;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;

    h2,
    h3,
    h4 {
      color: var(--nrg-red);
    }
  }

  .subtitle {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    line-height: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    position: absolute;
    z-index: 5;
    font-size: 28rem;
    word-break: keep-all;
    text-transform: uppercase;
    font-family: var(--avenue);

    @supports (-webkit-text-stroke: 1px black) {
      transition: 250ms linear -webkit-text-stroke;
      -webkit-text-stroke: 1px var(--nrg-white);
      -webkit-text-fill-color: transparent;
    }
  }
`;
