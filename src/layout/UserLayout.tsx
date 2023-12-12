import React from "react";
import CardWrap from "@/containers/CardWrap";
import Navbar from "@/containers/Navbar";
import Background from "./Background";

const UserLayout = () => {
  return (
    <Background>
      <Navbar />
      <CardWrap />
    </Background>
  );
};

export default UserLayout;
