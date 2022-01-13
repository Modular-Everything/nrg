import styled, { keyframes } from "styled-components";

// ---

const runner = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
`;

export const MarqueeWrap = styled.section`
  --color: #000;
  --cut: #fff;
  --blend: multiply;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  mix-blend-mode: var(--blend);

  div {
    display: flex;
    transition: 250ms ease all;
    animation: ${runner} calc(10s * ${({ speedMod }) => speedMod * 0.1 || 1})
      linear infinite;
    left: 0;

    &:nth-child(2) {
      animation-direction: reverse;
    }
  }

  p {
    margin-bottom: var(--gutter);
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
    --padding: calc(var(--gutter) / 2);

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
`;
