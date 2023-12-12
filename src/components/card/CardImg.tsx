import React, { useState } from "react";
import Image from "next/image";
import { Box, Stack, Card } from "@mui/material";
import { Icon } from "@iconify/react";
import { styled } from "@mui/system";

interface props {
  img: string;
}

const ImageBox = styled(Box)`
  width: 100%;
  height: 15rem;
  transition: transform 0.8s ease;
  object-fit: fill;
  &:hover {
    transform: scale(1.2);
  }
`;

const CardImg = ({ img }: props) => {
  const [isLike, setIsLike] = useState(false);
  const OnChangeLikeHandler = () => {
    setIsLike(!isLike);
  };

  return (
    <Card
      sx={{
        position: "relative",
      }}
    >
      {/* 이미지 */}
      <Box>
        <ImageBox>
          <Image alt="숙소 사진" src={img} fill />
        </ImageBox>

        {/* 좋아요 */}
        <Stack
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: "black",
          }}
          onClick={() => {
            OnChangeLikeHandler();
          }}
        >
          <Icon
            icon={isLike ? "ph:heart-fill" : "ph:heart-duotone"}
            width={"1.5rem"}
          />
        </Stack>
      </Box>
    </Card>
  );
};

export default CardImg;
