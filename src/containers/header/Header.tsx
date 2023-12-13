import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Slidebar from "./Slidebar";
import { Box, styled } from "@mui/material";

const Header = () => {
  const [onNavInfoModal, setOnNavInfoModal] = useState<boolean>(false);

  const loginModalHandler = () => {
    setOnNavInfoModal(!onNavInfoModal);
  };
  const HeaderComponent = styled(Box)`
    background: white;
    position: fixed;
    top: 0;
    width: 90%;
    z-index: 1;
  `;

  return (
    <HeaderComponent>
      <Navbar
        onNavInfoModal={onNavInfoModal}
        loginModalHandler={loginModalHandler}
      />
      {!onNavInfoModal && <Slidebar />}
    </HeaderComponent>
  );
};

export default Header;
