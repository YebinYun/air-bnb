"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import HeaderContainer from "@/containers/header/HeaderContainer";
import MainCardContainer from "@/containers/main/MainCardContainer";

const queryClient = new QueryClient();

const page = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <HeaderContainer />
        <MainCardContainer />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default page;
