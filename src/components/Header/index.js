import React from 'react';
import {Container, Image} from "./style";

function Header(props) {
  return (
    <Container>
      <Image resizeMode="contain" source={require('../../images/logo.png')}/>
    </Container>
  );
}

export default Header;
