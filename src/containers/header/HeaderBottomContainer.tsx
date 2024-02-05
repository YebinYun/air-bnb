"use client";
import React from "react";
import HeaderBottomComponent from "@/components/header/HeaderBottomComponent";
import { useLocationData } from "@/store/location/location";

const HeaderBottomContainer = (props: { match: boolean }) => {
  const { location, locatoinHandleChange } = useLocationData();

  return (
    <HeaderBottomComponent
      match={props.match}
      value={location}
      handleChange={locatoinHandleChange}
    />
  );
};

export default HeaderBottomContainer;
