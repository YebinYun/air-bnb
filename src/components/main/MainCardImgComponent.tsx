import { Box, Stack, Card, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLikeClickHandler } from "@/recoil/RecoilHotelLike";

type props = {
  img: string;
  hotelID: string;
  handleOnClickLike: (userId: string, hotelId: string) => void;
};

const MainCardImgComponent = ({ img, hotelID, handleOnClickLike }: props) => {
  const { handleOnLikeChange, isLike } = useLikeClickHandler();

  console.log(hotelID);

  return (
    <Card sx={{ position: "relative" }}>
      <ImageBox>
        {/* <Image src={img} fill alt="hotel_photo" /> */}
        <Box sx={{ width: "100%", height: "100%", background: "red" }}></Box>

        <Box
          sx={{
            border: "1px solid white",
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
          onClick={() => {
            handleOnClickLike("kildong", "659b665a1bdb5203f3591748");
          }}
        >
          {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Box>
      </ImageBox>
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
