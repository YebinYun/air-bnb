"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import HeaderContainer from "@/containers/header/HeaderContainer";
import HotelListContainer from "@/containers/main/HotelListContainer";
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
          <HotelListContainer />
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default page;
