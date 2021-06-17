import React from 'react';
import styled from 'styled-components';

import Container from '../Container';

//

const Header = () => (
  <HeaderSC>
    <Container>Header</Container>
  </HeaderSC>
);

export default Header;

const HeaderSC = styled.header`
  background-color: #111;
  color: #adff00;
`;
