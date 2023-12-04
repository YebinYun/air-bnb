import { Box } from "@mui/material";
import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: "0 5%",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Background;
