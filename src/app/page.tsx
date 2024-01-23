"use client";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import HeaderContainer from "@/containers/header/HeaderContainer";
import MainCardContainer from "@/containers/main/MainCardContainer";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const page = () => {
  return (
    <BrowserRouter>
      {/*  Recoil */}
      <RecoilRoot>
        {/* Query */}
        <QueryClientProvider client={queryClient}>
          {/* Header */}
          <HeaderContainer />
          {/* Main */}
          <MainCardContainer />
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default page;
