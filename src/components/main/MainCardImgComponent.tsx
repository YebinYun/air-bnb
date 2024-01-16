import { Box, Card, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
  img: string;
  hotelID: string;
};

const MainCardImgComponent = ({
  handleOnClickLike,
  data,
  img,
  hotelID,
}: props) => {
  return (
    <Card sx={{ position: "relative" }}>
      <ImageBox>
        {
          <Image
            width={1000}
            height={1000}
            src={img}
            alt="hotel_photo"
            style={{ width: "100%", height: "100%" }}
            // onError="public/images/noImage.jpg"
          />
        }
      </ImageBox>
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
        onClick={() => {
          handleOnClickLike("659f4687ca9f14ff579da75b", hotelID);
        }}
      >
        {data.likes?.includes(hotelID) ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
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
