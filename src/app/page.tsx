"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import HeaderContainer from "@/containers/header/HeaderContainer";
import HotelListContainer from "@/containers/main/HotelListContainer";

const page = () => {
  return (
    <>
      {/*  Recoil */}
      <RecoilRoot>
        {/* Header */}
        <HeaderContainer />
        {/* Main */}
        <HotelListContainer />
      </RecoilRoot>
    </>
  );
};

export default page;
