import styled from "styled-components";

export const Search = styled.div`
  max-width: 50rem;
  max-height: 50rem;
  z-index: 1100;
  opacity: 0;
  padding: 2.4rem;
  position: fixed;
  top: 20%;
  width: 100%;
  transition: 220ms ease opacity;
  pointer-events: none;

  @media (min-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
  }

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  .aa-Autocomplete {
    --height: 4.4rem;
  }

  .aa-Form {
    border: 0;
    border-radius: 0.8rem;
  }

  .aa-Input {
    padding-top: 0.3rem;

    &::placeholder {
      color: var(--nrg-dk-grey);
    }
  }

  .aa-LoadingIndicator svg {
    color: var(--nrg-red);
  }

  .aa-InputWrapperSuffix .aa-ClearButton {
    padding: 0 0.8rem !important;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  color: var(--white);
  width: 3.2rem;
  height: 4.4rem;
  cursor: pointer;
  display: grid;
  place-content: center;
  order: 3;
  justify-self: end;

  @media (min-width: 640px) {
    width: 4.4rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const Skrim = styled.button`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(0 0 0 / 75%);
  z-index: 1050;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: 220ms ease all;

  &.open {
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  }
`;
