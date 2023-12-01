import React from "react";
import { Box, Button, Card } from "@mui/material";
import { Icon } from "@iconify/react";

const CardImg = () => {
  return (
    <Card sx={{ position: "relative" }}>
      {/* 이미지 */}
      <Box
        sx={{
          width: "15rem",
          height: "15rem",
          background: "red",
        }}
      />

      {/* 좋아요 */}
      <Button
        sx={{
          position: "absolute",
          top: "0.5rem",
          left: "11.5rem",
          color: "black",
        }}
      >
        <Icon icon="ph:heart-duotone" width={"1.5rem"} />
        {/* <Icon icon="ph:heart-fill" width={"1.5rem"} /> */}
      </Button>
    </Card>
  );
};

export default CardImg;
