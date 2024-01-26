"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import HeaderContainer from "@/containers/header/HeaderContainer";
import HotelListContainer from "@/containers/main/HotelListContainer";
import { BrowserRouter } from "react-router-dom";

const page = () => {
  return (
    // <BrowserRouter>
    <div>
      {/*  Recoil */}
      <RecoilRoot>
        {/* Header */}
        <HeaderContainer />
        {/* Main */}
        <HotelListContainer />
      </RecoilRoot>
    </div>
    // </BrowserRouter>
  );
};

export default page;
