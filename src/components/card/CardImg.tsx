import React from "react";
import Image from "next/image";
import { Box, Button, Card } from "@mui/material";
import { Icon } from "@iconify/react";
import { styled } from "@mui/system";

interface props {
  img: string;
}

const ImageBox = styled(Box)`
  width: 15rem;
  height: 15rem;
  transition: transform 1s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const CardImg = ({ img }: props) => {
  return (
    <Card
      sx={{
        position: "relative",
      }}
    >
      {/* 이미지 */}
      <ImageBox>
        <Image
          src={img}
          alt="숙소 사진"
          width={300}
          height={300}
          style={{ objectFit: "cover" }}
        />
      </ImageBox>

      {/* 좋아요 */}
      <Button
        sx={{
          position: "absolute",
          top: "0.5rem",
          right: "0",
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
