import styled from "styled-components";
import Container from "../Container";

// ---

export const Header = styled.header`
  position: fixed;
  z-index: 500;
  top: 0;
  width: 100%;
  height: var(--header);
  color: var(--white);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;
