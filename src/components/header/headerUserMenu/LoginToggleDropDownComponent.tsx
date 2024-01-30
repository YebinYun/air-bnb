import { Button, Stack, useMediaQuery } from "@mui/material";
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
