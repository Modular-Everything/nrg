import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--nrg-black);
  color: var(--white);
  padding: clamp(1.6rem, 6vw, 4rem) 0;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  .nav__wrap--outer {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    position: relative;
  }

  .nav__item--outer:last-of-type .nav__wrap--inner {
    right: 0;
  }

  .divider {
    width: 0.1rem;
    background-color: #3b3b3b;
  }

  .nav__wrap--inner {
    display: none;
  }

  input[type="radio"] {
    display: none;

    &:checked + .nav__wrap--inner {
      display: flex;
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

  .nav__wrap--inner {
    position: absolute;
    background-color: var(--black);
    top: 100%;
    flex-direction: column;
  }
`;
