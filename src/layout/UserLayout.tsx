import Footer from "@/containers/home/Footer";
import React from "react";
import { Card } from "@mui/material";
import { styled } from "@mui/system";
import CardWrap from "@/containers/CardWrap";
import Navbar from "@/containers/Navbar";

const UserLayout = () => {
  return (
    <PageContainer>
      <Navbar />
      <CardWrap />
      {/* <Footer /> */}
    </PageContainer>
  );
};

export default UserLayout;

const PageContainer = styled(Card)`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`;
