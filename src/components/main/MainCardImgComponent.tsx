import { Box, Stack, Card, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type props = {
  OnChangeLikeHandler: () => void;
  isLike: boolean;
  img: string;
};

const MainCardImgComponent = ({ OnChangeLikeHandler, isLike, img }: props) => {
  return (
    <Card sx={{ position: "relative", zIndex: -1 }}>
      <Box>
        <ImageBox>
          <Image alt="호텔사진" src={img} fill />
        </ImageBox>

        <Stack
          sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          onClick={() => {
            OnChangeLikeHandler();
          }}
        >
          {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Stack>
      </Box>
    </Card>
  );
};

export default MainCardImgComponent;

const ImageBox = styled(Box)`
  width: 100%;
  height: 15rem;
  transition: transform 0.8s ease;
  object-fit: fill;
  &:hover {
    transform: scale(1.2);
  }
`;
