import styled from "styled-components";
import Container from "../Container";

// ---

export const Header = styled.header`
  position: absolute;
  z-index: 500;
  top: 0;
  width: 100%;
  color: var(--white);
  overflow-x: auto;

  .logo {
    display: flex;
    z-index: 700;
    position: relative;
    margin-bottom: calc(var(--gutter) * 3);

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-column-gap: calc(var(--gutter));
    grid-row-gap: var(--gutter);
    position: relative;
    grid-template-columns: 1fr;
    z-index: 700;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: calc(var(--gutter) * 4);
    }
  }

  a,
  label {
    color: var(--white);
    font-weight: bold;
    font-size: 2.4rem;
    cursor: pointer;
  }

  .menuOpen label span {
    opacity: 0.5;
    transition: 250ms ease opacity;
  }

  input[name="menuItem"] {
    display: none;

    &:checked + span {
      opacity: 1;
    }
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  height: var(--app-height);
  transform: translate(0, -101%);
`;

export const Overlay = styled.svg`
  position: fixed;
  top: 0;
  z-index: 100;
  pointer-events: none;
  fill: var(--black);
  width: 100%;
  height: 100%;
`;

export const MenuContent = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 500;
  width: 100%;
  margin: calc(var(--gutter) * 3) 0;

  @media (min-width: 768px) {
    margin: 0;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      border-top: 1px solid var(--white);

      &:last-of-type {
        border-bottom: 1px solid var(--white);
      }

      @media (min-width: 768px) {
        &:last-of-type {
          border-bottom: 0;
        }
      }
    }

    a {
      padding: calc(var(--gutter) * 2) 0;
      display: flex;
      align-items: flex-start;

      &:hover {
        .menu__content--item {
          color: var(--white);
          -webkit-text-stroke: 0;
        }
      }
    }

    span {
      font-family: var(--grotesque);
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: 1%;
    }

    .menu__content--item {
      font-family: var(--avenue);
      font-size: clamp(3.2rem, 30vw, 5rem);
      text-transform: uppercase;
      margin-left: clamp(calc(var(--gutter) * 2), 15vw, 12rem);
      color: var(--white);
      transition: 350ms ease color;

      @supports (-webkit-text-stroke: 1px white) {
        -webkit-text-stroke: 1px var(--white);
        color: transparent;
      }
    }
  }

  .nestedMenu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export const MenuContentContainer = styled(Container)`
  overflow-x: unset;
`;

export const HeaderContainer = styled(Container)`
  .menuItems {
    min-height: var(--header);
    display: flex;
    flex-direction: column;
    padding: calc(var(--gutter) * 2) 0 0 0;

    @media (min-width: 768px) {
      padding: 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
