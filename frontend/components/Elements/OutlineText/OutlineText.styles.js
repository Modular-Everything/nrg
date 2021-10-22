import styled from "styled-components";

// ---

export const OutlineText = styled.div`
  -webkit-text-stroke: 1px var(--grey);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  p {
    color: transparent;
    font-family: var(--avenue);
    font-size: clamp(32rem, 50vw, 43rem);
    line-height: 40rem;
    text-align: center;
    text-transform: uppercase;
  }
`;
