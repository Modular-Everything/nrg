import styled from "styled-components";

// ---

export const MarqueeWrap = styled.section`
  --color: #000;
  --cut: #fff;
  --blend: multiply;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  mix-blend-mode: var(--blend);

  p {
    width: 100%;
    margin-bottom: var(--gutter);
    color: var(--color);
    font-family: var(--avenue);
    font-size: clamp(7rem, 10vw, 11rem);
    letter-spacing: 0.05ch;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;

    &:nth-child(1) {
      transform: translateX(-10%);
    }

    &:nth-child(2) {
      transform: translateX(-100%);
    }

    &:nth-child(3) {
      transform: translateX(-150%);
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  strong {
    --padding: calc(var(--gutter) / 2);

    display: inline;
    align-items: center;
    justify-content: center;
    padding: 0 var(--padding);
    background-color: var(--color);
    box-decoration-break: clone;
    box-shadow: var(--padding) 0 0 var(--color),
      calc(var(--padding) * -1) 0 0 var(--color);
    color: var(--cut);
    font-weight: normal;
  }
`;
