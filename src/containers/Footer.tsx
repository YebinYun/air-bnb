import Background from "@/layout/Background";
import { Stack, Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Background>
      <Container
        sx={{
          background: "#FFF8F6",
          position: "absolute",
          left: 0,
          bottom: "0",
          borderTop: "1px solid lightgray",
        }}
      >
        <Stack>Footer</Stack>
        <Container fixed>Footer</Container>
      </Container>
    </Background>
  );
};

export default Footer;
