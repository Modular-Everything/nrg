import styled from "styled-components";

export const NavigationArrow = styled.div`
  border: 0;
  background: var(--white);
  box-shadow: var(--drop);
  color: var(--nrg-red);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100rem;
  width: 3.6rem;
  height: 3.6rem;
  position: absolute;
  font-family: var(--simplon);
  font-size: 2rem;
  bottom: 40%;
  left: 0.8rem;
  z-index: 50;
  transition: 250ms ease color, 250ms ease background-color;

  &.next {
    left: unset;
    right: 0.8rem;
  }

  &:hover {
    color: var(--white);
    background-color: var(--nrg-red);
  }

  &:disabled {
    color: var(--nrg-lt-grey);
  }
`;
