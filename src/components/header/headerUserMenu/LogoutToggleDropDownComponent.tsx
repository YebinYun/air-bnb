"use client";

import { Button, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();
  console.log("pathname====>", pathname);
  console.log("router====>", router);

  return (
    <Stack
      direction={"column"}
      sx={{
        position: "absolute",
        top: 70,
        right: "5rem",
        width: "10rem",
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
