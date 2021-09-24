import React from "react";
import * as S from "./Header.styles";

import Container from "../Container";
import Logo from "../../../images/Logo";

// ---

const Header = () => (
  <S.Header>
    <Container>
      <Logo />
    </Container>
  </S.Header>
);

export default Header;
