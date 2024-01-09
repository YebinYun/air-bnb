import React from "react";
import MainCardImgContainer from "./MainCardImgContainer";
import MainCardComponent from "@/components/main/MainCardComponent";

const HeartPracticeContainer = ({
  handleOnClickLike,
  userId,
  hotelId,
  data,
  isLoading,
}: any) => {
  return (
    <>
      <MainCardComponent
        handleOnClickLike={handleOnClickLike}
        userId={userId}
        hotelId={hotelId}
        isLoading={isLoading}
        data={data}
      />
      {/* <MainCardImgContainer img={""} /> */}
    </>
  );
};

export default HeartPracticeContainer;
