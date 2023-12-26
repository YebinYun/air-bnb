import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import React, { useState } from "react";

type props = {
  img: string;
};

const MainCardImgContainer = ({ img }: props) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const OnChangeLikeHandler = () => {
    setIsLike(!isLike);
  };

  return (
    <MainCardImgComponent
      OnChangeLikeHandler={OnChangeLikeHandler}
      isLike={isLike}
      img={img}
    />
  );
};

export default MainCardImgContainer;
