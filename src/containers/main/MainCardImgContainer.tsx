import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import React, { useState } from "react";

type props = {
  img: string;
  hotelID: string;
  handleOnClickLike: ({ userId, hotelId }: any) => void;
};

const MainCardImgContainer = ({ img, hotelID, handleOnClickLike }: props) => {
  return (
    <MainCardImgComponent
      img={img}
      hotelID={hotelID}
      handleOnClickLike={handleOnClickLike}
    />
  );
};

export default MainCardImgContainer;
