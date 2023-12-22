"use client";
import React, { useState } from "react";
import HeaderBottomComponent from "@/components/header/HeaderBottomComponent";

const HeaderBottomContainer = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <HeaderBottomComponent value={value} handleChange={handleChange} />;
};

export default HeaderBottomContainer;
