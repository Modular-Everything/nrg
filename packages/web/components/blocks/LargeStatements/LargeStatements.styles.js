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

    @media (min-width: 768px) {
      position: absolute;
      width: calc(100% - (var(--padding)));
      max-width: 24.8rem;
    }

    &--1 {
      @media (min-width: 768px) {
        bottom: calc(var(--padding) + 18vw * -1);
      }

      @media (min-width: 1000px) {
        bottom: calc(var(--padding) * -2.25);
      }
    }

    &--2 {
      @media (min-width: 768px) {
        right: var(--padding);
        top: calc(var(--padding) + 18vw * -1);
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

    svg {
      width: 100%;
      aspect-ratio: 4/3;

      @media (max-width: 767px) {
        height: auto;
      }
    }
  }
`;
