import styled from "styled-components";

export const Header = styled.header`
  --navHeight: 4.8rem;

  background-color: var(--nrg-black);
  color: var(--white);
  position: fixed;
  top: 0;
  width: 100%;

  .container {
    height: var(--headerHeight);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  .nav__wrap--outer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.6rem;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;

    &.open input[type="radio"]:checked + .nav__wrap--inner {
      transition-delay: 0ms;
    }
  }

  .nav__item--outer {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--navHeight);
  }

  .divider {
    width: 0.1rem;
    background-color: #3b3b3b;
  }

  .nav__wrap--inner {
    height: 0;
    opacity: 0;
    pointer-events: none;
    transition: 250ms ease all;
    right: 0;
    text-align: right;
    width: 100%;
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    top: calc(var(--headerHeight) - var(--navHeight) + 2.4rem);
    background: black;
  }

  .nav__item--inner {
    white-space: nowrap;
  }

  input[type="radio"] {
    display: none;

    &:checked + .nav__wrap--inner {
      transition-delay: 250ms;
      height: auto;
      opacity: 1;
      pointer-events: auto;
    }
  }

  .nav__item--title {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 3.2rem;

    &:hover {
      @supports (-webkit-text-stroke: 1px black) {
        -webkit-text-stroke: 1px var(--nrg-red);
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export const BlackBar = styled.div`
  height: var(--headerHeight);
  width: 100%;
  background: var(--black);
  display: block !important;
  transition: 250ms ease height;

  &.closed {
    height: 0 !important;
  }
`;
