import styled from "styled-components";
// import NoiseImg from "../../../images/noise.png";

// ---

export const Noise = styled.div`
  @keyframes noise {
    0% {
      transform: translate3d(100px, 0, 0);
    }
    10% {
      transform: translate3d(0, 100px, 0);
    }
    20% {
      transform: translate3d(-100px, 0, 0);
    }
    30% {
      transform: translate3d(0, -100px, 0);
    }
    40% {
      transform: translate3d(100px, 0, 0);
    }
    50% {
      transform: translate3d(0, 100px, 0);
    }
    60% {
      transform: translate3d(-100px, 0, 0);
    }
    70% {
      transform: translate3d(0, -100px, 0);
    }
    80% {
      transform: translate3d(100px, 0, 0);
    }
    90% {
      transform: translate3d(0, 100px, 0);
    }
    100% {
      transform: translate3d(-100px, 0, 0);
    }
  }

  position: absolute;
  z-index: 0;
  top: -100px;
  left: -100px;
  width: calc(100% + 200px);
  height: calc(100% + 200px);
  pointer-events: none;
  mix-blend-mode: multiply;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 200px);
    height: calc(100% + 200px);
    animation: noise 1s steps(2) infinite;
    background-image: url("/noise.png");
    will-change: transform !important;
  }
`;
