"use client";
import HeaderComponent from "@/components/header/HeaderComponent";
import React from "react";
import { RecoilRoot } from "recoil";

const page = () => {
  return (
    <RecoilRoot>
      <HeaderComponent />
    </RecoilRoot>
  );
};

export default page;
