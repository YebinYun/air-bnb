"use client";
import React from "react";
import { BlockLayout } from "./HostInfoComponent";

const HotelModalChangeComponent = ({ setIsReview, isReview }: any) => {
  return (
    <BlockLayout
      sx={{ cursor: "pointer", justifyContent: "center", mt: "1rem" }}
      onClick={() => {
        setIsReview(!isReview);
      }}
    >
      {isReview ? "정보 보러가기" : "리뷰 보러가기"}
    </BlockLayout>
  );
};

export default HotelModalChangeComponent;
