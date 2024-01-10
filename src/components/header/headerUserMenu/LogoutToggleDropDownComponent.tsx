import { Button, Stack } from "@mui/material";
import React from "react";

type props = {
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  settingModalHandler: () => void;
  setIsBookingModalOpen: (isUserDataModalOpen: boolean) => void;
  isUserDataModalOpen: boolean;
};

const LogoutToggleDropDownComponent = ({
  loginModalHandler,
  signupModalHandler,
  settingModalHandler,
  isUserDataModalOpen,
  setIsBookingModalOpen,
}: props) => {
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
        onClick={() => {}}
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
          window.localStorage.clear();
          setTimeout(() => setIsBookingModalOpen(false), 500);
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
