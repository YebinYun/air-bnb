import React from "react";
import CardWrap from "@/containers/CardWrap";
import Background from "./Background";
import Header from "@/containers/header/Header";

const UserLayout = () => {
  return (
    <Background>
      <Header />
      <CardWrap />
    </Background>
  );
};

export default UserLayout;
