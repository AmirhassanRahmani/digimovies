import React from "react";

import {
  Bottom,
  MenuIcon,
  MenuInfo,
  Top,
  Container,
} from "./MenuHeader-styles";


function MenuHeader({ top, bottom, icon, index, id , darkMode }) {


  const handleOn = () => {
    id(index);
  };

  const handleOff = () => {
    id(null);
  };

  return (
    <Container onMouseEnter={handleOn} onMouseLeave={handleOff}>
      <MenuIcon>{icon}</MenuIcon>
      <MenuInfo>
        <Top darkMode={darkMode}>{top}</Top>
        <Bottom>{bottom}</Bottom>
      </MenuInfo>
    </Container>
  );
}

export default MenuHeader;
