import React from "react";
import { Box, Button, Card } from "@mui/material";
import { Icon } from "@iconify/react";

interface props {
  img: string;
}

const CardImg = ({ img }: props) => {
  return (
    <Card
      sx={{
        position: "relative",
      }}
    >
      {/* 이미지 */}
      <Box
        sx={{
          width: "15rem",
          height: "15rem",
        }}
      >
        <img
          src={img}
          alt="숙소 사진"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* 좋아요 */}
      <Button
        sx={{
          position: "absolute",
          top: "0.5rem",
          left: "11rem",
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
