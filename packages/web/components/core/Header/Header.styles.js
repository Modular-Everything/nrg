import styled from "styled-components";

export const Header = styled.header`
  --navHeight: 4.8rem;

  background-color: var(--nrg-black);
  color: var(--white);
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;

  .container {
    height: var(--headerHeight);
    display: grid;
    width: 100%;
    align-items: center;
    gap: 1.8rem;
    grid-template-columns: auto 1fr auto;

    @media (min-width: 768px) {
      gap: 4rem;
    }
  }

  .logo {
    max-width: 7rem;
    width: 100%;
    order: 1;
    justify-self: start;
    padding-right: 0.8rem;

    svg {
      width: 100%;
    }
  }
`;

export const Nav = styled.nav`
  height: 100%;
  order: 2;
  justify-self: end;

  form {
    height: 100%;
  }

  .nav__wrap--outer {
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    gap: 0.8rem;
    width: 100%;
    height: 100%;
    margin: 0;

    &.open input[type="radio"]:checked ~ .nav__wrap--inner {
      transition-delay: 0ms;
    }

    @media (min-width: 400px) {
      gap: 1.6rem;
    }
  }

  .nav__item--outer {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--navHeight);
  }

  .divider {
    height: 2.4rem;
    width: 0.1rem;
    background-color: #3b3b3b;

    @media (min-width: 400px) {
      height: 3.2rem;
    }
  }

  .nav__wrap--inner {
    height: 0;
    opacity: 0;
    pointer-events: none;
    transition: 250ms ease all;
    right: 0;
    width: 100%;
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    top: calc(var(--headerHeight) - var(--navHeight) + 100%);
  }

  .nav__item--inner {
    white-space: nowrap;
    font-size: 1.6rem;
    line-height: 2.4rem;

    a:hover {
      color: var(--nrg-red);
    }
  }

  input[type="radio"] {
    display: none;

    &:checked {
      & ~ .nav__item--title {
        @supports (-webkit-text-stroke: 1px black) {
          -webkit-text-stroke: 1px var(--nrg-red);
          -webkit-text-fill-color: transparent;
        }
      }

      & ~ .nav__wrap--inner {
        transition-delay: 250ms;
        height: auto;
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  .nav__item--title {
    white-space: nowrap;
    cursor: pointer;
    text-transform: uppercase;
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-family: var(--avenue);
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
  background: var(--nrg-black);
  display: block !important;
  transition: 250ms ease height;

  &.closed {
    height: 0 !important;
  }
`;
