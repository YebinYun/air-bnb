import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import React, { useState } from "react";

type props = {
  img: string;
  hotelID: string;
  data: any;
  handleOnClickLike: ({ userId, hotelId }: any) => void;
};

const MainCardImgContainer = ({
  img,
  hotelID,
  handleOnClickLike,
  data,
}: props) => {
  return (
    <MainCardImgComponent
      img={img}
      data={data}
      hotelID={hotelID}
      handleOnClickLike={handleOnClickLike}
    />
  );
};

export default MainCardImgContainer;
