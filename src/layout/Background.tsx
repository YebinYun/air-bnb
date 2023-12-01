import { Box, Stack } from "@mui/material";
import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <Box sx={{ padding: "0 5%", borderBottom: "solid 1px lightgray" }}>
        {children}
      </Box>
    </>
  );
};

export default Background;
