"use client";
import React from "react";
import HeaderBottomComponent from "@/components/header/HeaderBottomComponent";
import { useLocationData } from "@/store/location/location";

const HeaderBottomContainer = () => {
  const { location, locatoinHandleChange } = useLocationData();

  return (
    <HeaderBottomComponent
      value={location}
      handleChange={locatoinHandleChange}
    />
  );
};

export default HeaderBottomContainer;
