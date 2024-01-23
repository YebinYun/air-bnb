import { Box, Card, styled } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type props = {
  handleOnClickLike: (userId: any, hotelId: any) => void;
  img: string;
  hotelId: string;
  userId: string;
  data: any;
  likes: string[];
  setIsModalOpen: (prop: boolean) => void;
  isModalOpen: boolean;
  getIndex: (prop: number) => void;
  index: number;
};

const HotelListCardComponent = ({
  handleOnClickLike,
  likes,
  img,
  hotelId,
  userId,
  setIsModalOpen,
  isModalOpen,
  getIndex,
  index,
}: props) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);
  return (
    <Card sx={{ position: "relative" }}>
      <ImageBox>
        {
          <Image
            width={1000}
            height={1000}
            src={isImgError ? "/images/noImage.jpg" : img}
            alt="hotel_photo"
            style={{ width: "100%", height: "100%" }}
            onError={() => setIsImgError(true)}
            onClick={() => {
              getIndex(index);
              setIsModalOpen(!isModalOpen);
            }}
          />
        }
      </ImageBox>
      <Box
        key={userId}
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
        onClick={() => {
          handleOnClickLike(userId, hotelId);
        }}
      >
        {likes?.includes(hotelId) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Box>
    </Card>
  );
};

export default HotelListCardComponent;

const ImageBox = styled(Box)`
  width: 100%;
  height: 15rem;
  transition: transform 0.8s ease;
  object-fit: fill;
  &:hover {
    transform: scale(1.2);
  }
`;
