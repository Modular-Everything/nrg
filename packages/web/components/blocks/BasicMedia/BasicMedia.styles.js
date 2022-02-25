import styled, { keyframes } from "styled-components";

const bob = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(20%)
  }
`;

export const BasicMedia = styled.div`
  position: relative;
  min-height: 69.8rem;
  display: flex;
  overflow: hidden;

  @supports (aspect-ratio: 1/1) {
    aspect-ratio: 1200/698;
    min-height: unset;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: relative;
    z-index: 10;
    width: 100%;

    &.headline,
    &.statementText,
    &.headlineAlt,
    &.bolt,
    &.text,
    &.read,
    &.statementread,
    &.statement {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &.statementText {
      justify-content: space-between;
    }

    &.headlineAlt {
      align-items: flex-start;
      justify-content: flex-start;
    }

    &.bolt {
      overflow: hidden;
      color: var(--white);

      svg {
        height: 100%;
      }

      .bolt--large {
        height: 100%;
      }

      .bolt--small {
        height: 100%;
        max-height: 24rem;
        padding: 0.8rem 0;
      }
    }

    &.headline,
    &.headlineAlt p {
      margin: 0;
      font-family: var(--simplonNorm);
      font-size: clamp(1.4rem, 3vw, 1.6rem);
    }

    &.headline {
      color: var(--white);
      background-color: rgba(0, 0, 0, 0.9);
      text-align: center;

      .copy {
        max-width: 56rem;
        padding: 0 1.6rem;
      }

      h1,
      h2 {
        margin: 0 0 1.6rem;
        font-family: var(--avenue);
        text-transform: uppercase;
        font-size: clamp(3.2rem, 7vw, 5.6rem);
        line-height: 1;
      }
    }

    &.headlineAlt {
      background: linear-gradient(black, 25%, rgba(0, 0, 0, 0));
      color: var(--white);
      padding: 5%;

      .copy {
        width: 90%;
        max-width: 42rem;
      }

      h1,
      h2 {
        margin: 0 0 0.4rem;
        font-family: var(--grotesque);
        font-size: 2.2rem;
        line-height: 2.4rem;
        text-transform: uppercase;
      }

      a:hover .arrow {
        transform: translateX(0.8rem);
      }
    }

    &.statementread,
    &.statement {
      z-index: initial;

      .marquee {
        --color: #fff;
        --cut: #000;
        --blend: screen;

        z-index: 50;
        mix-blend-mode: var(--blend);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        overflow: visible;
        gap: 1.6rem;

        p {
          margin: 0;
          color: var(--color);
          font-family: var(--avenue);
          font-size: clamp(7rem, 10vw, 11rem);
          letter-spacing: 0.05ch;
          line-height: 1.1;
          text-align: center;
          text-transform: uppercase;
          white-space: nowrap;
          margin-right: 3.2rem;
          transform: translateX(5%);

          &:nth-of-type(2) {
            transform: translateX(-5%);
          }
        }

        strong {
          --padding: 0.8rem;

          display: inline;
          align-items: center;
          justify-content: center;
          padding: 0 var(--padding);
          background-color: var(--color);
          border-left: 1px solid var(--color);
          border-right: 1px solid var(--color);
          box-decoration-break: clone;
          box-shadow: var(--padding) 0 0 var(--color),
            calc(var(--padding) * -1) 0 0 var(--color);
          color: var(--cut);
          font-weight: normal;
        }
      }
    }

    &.read {
      justify-content: flex-end;
    }

    &.statementread {
      background: linear-gradient(rgba(0, 0, 0, 0), 25%, black);
      justify-content: space-around;
      gap: 12rem;

      .marquee {
        margin-top: 12rem;
      }
    }
  }

  .readMore {
    background: transparent;
    border: 0;
    z-index: 10;
    color: var(--white);
    text-align: center;
    width: 100%;
    max-width: 56rem;
    padding: 0 1.6rem 2.4rem;
    cursor: pointer;

    &:hover {
      .label span {
        animation: ${bob} 250ms linear alternate infinite;
      }
    }

    & > p {
      margin: 0 0 3.2rem;
      font-family: var(--simplon);
      font-size: clamp(1.6rem, 3vw, 2rem);
      line-height: 1.3;
    }

    .label {
      display: flex;
      flex-direction: column;

      p {
        margin: 0 0 1.6rem 0;
        font-family: var(--simplonNorm);
        font-size: 1.4rem;
        letter-spacing: 0.03ch;
      }

      span {
        color: var(--nrg-red);
        font-size: 2.4rem;
        font-family: var(--simplon);
      }
    }
  }

  .imageElement {
    display: flex;
  }
`;
