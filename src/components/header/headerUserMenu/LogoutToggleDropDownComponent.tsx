"use client";

import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import React from "react";

type props = {
  settingModalHandler: () => void;
  toggleUserDataModal: () => void;
  setIsUserDataModalOpen: (boolean: boolean) => void;
};

const LogoutToggleDropDownComponent = ({
  settingModalHandler,
  toggleUserDataModal,
  setIsUserDataModalOpen,
}: props) => {
  const match: boolean = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      direction={"column"}
      sx={{
        position: "absolute",
        top: match ? 70 : 40,
        right: match ? "5rem" : "1.5rem",
        width: match ? "10rem" : "7.5rem",
        border: "solid 1px lightgray",
        borderRadius: "10px",
        background: "white",
        zIndex: "1",
      }}
    >
      <Button
        onClick={() => {
          toggleUserDataModal();
        }}
        sx={{
          color: "black",
          borderBottom: "1px solid lightgray",
          borderRadius: 0,
        }}
      >
        내 정보 보기
      </Button>

      <Button
        onClick={() => {
          typeof window !== undefined && localStorage.removeItem("token");
          window.location.reload();
          setIsUserDataModalOpen(false);
        }}
        sx={{
          color: "black",
          borderBottom: "1px solid lightgray",
          borderRadius: 0,
        }}
      >
        로그아웃
      </Button>

      <Button
        onClick={() => {
          settingModalHandler();
        }}
        sx={{
          color: "black",
        }}
      >
        수정하기
      </Button>
    </Stack>
  );
};

export default LogoutToggleDropDownComponent;
