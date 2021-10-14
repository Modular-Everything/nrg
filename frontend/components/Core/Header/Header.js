import React from "react";
import * as S from "./Header.styles";

import Logo from "../../../images/Logo";

// ---

const Header = () => (
  <S.Header>
    <S.HeaderContainer>
      <Logo />
    </S.HeaderContainer>
  </S.Header>
);

export default Header;
