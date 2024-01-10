import { Button, Stack } from "@mui/material";
import React from "react";

type props = {
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  settingModalHandler: () => void;
};

const LoginToggleDropDownComponent = ({
  loginModalHandler,
  signupModalHandler,
  settingModalHandler,
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
        onClick={() => {
          signupModalHandler();
        }}
        sx={{
          color: "black",
          borderBottom: "1px solid lightgray",
          borderRadius: 0,
        }}
      >
        회원가입
      </Button>
      <Button
        onClick={() => {
          loginModalHandler();
        }}
        sx={{
          color: "black",
          borderBottom: "1px solid lightgray",
          borderRadius: 0,
        }}
      >
        로그인
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

export default LoginToggleDropDownComponent;
