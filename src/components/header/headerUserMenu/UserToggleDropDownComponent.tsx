import UserModalContainer from "@/containers/header/headerUserMenu/UserModalContainer";
import { Button, Stack } from "@mui/material";
import React from "react";

type props = {
  isLogin: boolean;
  isSignup: boolean;
  isSetting: boolean;
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  settingModalHandler: () => void;
  closeModalHandler: () => void;
  userChoice:string;
};

const UserToggleDropDownComponent = ({
  isLogin,
  isSignup,
  isSetting,
  loginModalHandler,
  signupModalHandler,
  settingModalHandler,
  closeModalHandler,
  userChoice,
}: props) => {
  return (
    <Stack
      direction={"column"}
      sx={{
        position: "absolute",
        top: 45,
        right: 0,
        width: "10rem",
        border: "solid 1px lightgray",
        borderRadius: "10px",
        background: "white",
        zIndex: 1,
      }}>
      <Button
        onClick={() => {
          signupModalHandler();
        }}
        sx={{
          color: "black",
          borderBottom: "1px solid lightgray",
          borderRadius: 0,
        }}>
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
        }}>
        로그인
      </Button>
      <Button
        onClick={() => {
          settingModalHandler();
        }}
        sx={{
          color: "black",
        }}>
        수정하기
      </Button>
      {(isLogin || isSignup || isSetting) && (
        <UserModalContainer
          closeModalHandler={closeModalHandler}
          isSetting={isSetting}
          userChoice={userChoice}
        />
      )}
    </Stack>
  );
};

export default UserToggleDropDownComponent;
