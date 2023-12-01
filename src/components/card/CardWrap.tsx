import React from "react";
import { Stack } from "@mui/material";
import CardImg from "./CardImg";
import CardText from "./CardText";
import Background from "@/layout/Background";

const CardWrap = () => {
  const data = [
    {
      img: "",
      infoText: "",
    },
    {
      img: "",
      infoText: "",
    },
    {
      img: "",
      infoText: "",
    },
    {
      img: "",
      infoText: "",
    },
  ];

  return (
    <Background>
      <Stack sx={{ width: "15rem", height: "full" }}>
        <CardImg />
        <CardText />
      </Stack>
    </Background>
  );
};

export default CardWrap;
