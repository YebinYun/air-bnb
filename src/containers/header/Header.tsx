import React from "react";
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      position={"fixed"}
      width={"90%"}
      zIndex={"2"}
      sx={{ background: "white" }}
    >
      <Navbar />
      <Slidebar />
    </Box>
  );
};

export default Header;
