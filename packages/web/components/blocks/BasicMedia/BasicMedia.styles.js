import styled, { keyframes } from "styled-components";

const runner = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
`;

export const BasicMedia = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    &.headline,
    &.statementText,
    &.headlineAlt,
    &.bolt,
    &.text,
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

    &.statement {
      --color: #fff;
      --cut: #000;
      --blend: screen;

      mix-blend-mode: var(--blend);

      .marquee {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        overflow: hidden;
        gap: 1.6rem;
      }

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

  .imageElement {
    display: flex;
  }
`;
