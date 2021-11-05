import styled from "styled-components";
import Container from "../Container";

// ---

export const Header = styled.header`
  position: absolute;
  z-index: 500;
  top: 0;
  width: 100%;
  height: var(--header);
  color: var(--white);

  .logo {
    z-index: 700;
    position: relative;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: calc(var(--gutter) * 4);
    grid-row-gap: var(--gutter);
    position: relative;
    z-index: 700;
  }

  a {
    text-decoration: none;
    color: var(--white);
    font-weight: bold;
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: var(--app-height);
  transform: translate(0, -101%);
`;

export const Overlay = styled.svg`
  position: relative;
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
`;

export const MenuContentContainer = styled(Container)``;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
