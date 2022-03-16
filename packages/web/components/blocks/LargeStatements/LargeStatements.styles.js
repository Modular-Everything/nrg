import styled from "styled-components";

export const LargeStatements = styled.section`
  --padding: 3.2rem;

  background-color: var(--nrg-black);
  padding: var(--padding);
  position: relative;

  @media (min-width: 768px) {
    --padding: 6.4rem;
    padding: calc(var(--padding) * 3) var(--padding);
  }

  .container {
    position: relative;
  }

  .statement__image {
    aspect-ratio: 248/158;
    position: relative;
    border-radius: 0.8rem;
    box-shadow: var(--drop);
    overflow: hidden;
    width: 100%;
    z-index: 50;

    @media (min-width: 768px) {
      position: absolute;
      width: calc(100% - (var(--padding)));
      max-width: 24.8rem;
    }

    &--1 {
      @media (min-width: 768px) {
        bottom: calc(var(--padding) + 25vw * -1);
      }

      @media (min-width: 1000px) {
        bottom: calc(var(--padding) * -2.25);
      }
    }

    &--2 {
      @media (min-width: 768px) {
        right: var(--padding);
        top: calc(var(--padding) + 25vw * -1);
      }

      @media (min-width: 1000px) {
        top: calc(var(--padding) * -2.25);
      }
    }
  }

  .statement {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem 0;

    p {
      max-width: 96rem;
      margin: 0 auto;
      color: #fff;
      font-family: var(--avenue);
      font-size: clamp(2.4rem, 5vw, 6.4rem);
      letter-spacing: 0.05ch;
      line-height: 1.1;
      text-align: center;
      text-transform: uppercase;
      mix-blend-mode: screen;
    }

    strong {
      --padding: calc(1.6rem / 2);
      display: inline;
      align-items: center;
      justify-content: center;
      padding: 0 var(--padding);
      background-color: #fff;
      box-decoration-break: clone;
      /* box-shadow: var(--padding) 0 0 #fff, calc(var(--padding) * -1) 0 0 #fff; */
      color: #000;
      font-weight: normal;
    }

    em {
      display: inline-block;
      height: 100%;
      transform: translateY(-25%);
      font-family: var(--grotesque);
      font-size: clamp(1.2rem, 3vw, 2.4rem);
      font-style: normal;

      @media (min-width: 1100px) {
        transform: translateY(-50%);
      }
    }
  }
`;
