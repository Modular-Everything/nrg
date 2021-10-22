import styled from "styled-components";
import OutlineTextComponent from "../../Elements/OutlineText";

// ---

export const BoltBlock = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: center;
  height: 20rem;
  overflow: hidden;
  background-color: var(--${({ backgroundColor }) => backgroundColor});

  @media (min-width: 768px) {
    height: 37rem;
  }
`;

export const Icon = styled.div`
  position: relative;
  z-index: 10;
  width: 3.2rem;
  height: 12rem;
  pointer-events: none;

  @media (min-width: 768px) {
    width: 6.4rem;
    height: 20rem;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--white);
  }
`;

export const OutlineText = styled(OutlineTextComponent)`
  -webkit-text-stroke-color: #e9e9e9;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
`;
